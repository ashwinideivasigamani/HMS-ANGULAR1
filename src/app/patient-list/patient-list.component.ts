import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients:Patient[]=[];
  role:string="";

  constructor(private service:PatientService,private router:Router,private rout:ActivatedRoute){}
  ngOnInit(): void {
    this.getPatients();
    this.rout.queryParams.subscribe(para=>{
      this.role=para['role'];
      console.log(this.role);

    });
  }

  getPatients()
  {
    this.service.getPatientsList().subscribe(data=>{
      this.patients=data;
    },
    error=>console.log(error));
  }

  add()
  {
    this.router.navigate(["/addPatients"]);
  }

  back()
  {
    this.router.navigate(['/admindashboard'])
  }
  back1()
 {
  this.router.navigate(["/receptionHome"])
 }

  updatePatient(id:number)
  {
    this.router.navigate(["updatePatient",id]);
  }

  deletePatient(id:number)
  {
    this.service.deletePatient(id).subscribe(data=>{
      console.log(data);
      this.goToPatientsList();
    },
    error=>console.log(error));
  }

  goToPatientsList()
  {
    this.router.navigate(["/patients"]);
  }
 

}
