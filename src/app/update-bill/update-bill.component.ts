import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Bill } from '../bill';
import { BillService } from '../bill.service';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent {
  id: number = 0;
  bill: Bill = new Bill();
  constructor(private service: BillService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.service.getBillById(this.id).subscribe(data => {
      this.bill = data;
      console.log(data);
    },
      error => console.log(error));
  }
  onSub() {
   
    this.service.updateBillById(this.id, this.bill).subscribe(data => {
      this.router.navigate(["/bills"]);
    },
    error=>console.log(error));
  }
}
