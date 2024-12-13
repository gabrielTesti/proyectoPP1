import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { LoginDialogComponent } from './dialogs/login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './dialogs/register-dialog/register-dialog.component';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {

  constructor(public dialog: MatDialog) {}

  openLoginDialog(): void {
    this.dialog.open(LoginDialogComponent);
  }

  openRegisterDialog(): void {
    this.dialog.open(RegisterDialogComponent); 
  }

}







