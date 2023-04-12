import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';


@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent {
  patients:Patient[]=[];
  role:string="";
  email:String="";
  patient:Patient=new Patient();
  constructor(private router:Router,private active:ActivatedRoute,private service:PatientService)
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
          this.patient=data;
          console.log(this.patient);
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
  pro()
  {
    // this.router.navigate(["/patientInfo"])
    
  let queryParams ={profile:JSON.stringify(this.patient)}
  this.router.navigate(["/patientInfo"],{queryParams});
  }
}
