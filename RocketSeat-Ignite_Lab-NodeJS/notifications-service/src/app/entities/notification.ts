import { randomUUID } from "crypto";
import { Replace } from "../helpers/Replace";
import { Content } from "./content";

interface NotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;//Interessante: Recebendo o campo como `undefined` indica que NÂO QUERO MODIFICAR o campo. Recebendo ele como `null` indica que estou DEFININDO ela como não lida (como nula).
    canceledAt?: Date | null;
    createdAt: Date;
}

export class Notification {
    private _id: string;
    private props: NotificationProps;

    constructor(props: Replace<NotificationProps, {createdAt?: Date} >) {
        this._id = randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date(), //INTERESSANTE: Maneira bem doida de tornar o atributo opcional, e se ele não for informado, ele será preenchido. Isso é útil pra manter o campo como obrigatório no objeto, mas não no momento da criação.
        };
    }

    /**
     * GETTERS and SETTERS
     */

    public get id() {
        return this._id;
    }

    public set recipientId(recipientId: string) {
        this.props.recipientId = recipientId;
    }

    public get recipientId() {
        return this.props.recipientId;
    }

    public set content(content: Content) {
        this.props.content = content;
    }

    public get content(): Content {
        return this.props.content;
    }

    public set category(category: string) {
        this.props.category = category;
    }

    public get category() {
        return this.props.category;
    }

    public set readAt(readAt: Date | null | undefined) {
        this.props.readAt = readAt;
    }

    public get readAt(): Date | null | undefined {
        return this.props.readAt;
    }

    public set createdAt(createdAt: Date ) {
        this.props.createdAt = createdAt;
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }

    public cancel( ) {
        this.props.canceledAt = new Date();
    }

    public get canceledAt(): Date | null | undefined {
        return this.props.canceledAt;
    }

}