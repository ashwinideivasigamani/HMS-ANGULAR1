import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateDoctorComponent } from './create-doctor/create-doctor.component';
import { FormsModule } from '@angular/forms';
import { UpdateDoctorComponent } from './update-doctor/update-doctor.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { RepListComponent } from './rep-list/rep-list.component';
import { CreateRepComponent } from './create-rep/create-rep.component';
import { UpdateRepComponent } from './update-rep/update-rep.component';
import { AppointmentsListComponent } from './appointments-list/appointments-list.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { UpdateAppointmentComponent } from './update-appointment/update-appointment.component';
import { BillListComponent } from './bill-list/bill-list.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { UpdateBillComponent } from './update-bill/update-bill.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { DoctorHomeComponent } from './doctor-home/doctor-home.component';
import { ReceptionistHomeComponent } from './receptionist-home/receptionist-home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PatientHomeComponent } from './patient-home/patient-home.component';
import { MainhomeComponent } from './mainhome/mainhome.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PatientInfoComponent } from './patient-info/patient-info.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { DocHomeComponent } from './doc-home/doc-home.component';
import { DoctorInfoComponent } from './doctor-info/doctor-info.component';
import { RepInfoComponent } from './rep-info/rep-info.component';
import { AbcComponent } from './abc/abc.component';





@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    CreateDoctorComponent,
    UpdateDoctorComponent,
    PatientListComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    RepListComponent,
    CreateRepComponent,
    UpdateRepComponent,
    AppointmentsListComponent,
    CreateAppointmentComponent,
    UpdateAppointmentComponent,
    BillListComponent,
    CreateBillComponent,
    UpdateBillComponent,
    AboutComponent,
    LoginComponent,
    HomeComponent,
    AppointmentDetailsComponent,
    DoctorHomeComponent,
    ReceptionistHomeComponent,
    PatientHomeComponent,
    MainhomeComponent,
    HeaderComponent,
    FooterComponent,
    PatientInfoComponent,
    ContactComponent,
    GalleryComponent,
    AdmindashboardComponent,
    DocHomeComponent,
    DoctorInfoComponent,
    RepInfoComponent,
    AbcComponent,
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
