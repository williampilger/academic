/**
 * Esta classe é responsável por CANCELAR o envio de uma notificação.
 */

import { Injectable } from "@nestjs/common";
import { NotificationsRepository } from "../repositories/notifications-repository";

interface CancelNotificationRequest {
    notificationId: string,
}

type CancelNotificationResponse = void;

@Injectable()
export class CancelNotification {

    constructor(private notificationsRepository: NotificationsRepository){}

    async execute(request: CancelNotificationRequest):Promise<CancelNotificationResponse> {
        const { notificationId } = request;

        const notification = await this.notificationsRepository.findById(notificationId);
        
        if(!notification){
            throw new Error('2301071809 - Impossible get this notification.');
        }

        notification.cancel();

        return;
    }
}