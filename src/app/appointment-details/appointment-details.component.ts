import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent implements OnInit {
app: any;
id!: number
   
    constructor(private route: ActivatedRoute, private service: AppointmentService) { }
  
    ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];
  
      // this.app = new this.app();
      // this.service.app(this.id).subscribe( data => {
      //   this.app = data;
      // });
    }


}
