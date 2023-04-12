import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})
export class BillListComponent {
  bills:Bill[]=[];
  role:string="";

  constructor(private service:BillService,private router:Router,private activ:ActivatedRoute){}
  ngOnInit(): void {
    this.getBills();
    this.activ.queryParams.subscribe(paras=>{
      this.role=paras['role'];
      console.log(this.role);
    });
  }

  getBills()
  {
    this.service.getBillList().subscribe(data=>{
      console.log(data);
      this.bills=data;
    },
    error=>console.log(error));
  }

  add()
  {
    this.router.navigate(["/addBill"]);
  }

  updateBill(id:number)
  {
    this.router.navigate(["updateBill",id]);
  }

  deleteBill(id:number)
  {
    this.service.deleteBill(id).subscribe(data=>{
      console.log(data);
      this.getBills();
      this.goToAppList();
  
    },
    error=>console.log(error));
  }

  goToAppList()
  {
    this.router.navigate(["/bills"]);
  }
  back()
  {

this.router.navigate(["/admindashboard"]);
  }
  back1()
  {
this.router.navigate(["/recptionHome"]);
  }
}
