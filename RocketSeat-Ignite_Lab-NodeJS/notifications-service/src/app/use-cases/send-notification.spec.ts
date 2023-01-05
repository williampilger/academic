import { SendNotification } from "./send-notification";

describe('Send Notification', ()=>{
    it('Shut be able to send a Notification', async ()=>{
        const sendNotification = new SendNotification();

        const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'Test',
            recipientId: 'example-recipient-id'
        });

        expect(notification).toBeTruthy();
    });
});