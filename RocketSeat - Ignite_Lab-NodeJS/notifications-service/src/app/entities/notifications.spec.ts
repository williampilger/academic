import { Content } from "./content";
import { Notification } from "./notification";

describe('Notifications', ()=>{
    it('shout be able to create a notification', ()=>{
        const notification = new Notification({
            content: new Content('Você recebeu uma notificação.'),
            category: 'test',
            recipientId: 'example-recipient-id'
        });
        expect(notification).toBeTruthy();
    })
});