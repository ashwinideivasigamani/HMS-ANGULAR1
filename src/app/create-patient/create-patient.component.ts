import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit{

  patient:Patient=new Patient();
  data: any;

  constructor(private service:PatientService,private router:Router, private share:SharedService){}
  ngOnInit(): void {
    this.share.on().subscribe(data=>
      {
        this.data=data;
        console.log(data);
      });
      
   
  }
  updateData()
      {
      this.share.emit(this.data);
      }


  savePatient()
  {
    this.service.createPatient(this.patient).subscribe(data=>{
      console.log(data);
    },
    error=>console.log(error));
    this.goToPatientsList();
  }

  onSubmit()
  {
    this.savePatient();
    this.goToPatientsList();
  }

  goToPatientsList()
  {
    this.router.navigate(['/patients']);
  }

}

