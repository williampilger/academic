import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository{
    
    public notifications: Notification[] = [];

    async findById(notificationId: string): Promise<Notification | null>{
        const notification = this.notifications.find(
            item => item.id === notificationId
        );

        if(!notification){
            return null;
        }

        return notification;
    };

    async save(notification: Notification): Promise<void>{
        const notificationIndex = this.notifications.findIndex(
            item => item.id == notification.id
        );

        if(notificationIndex >= 0){
            this.notifications[notificationIndex] = notification;
        } else {
            throw new Error('2301081748 - Impossible modify a non existent notification.');
        }
        
    };

    async create(notification: Notification){
        this.notifications.push(notification);
    }
}