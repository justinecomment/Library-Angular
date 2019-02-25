import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent implements OnInit {
  user: SelectItem[];
  userDropdown: string;
  username: string;

  constructor(
    private authenticationService: AuthenticationService,
  ) { }

  ngOnInit() {
  }

  ngDoCheck(): void {
    if (this.isAuthenticated()) {
      this.user = [
        { label: localStorage.getItem('username'), value: null },
        { label: 'Dashboard', value: { id: 1, name: 'dashboard', code: 'dashboard' } },
        { label: 'Mes livres', value: { id: 2, name: 'book', code: 'book' } },
        { label: 'Mes collections', value: { id: 3, name: 'collections', code: 'collections' } },
        { label: 'Mes amis', value: { id: 4, name: 'friends', code: 'friends' } },
      ];
    }

  }

  logOut() {
    this.authenticationService.logOut();
  }

  isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated();
  }

}
