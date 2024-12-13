
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent {





  loginForm: FormGroup;
  loginError: string | null = null;

    constructor(private fb: FormBuilder, private userService: UserService, public dialogRef: MatDialogRef<LoginDialogComponent>, private router: Router) {
        this.loginForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });


    }






    onSubmit() {
      if (this.loginForm.valid) {
        const credentials = this.loginForm.value;
        this.userService.login(credentials).subscribe(
          response => {
            console.log('Login exitoso:', response);
            this.dialogRef.close();
            this.router.navigate(['/producto']);
          },
          error => {
            console.error('Error en login:', error);
            // Manejar el error aquí
            if (error.status === 401 || error.error === 'Credenciales inválidas') {
              this.loginError = 'Usuario o contraseña incorrectos'; // Puedes personalizar el mensaje de error
            } else {
              this.loginError = 'Ha ocurrido un error inesperado'; // Error genérico
            }
          }
        );
      }
    }




   
    }







