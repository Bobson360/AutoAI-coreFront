import { Component, OnDestroy, OnInit} from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit, OnDestroy {

  username: string;
  password: string;
  isUsernameValid: boolean;
  isPasswordValid: boolean;
  errorMessage: string;

  constructor( ) {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.username = '';
    this.password = '';
    this.errorMessage = 'Error'
    console.log('Construtor')
  }

  ngOnInit() {

}

  login(){
  }
  ngOnDestroy() {
}
}


