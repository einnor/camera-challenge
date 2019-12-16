"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lib_1 = require("../lib");
exports.sendEmail = (event, context, callback) => {
    const toFullName = 'Ronnie Nyaga';
    const to = `${toFullName} <ronnienyaga@gmail.com>`;
    const fromFullName = 'Ronnie Nyaga';
    const from = `${fromFullName} <ronnienyaga@gmail.com>`;
    const template = 'send-email';
    const attachments = [{ path: event.imageUrl }];
    if (!event.imageUrl) {
        return;
    }
    lib_1.Email.send(callback, to, from, 'Coding Challenge', template, { imageUrl: event.imageUrl }, attachments, from).then((result) => {
        console.info(`SES Message ID: ${result.MessageId}`);
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZEVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2Z1bmN0aW9ucy9zZW5kRW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxnQ0FBK0I7QUFNbEIsUUFBQSxTQUFTLEdBQXFDLENBQUMsS0FBOEIsRUFBRSxPQUFnQixFQUFFLFFBQWtCLEVBQUUsRUFBRTtJQUduSSxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUM7SUFDbEMsTUFBTSxFQUFFLEdBQUcsR0FBRyxVQUFVLDBCQUEwQixDQUFDO0lBQ25ELE1BQU0sWUFBWSxHQUFHLGNBQWMsQ0FBQztJQUNuQyxNQUFNLElBQUksR0FBRyxHQUFHLFlBQVksMEJBQTBCLENBQUM7SUFDdkQsTUFBTSxRQUFRLEdBQUcsWUFBWSxDQUFDO0lBRTlCLE1BQU0sV0FBVyxHQUFHLENBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFFaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7UUFDbkIsT0FBTztLQUNSO0lBRUQsV0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtRQUM1SCxPQUFPLENBQUMsSUFBSSxDQUFDLG1CQUFtQixNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUN0RCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyJ9