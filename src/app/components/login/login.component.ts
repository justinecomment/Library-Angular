import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {MessageService} from 'primeng/api';
import { AuthenticatedUser } from 'src/app/model/user/authenticated-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  selected;
  signInForm: FormGroup;
  signUpForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
  ) { 
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.selected = 'signIn';
  }

  private onSubmit() {
    this.submitted = true;

    // SIGN UP FORM
    if (this.selected === 'signUp') {
      if (this.signUpForm.invalid) {
        return;
      }
      this.authenticationService.signUp(this.signUpForm.value)
        .subscribe((response: AuthenticatedUser) => {
          console.log(response);
          this.messageService.add({severity: 'error', summary: 'Service Message', detail: 'Via MessageService'});
          this.saveToken(response.token);
        },
        error => {
          console.log(error);
          this.messageService.add({severity: 'error', summary: 'ERROR', detail: 'Via MessageService'});
        });
      // SIGN IN FORM
    } else  {
      if (this.signInForm.invalid) {
        return;
      }
      this.authenticationService.signIn(this.signInForm.value);
      if(this.authenticationService.isAuthenticated) {
        this.messageService.add({severity: 'success', summary: 'Service Message', detail: 'Via MessageService'});
      }
    }
  }

  private selectedButton(e) {
    e === 'signIn' ? this.selected = 'signIn' : this.selected = 'signUp';
  }

  private saveToken(token: string) {
    this.authenticationService.saveToken(token);
  }

}
