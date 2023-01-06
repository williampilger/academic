import { Module } from "@nestjs/common";
import { SendNotification } from "src/app/use-cases/send-notification";
import { DatabaseModule } from "src/infra/database/database.module";
import { NotificationsController } from "../controlers/notifications.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [
        NotificationsController
    ],
    providers: [
        SendNotification
    ]
})
export class HttpModule {}