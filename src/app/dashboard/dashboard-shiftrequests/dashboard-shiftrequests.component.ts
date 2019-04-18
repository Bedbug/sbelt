import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ShiftSwapRequest } from 'src/app/models/shiftswap-request';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ShiftBeltService } from '../../services/shiftbelt.service';


@Component({
  selector: 'app-dashboard-shiftrequests',
  templateUrl: './dashboard-shiftrequests.component.html',
  styleUrls: ['./dashboard-shiftrequests.component.scss']
})
export class DashboardShiftrequestsComponent implements OnInit {

  currentUser: User;
  shiftRequests:ShiftSwapRequest[];

  constructor(
    private ShiftBeltService: ShiftBeltService,
    private authenticationService: AuthenticationService
) {
    this.currentUser = this.authenticationService.currentUserValue;
}

  ngOnInit() {
    this.ShiftBeltService.getShiftRequests().pipe().subscribe(requests =>{
      this.shiftRequests = requests;   
      console.log(this.shiftRequests);   
    })
  }

}
