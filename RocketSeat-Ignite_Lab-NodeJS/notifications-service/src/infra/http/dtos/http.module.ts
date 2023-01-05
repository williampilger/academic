import { Module } from "@nestjs/common";
import { NotificationsController } from "../controlers/notifications.controller";

@Module({
    imports: [NotificationsController]
})
export class HttpModule {}