import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rep } from '../rep';
import { RepService } from '../rep.service';

@Component({
  selector: 'app-create-rep',
  templateUrl: './create-rep.component.html',
  styleUrls: ['./create-rep.component.css']
})
export class CreateRepComponent implements OnInit{

  rep:Rep=new Rep();
  reps: Rep[]=[];

  constructor(private service:RepService,private router:Router){}
  ngOnInit(): void {
    
  }
  
   
  

employeeDetails(id: number){
  this.router.navigate(['employee-details', id]);
}

  saveRep()
  {
    this.service.createRep(this.rep).subscribe(data=>{
      console.log(data);
      this.goToRepsList();
      this.getReps();
    },
    error=>console.log(error));
    this.goToRepsList();
  }

  onSubmit()
  {
    this.saveRep();
  }

  goToRepsList()
  {
    this.router.navigate(["reps"]);
  }

  getReps()
  {
    this.service.getRepList().subscribe(data=>{
      this.reps=data;
    },
    error=>console.log(error));
  }
}
