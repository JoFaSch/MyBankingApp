import { Adress } from './Adress';
import { Account } from './Account';

export class Customer{

    id:number;
    firstName: string;
    lastName: string;
	age: number;
    adress: Adress;
    password: string;
    accountList: Account[];
    date: Date;


}