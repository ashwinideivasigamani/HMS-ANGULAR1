import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Login } from '../login';
import { LoginResponse } from '../login-response';
import { SharedService } from '../shared.service';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { DoctorService } from '../doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AuthService,private router:Router,
    private  patientservice:PatientService, private share:SharedService,private doctor:DoctorService){}
  ngOnInit(): void {
    
  }

 login:Login=new Login();
 loginRes:LoginResponse=new LoginResponse();
 errorMsg:String="";
 patient:Patient =new Patient();
 obj:any;


  onSubmit()
  {
    this.loginservice();
    
  }

  loginservice()
  {
    this.service.login(this.login).subscribe(data=>
      {
        console.log(data);
        this.loginRes=data;
        if(this.loginRes.role=="admin")
        {
          this.router.navigate(["/admindashboard"]);
        }
        if(this.loginRes.role=="doctor")
        {
          let email=this.login.email;
        

          this.router.navigate(["/docHome"],{queryParams:{email:this.login.email}});
        }

        if(this.loginRes.role=="receptionist")
        {
          let  email=this.login.email;
          this.router.navigate(["/recptionHome"],{queryParams:{email:this.login.email}});
        }
        if(this.loginRes.role=="patient")
        {
          let email=this.login.email;
          this.router.navigate(["/patientHome"],{queryParams:{email:this.login.email}});
          
        }

      },
      error=>
      {
        this.loginRes=error;
        this.errorMsg=error.error.message;
        console.log(error);
      });

  }
  
}
