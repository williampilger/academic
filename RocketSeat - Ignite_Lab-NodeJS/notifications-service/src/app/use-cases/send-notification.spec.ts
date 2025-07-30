import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

describe('Send Notification', ()=>{
    it('Shut be able to send a Notification', async ()=>{
        const notificationsRepository = new InMemoryNotificationsRepository();
        const sendNotification = new SendNotification( notificationsRepository );

        const {notification} = await sendNotification.execute({
            content: 'This is a notification',
            category: 'Test',
            recipientId: 'example-recipient-id'
        });

        console.log(notificationsRepository.notifications);

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0]).toEqual(notification);
    });
});