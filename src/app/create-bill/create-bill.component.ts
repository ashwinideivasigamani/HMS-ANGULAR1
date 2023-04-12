import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-create-bill',
  templateUrl: './create-bill.component.html',
  styleUrls: ['./create-bill.component.css']
})
export class CreateBillComponent {
  bill:Bill=new Bill();
  bills: Bill[]=[];
  constructor(private service:BillService,private router:Router){}
  ngOnInit(): void {

  }

  saveBill()
  {
    this.service.createBill(this.bill).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    this.goToBillList();
    this.getBills();
  }

  goToBillList()
  {
    this.router.navigate(["/bills"]);
  }
  onSubmit()
  {
    this.saveBill();
  }

  getBills()
  {
    this.service.getBillList().subscribe(data=>{
      console.log(data);
      this.bills=data;
    },
    error=>console.log(error));
  }
}
