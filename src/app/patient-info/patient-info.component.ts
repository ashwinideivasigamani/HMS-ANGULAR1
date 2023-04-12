import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {
goToUpdateProfile(id: any) {
this.rout.navigate(["/updatePatient",id],{queryParams:{profile:'profile'}});

}

  data: any;

patient:Patient= new Patient();
constructor(private active:ActivatedRoute, private patients:PatientService, private rout:Router)
{
  this.active.queryParams.subscribe(param=>
    {
      let doctorstring=param['profile']
      if(doctorstring)
      {
          this.patient=JSON.parse(doctorstring);
      }
          });
}

  ngOnInit(): void {
  

  }
 


}
