export class Content {
    private readonly content: string;

    get value(): string {
        return this.content;
    }

    private validateContentLenght(content: string): boolean{
        return content.length >=5 && content.length <= 240;
    }

    constructor(content:string){
        if( !this.validateContentLenght(content) ){
            throw new Error('2301041622 - Content lenght error.');
        }

        this.content = content;
    }
}