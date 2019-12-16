import { ScheduledEvent, Context, Callback, Handler } from 'aws-lambda';
import { Email } from '../lib';

type IEvent = {
  imageUrl: string;
};

export const sendEmail: Handler<ScheduledEvent & IEvent> = (event: ScheduledEvent & IEvent, context: Context, callback: Callback) => {
  // const toFullName = 'Coding Challenge';
	// const to = `${toFullName} <coding-challenge@mieterengel.de>`;
	const toFullName = 'Ronnie Nyaga';
	const to = `${toFullName} <ronnienyaga@gmail.com>`;
	const fromFullName = 'Ronnie Nyaga';
  const from = `${fromFullName} <ronnienyaga@gmail.com>`;
  const template = 'send-email';

  const attachments = [ { path: event.imageUrl }];

  if (!event.imageUrl) {
    return;
  }

  Email.send(callback, to, from, 'Coding Challenge', template, { imageUrl: event.imageUrl }, attachments, from).then((result) => {
    console.info(`SES Message ID: ${result.MessageId}`);
  });
};
