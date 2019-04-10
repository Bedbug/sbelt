import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  
  constructor( private router: Router, private authenticationService: AuthenticationService) { 
    const currentUser = this.authenticationService.currentUserValue;
    if(currentUser)
      this.router.navigate(['/base']);
  }

  

  login(){
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
