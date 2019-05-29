export class UpdateAccountRQ{


    iban1: string;
    iban2: string;
    amount: number;
    reference: string;


    constructor(iban1: string, iban2: string, amount:number, reference: string){
        this.iban1=iban1;
        this.iban2=iban2;
        this.amount=amount;
        this.reference= reference;
    }
}