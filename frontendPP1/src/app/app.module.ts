import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { ProductoComponent } from './components/producto/producto.component';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';  
import {MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog'; 

import { MatFormFieldModule } from '@angular/material/form-field';  // Para formularios
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoDialogComponent } from './components/producto-dialog/producto-dialog.component';  // Si usas formularios reactivos






@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    ProductoDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
