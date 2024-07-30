import { Component } from '@angular/core';
import { Login } from '../interfaces/Login';
import { LOGINS } from '../interfaces/logins';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: Login = {
    Correo: '',
    Contrasena: '',
    TipoCuenta: 1
  };

  constructor(private router: Router) { }

  login() {
    const correo = this.usuario.Correo;
    const contrasena = this.usuario.Contrasena;
  
    const usuarioEncontrado = LOGINS.find((usuario) => {
      return usuario.Correo == correo && usuario.Contrasena == contrasena;
    });
  
    if (usuarioEncontrado) {
      console.log('Login exitoso!');
      this.router.navigate(['/authors-list']);
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}