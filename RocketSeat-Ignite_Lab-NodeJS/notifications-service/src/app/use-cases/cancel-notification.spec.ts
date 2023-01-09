import { Content } from "@app/entities/content";
import { Notification } from "@app/entities/notification";
import { InMemoryNotificationsRepository } from "@test/repositories/in-memory-notifications-repository";
import { CancelNotification } from "./cancel-notification";

describe('Cancel Notification', ()=>{
    it('Shut be able to cancel a notification', async ()=>{
        const notificationsRepository = new InMemoryNotificationsRepository();

        const notification = new Notification({
            content: new Content('Test Notification'),
            category: 'Test',
            recipientId: 'example-recipient-id'
        });
        await notificationsRepository.create(notification);
        
        const cancelNotification = new CancelNotification( notificationsRepository );

        await cancelNotification.execute({notificationId:notification.id});

        expect(notificationsRepository.notifications).toHaveLength(1);
        expect(notificationsRepository.notifications[0].canceledAt).toEqual( expect.any(Date) );//espera qualquer data.
    });
    it('Shut not be able to cancel a no existing notification', async ()=> {
        const notificationsRepository = new InMemoryNotificationsRepository();
        const cancelNotification = new CancelNotification( notificationsRepository );

        

        expect( ()=>{
            return cancelNotification.execute({notificationId:'fake-notification-id'});
        }).rejects.toThrow();
    });
});