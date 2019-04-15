import { Component, OnInit } from '@angular/core';
import { ShiftBeltService } from '../services/shiftbelt.service';
import { ShiftSwapRequest } from '../models/shiftswap-request';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
    })
  }

}
