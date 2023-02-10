import { Component, HostBinding, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import {UntypedFormGroup, UntypedFormControl, Validators} from '@angular/forms';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from 'src/app/services/auth.service';
import {ToastrService} from 'ngx-toastr';
import { IUsuario } from '../services/user.interface';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit, OnDestroy {
  @HostBinding('class') class = 'login-box';
  public loginForm: UntypedFormGroup;

  username: string;
  password: string;
  isUsernameValid: boolean;
  isPasswordValid: boolean;
  errorMessage: string;

  constructor(private authService: AuthService, private jwtHelper: JwtHelperService, private renderer: Renderer2,
    private toastr: ToastrService,) {
    this.isUsernameValid = true;
    this.isPasswordValid = true;
    this.username = '';
    this.password = '';
    this.errorMessage = 'Error'
    console.log('Construtor')
  }

  ngOnInit() {
    this.renderer.addClass(
        document.querySelector('app-root'),
        'login-page'
    );
    this.loginForm = new UntypedFormGroup({
        email: new UntypedFormControl(null, Validators.required),
        password: new UntypedFormControl(null, Validators.required)
    });
}

  // login() {


  //   this.isUsernameValid = this.username.length > 0;
  //   this.isPasswordValid = this.password.length > 0;

  //   if (this.isUsernameValid && this.isPasswordValid) {
  //     try {
  //       this.authService.login(this.username, this.password );

  //       // Redirecionar o usuário para a página inicial após o login bem-sucedido
  //     } catch (error) {
  //       this.errorMessage = 'error.message';
  //     }
  //   }
  // }

  login(){
    if(this.loginForm.invalid) return;
    var usuario = this.loginForm.getRawValue() as IUsuario;
    this.authService.login(usuario).subscribe((response) => {
        // if(!response.sucesso){
        //   this.toastr.error('Falha na autenticação', 'Usuário ou senha incorretos!');
        // }
    })
  }
  ngOnDestroy() {
    this.renderer.removeClass(
        document.querySelector('app-root'),
        'login-page'
    );
}
}


