import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rep } from '../rep';
import { RepService } from '../rep.service';

@Component({
  selector: 'app-rep-list',
  templateUrl: './rep-list.component.html',
  styleUrls: ['./rep-list.component.css']
})
export class RepListComponent implements OnInit{
  reps:Rep[]=[];
  role:string="";

  constructor(private service:RepService,private router:Router,private acti:ActivatedRoute){}
  ngOnInit(): void {
    this.getReps();
    this.acti.queryParams.subscribe(para=>{
      this.role=para['role'];
      console.log(this.role);
    });
  }

  getReps()
  {
    this.service.getRepList().subscribe(data=>{
      this.reps=data;
    },
    error=>console.log(error));
  }

  add()
  {
    this.router.navigate(["/addReps"]);
  }
back1()
{
  this.router.navigate(['/recptionHome'])
}
back()
{
  this.router.navigate(["/admindashboard"])
}
  updateRep(id:number)
  {
    this.router.navigate(["updateRep",id]);
  }

  deleteRep(id:number)
  {
    this.service.deleteRep(id).subscribe(data=>{
      console.log(data);
      this.getReps();
      this.goToRepsList();
  
    },
    error=>console.log(error));
  }

  goToRepsList()
  {
    this.router.navigate(["/reps"]);
  }
}
