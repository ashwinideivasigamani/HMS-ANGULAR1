import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit{
  id:number=0;
  patient:Patient=new Patient();
  constructor(private service:PatientService,private route:ActivatedRoute,private router:Router){}
  ngOnInit(): void {
    this.id=this.route.snapshot.params["id"];
    this.service.getPatientById(this.id).subscribe(data=>{
      this.patient=data;
    },
    error=>console.log(error));
  }

  onSub() {
    this.service.updatePatientById(this.id, this.patient).subscribe(data => {
      this.router.navigate(["/patients"]);
    },
    error=>console.log(error));
  }

}
