/**
 * Esta classe é responsável por CRIAR e enviar a notificação.
 * Com "enviar" quero dizer: outro microsserviço envia uma notificação para o sistema de notificações.
 */

import { Injectable } from "@nestjs/common";
import { Content } from "../entities/content";
import { Notification } from "../entities/notification";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface SendNotificationRequest {
    recipientId: string,
    content: string,
    category: string
}

@Injectable()
export class SendNotification {

    constructor(private notificationsRepository: NotificationsRepository){}

    async execute(request: SendNotificationRequest):Promise<{notification:Notification}> {
        const {recipientId, content, category} = request

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        });

        await this.notificationsRepository.create(notification);
        
        return {
            notification
        }
    }
}