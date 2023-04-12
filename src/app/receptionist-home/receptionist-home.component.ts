import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { RepService } from '../rep.service';
import { Rep } from '../rep';

@Component({
  selector: 'app-receptionist-home',
  templateUrl: './receptionist-home.component.html',
  styleUrls: ['./receptionist-home.component.css']
})
export class ReceptionistHomeComponent  implements OnInit{
  rep:Rep=new Rep;
  email:string="";
  constructor( private route:Router, private rout:ActivatedRoute, private service:RepService,private active:ActivatedRoute)
  {

   }
  ngOnInit(): void {
    
    this.active.queryParams.subscribe(param=>
      {
        this.email=param['email'];
        console.log(this.email);
      });
      this.service.getByEmail(this.email).subscribe(data=>
        {
          this.rep=data;
          console.log(this.rep);
        });
  }
  
  goToReps()
  {
    this.route.navigate(["/addPatients"])
  }
  goToAppList()
  {
    this.route.navigate(["/appointments"])
  }
  goToPatients()
  {
    this.route.navigate(["/patients"])
  }
  goToBills()
  {
    this.route.navigate(["/addBill"])
  }
  goToBillsReport()
  {
    this.route.navigate(["/bills"])
  }


   upRep()
  {
    let queryParams ={profile:JSON.stringify(this.rep)}
    this.route.navigate(["/patientInfo"],{queryParams});
  }
}
