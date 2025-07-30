import { Notification } from "@app/entities/notification";

export class PrismaNotificationMapper {
    static toPrisma(notification:Notification){
        return {
            category: notification.category,
            id: notification.id,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        }
    }
}