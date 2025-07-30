/**
 * Esta classe é responsável por CANCELAR o envio de uma notificação.
 */

import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface CountRecipientNotificationsRequest {
    recipientId: string,
}

interface CountRecipientNotificationsResponse {
    count: number;
};

@Injectable()
export class CountRecipientNotifications {

    constructor(private notificationsRepository: NotificationsRepository){}

    async execute(request: CountRecipientNotificationsRequest):Promise<CountRecipientNotificationsResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);
        
        if(!notification){
            throw new Error('2301071809 - Impossible get this notification.');
        }

        notification.cancel();

        return;
    }
}