import { SendEmailRequest } from 'aws-sdk/clients/ses';
import * as path from 'path';
import * as AWS from 'aws-sdk';
import Email from 'email-templates';
import { Callback } from 'aws-lambda';

// Set the AWS region
AWS.config.update({ region: 'us-east-1' });

// Initalize the SES client
const SES = new AWS.SES();

type IAttachment = {
  path: string;
};

export function send(
  callback: Callback,
  to: string | string[],
  from: string,
  subject: string,
  template: string,
  data?: object,
  attachments?: IAttachment[],
  replyTo?: string,
  bcc?: string
) {
  const email = new Email({
    preview: false,
    views: {
      root: path.resolve('templates/email'),
    },
    message: {
      from: from,
      bcc: bcc,
      attachments: attachments && attachments.length ? attachments : undefined,
    },
    send: false,
    juice: true,
    juiceResources: {
      preserveImportant: true,
      webResources: {
        relativeTo: path.resolve('templates'),
      },
    },
    transport: {
      jsonTransport: true,
    },
  });

  const toSummary = typeof to === 'string' ? to : to.join(',');

  console.log(`Begin rendering email template '${template}' for ${toSummary}`);
  return email.render(`${template}/html`, data).then((output) => {
    console.log(`Finished rendering email template '${template}' for ${toSummary}`);

    // Create the BCC list
    const bccList: string[] = typeof bcc === 'string' ? bcc.split(',').map((x) => x.trim()) : [];

    // Setup the SES Message Params
    const sesParams: SendEmailRequest = {
      Destination: {
        BccAddresses: bccList,
        ToAddresses: Array.isArray(to) ? to : [to],
      },
      Message: {
        Body: {
          Html: {
            Charset: 'UTF-8',
            Data: output,
          },
        },
        Subject: {
          Charset: 'UTF-8',
          Data: subject,
        },
      },
      Source: from,
      ReplyToAddresses: replyTo ? [replyTo] : undefined,
    };

    // Send the message and return a Promise
    console.log(`Invoking SES.sendEmail for ${toSummary}...`);

    return SES.sendEmail(sesParams).promise();
  });
}
