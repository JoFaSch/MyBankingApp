import { Iban } from './Iban';
import { Transfer } from './Transfer';

export class Account{

    id: number;
    balance: number;
    iban: Iban;
    transferList: Transfer[];
    name: string;

}