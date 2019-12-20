# camera-challenge
- Take a photo
- Send it to the backend
- Backend processes it and adds it to S3
- Back end then adds a message to SQS
- A SES lambda function is triggered which send an email of the photo to the provided email address
