import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Rep } from '../rep';

@Component({
  selector: 'app-rep-info',
  templateUrl: './rep-info.component.html',
  styleUrls: ['./rep-info.component.css']
})
export class RepInfoComponent  implements OnInit{
 rep:Rep=new Rep;
email:any;


  constructor(private active:ActivatedRoute, private patients:PatientService, private rout:Router)
{
  this.active.queryParams.subscribe(param=>
    {
      let doctorstring=param['profile']
      if(doctorstring)
      {
          this.rep=JSON.parse(doctorstring);
      }
          });
}
  ngOnInit(): void {
    
  }
  goToUpdatePro(id:any)
  {
    this.rout.navigate(["/updateRep",id],{queryParams:{profile:'profile'}});
  }

}
