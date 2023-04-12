import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { CreateRepComponent } from './create-rep/create-rep.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { RepListComponent } from './rep-list/rep-list.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { UpdateRepComponent } from './update-rep/update-rep.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { ReceptionistHomeComponent } from './receptionist-home/receptionist-home.component';

import { PatientHomeComponent } from './patient-home/patient-home.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { ContactComponent } from './contact/contact.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';

import { DocHomeComponent } from './doc-home/doc-home.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { RepInfoComponent } from './rep-info/rep-info.component';





const routes: Routes = [
  {path:"doctors",component:DoctorListComponent},
  {path:"createdoctor",component:CreateDoctorComponent},
  {path:"updatedoctor/:id",component:UpdateDoctorComponent},
  {path:"patients",component:PatientListComponent},
  {path:"addPatients",component:CreatePatientComponent},
  {path:"updatePatient/:id",component:UpdatePatientComponent},
  {path:"reps",component:RepListComponent},
  {path:"addReps",component:CreateRepComponent},
  {path:"updateRep/:id",component:UpdateRepComponent},
  {path:"appointments",component:AppointmentsListComponent},
  {path:"addAppointment",component:CreateAppointmentComponent},
  {path:"updateAppointment/:id",component:UpdateAppointmentComponent},
  {path:"bills",component:BillListComponent},
  {path:"addBill",component:CreateBillComponent},
  {path:"updateBill/:id",component:UpdateBillComponent},
  {path:"about",component:AboutComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path: "doctorHome",component:DoctorHomeComponent},
  {path:"recptionHome",component:ReceptionistHomeComponent},
  {path: "login",component:LoginComponent}, 
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
  {path: "patientHome",component:PatientHomeComponent},
  {path:"mainHome", component:MainhomeComponent},
  {path:"contact",component:ContactComponent},
  {path: "admindashboard",component:AdmindashboardComponent},
  {path: "patientInfo",component:PatientInfoComponent},
  
  {path: "docHome",component:DocHomeComponent},
  {path: "doctorInfo",component:DoctorInfoComponent},
  {path: "repInfo",component:RepInfoComponent},
 
  

 

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
