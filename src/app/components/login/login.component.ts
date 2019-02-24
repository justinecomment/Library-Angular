import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { MessageService } from 'primeng/api';
import { AuthenticatedUser } from 'src/app/model/user/authenticated-user';
import { Router } from '@angular/router';

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
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private messageService: MessageService,
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.selected = 'signIn';
  }

  createForm() {
    this.signInForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.signUpForm = this.formBuilder.group({
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  private onSubmit() {
    this.submitted = true;

    // SIGN UP FORM
    if (this.selected === 'signUp') {
      if (this.signUpForm.invalid) {
        return;
      }
      this.authenticationService.signUp(this.signUpForm.value).subscribe(
        (response: AuthenticatedUser) => {
          this.authenticationService.setToken(response.token, response.username);
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Veuillez vérifier que les champs sont valides'});
        });
      // SIGN IN FORM
    } else  {
      if (this.signInForm.invalid) {
        return;
      }
      this.authenticationService.signIn(this.signInForm.value).subscribe(
        (response: AuthenticatedUser) => {
          localStorage.setItem('username', response.username);
          this.authenticationService.setToken(response.token, response.username);
          this.router.navigate(['']);
        },
        error => {
          this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Mauvais utilisateur'});
        });
    }
  }

  private selectedButton(e) {
    e === 'signIn' ? this.selected = 'signIn' : this.selected = 'signUp';
  }

}
