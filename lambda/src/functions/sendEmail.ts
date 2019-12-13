import { ScheduledEvent, Context, Callback, Handler } from 'aws-lambda';
import { Email } from '../lib';

export const sendEmail: Handler<ScheduledEvent> = (event: ScheduledEvent, context: Context, callback: Callback) => {
	const toFullName = 'Coding Challenge';
	const to = `${toFullName} <coding-challenge@mieterengel.de>`;
	const fromFullName = 'Ronnie Nyaga';
  const from = `${fromFullName} <ronnienyaga@gmail.com>`;
  const template = 'email';

  Email.send(callback, to, from, 'Coding Challenge', template, {}, from).then((result) => {
    console.info(`SES Message ID: ${result.MessageId}`);
  });
};
