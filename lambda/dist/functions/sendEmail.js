"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
exports.sendEmail = (event, context, callback) => {
    const toFullName = 'Coding Challenge';
    const to = `${toFullName} <coding-challenge@mieterengel.de>`;
    const fromFullName = 'Ronnie Nyaga';
    const from = `${fromFullName} <ronnienyaga@gmail.com>`;
    const template = 'send-email';
    lib_1.Email.send(callback, to, from, 'Coding Challenge', template, {}, from).then((result) => {
        console.info(`SES Message ID: ${result.MessageId}`);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZEVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9zZW5kRW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnQ0FBK0I7QUFFbEIsUUFBQSxTQUFTLEdBQTRCLENBQUMsS0FBcUIsRUFBRSxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUNqSCxNQUFNLFVBQVUsR0FBRyxrQkFBa0IsQ0FBQztJQUN0QyxNQUFNLEVBQUUsR0FBRyxHQUFHLFVBQVUsb0NBQW9DLENBQUM7SUFDN0QsTUFBTSxZQUFZLEdBQUcsY0FBYyxDQUFDO0lBQ25DLE1BQU0sSUFBSSxHQUFHLEdBQUcsWUFBWSwwQkFBMEIsQ0FBQztJQUN2RCxNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUM7SUFFOUIsV0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQ3JGLE9BQU8sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDIn0=