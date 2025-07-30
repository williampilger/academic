import { Notification } from "@app/entities/notification";
import { NotificationsRepository } from "@app/repositories/notifications-repository";
import { Injectable } from "@nestjs/common";
import { PrismaNotificationMapper } from "../mappers/prisma-notifications-mapper";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository{
    constructor( private prismaService: PrismaService){}

    async create(notification: Notification): Promise<void>{

        const raw = PrismaNotificationMapper.toPrisma(notification);
        
        await this.prismaService.notifications.create({
            data: raw
        });
    }

    async findById(notificationId: string): Promise<Notification | null> {
        throw new Error('Method not implemented.');
    }

    async save(notification: Notification): Promise<void> {
        throw new Error('Method not implemented.');
    }
}