import { Patient } from './patient';

export class Bill {
    id!:number;
    patient:Patient=new Patient();
    billDate!:Date;
    totalAmount!:number;
    paymentStatus!:String;
}
