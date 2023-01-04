/**
 * Esta classe é responsável por CRIAR e enviar a notificação.
 * Com "enviar" quero dizer: outro microsserviço envia uma notificação para o sistema de notificações.
 */

import { Content } from "../entities/content";
import { Notification } from "../entities/notification";

interface SendNotificationRequest {
    recipientId: string,
    content: string,
    category: string
}

export class SendNotification {
    async execute(request: SendNotificationRequest):Promise<{notification:Notification}> {
        const {recipientId, content, category} = request

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        });

        return {
            notification
        }
    }
}