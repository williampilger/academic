import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";

export class InMemoryNotificationsRepository implements NotificationsRepository{
    
    public notifications: Notification[] = [];

    async findById(notificationId: string): Promise<Notification | null>{

    };

    async save(notification: Notification): Promise<void>{

    };

    async create(notification: Notification){
        this.notifications.push(notification);
    }
}