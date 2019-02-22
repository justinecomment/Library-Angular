import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/api';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
  user: SelectItem[];
  userDropdown: string;

  constructor(
      private authenticationService: AuthenticationService,
    ) {
    this.user = [
      {label: 'Justine', value: null},
      {label: 'Dashboard', value: { id: 1, name: 'dashboard', code: 'dashboard'}},
      {label: 'Mes livres', value: { id: 2, name: 'book', code: 'book'}},
      {label: 'Mes collections', value: { id: 3, name: 'collections', code: 'collections'}},
      {label: 'Mes amis', value: { id: 4, name: 'friends', code: 'friends'}},
    ];
  }

  ngOnInit() {
  }

  logOut() {
    this.authenticationService.logOut();
  }

}
