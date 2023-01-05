import { Notification } from "../entities/notification";
import { SendNotification } from "./send-notification";

let notifications:Notification[] = [];

const notificationsRepository = {
    async create(notification: Notification){
        notifications.push(notification);
    },
}

describe('Send Notification', ()=>{
    it('Shut be able to send a Notification', async ()=>{
        const sendNotification = new SendNotification( notificationsRepository );

        const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'Test',
            recipientId: 'example-recipient-id'
        });

        console.log(notifications);

        expect(notifications).toHaveLength(1);
    });
});