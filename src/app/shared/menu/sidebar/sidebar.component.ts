import { Component, OnInit } from '@angular/core';
import { MENUITEMS, Menu } from './sidebar-items';
import { Router, ActivatedRoute } from "@angular/router";
import * as $ from 'jquery';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
   
   public menuItems: Menu[];
   currentUser: User;

   constructor(private router: Router,
        private route: ActivatedRoute,
         private authenticationService: AuthenticationService
        ) {
            this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        }

        validateRole(role){
          // console.log(role, this.currentUser.role, role === this.currentUser.role);
          return role === this.currentUser.role;
        }

   ngOnInit() {
       $.getScript('./assets/js/sidebar-menu.js');
       this.menuItems = MENUITEMS.filter(menuItem => menuItem.type != "rolelink" || (menuItem.type === "rolelink" && menuItem.role === this.currentUser.role));
       console.log(this.currentUser);
   }

}
