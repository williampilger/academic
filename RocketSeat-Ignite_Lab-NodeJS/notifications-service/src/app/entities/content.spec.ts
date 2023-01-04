import { Content } from "./content";

describe('Notification content', ()=>{

    it('deve ser possível criar a notificação', () => {
        const content = new Content('Essa é uma notificação válida!');
        expect(content).toBeTruthy();
    });
    
    it('Deve falhar por ter pouco texto.', ()=>{
        expect( () => new Content('curt') ).toThrow();
    });
    
    it('Deve falhar por ter muito texto.', ()=>{
        expect( () => new Content( 'a'.repeat(241) ) ).toThrow();
    });
});
