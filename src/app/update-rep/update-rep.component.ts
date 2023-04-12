import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rep } from '../rep';
import { RepService } from '../rep.service';

@Component({
  selector: 'app-update-rep',
  templateUrl: './update-rep.component.html',
  styleUrls: ['./update-rep.component.css']
})
export class UpdateRepComponent implements OnInit{
  id:number=0;
  rep:Rep=new Rep();
  constructor(private service:RepService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.service.getRepById(this.id).subscribe(data=>{
      this.rep=data;
      console.log(data);
    },
    error=>console.log(error));
  }

  onSub() {
    this.service.updateRepById(this.id, this.rep).subscribe(data => {
      this.router.navigate(["/reps"]);
    },
    error=>console.log(error));
  }
}
