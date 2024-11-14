import { Component, Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})

export class ProductoDialogComponent {

  productoForm: FormGroup;

constructor( private productoService: ProductoService,
             private dialogRef: MatDialogRef<ProductoDialogComponent>,
             private fb: FormBuilder,
             @Inject(MAT_DIALOG_DATA) public data: any            
){
  this.productoForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', [Validators.required, Validators.min(0)]],
    stock: ['', [Validators.required, Validators.min(0)]]
  });
}

crearProducto(){
  if(this.productoForm.valid){
    const nuevoProducto = this.productoForm.value;
    this.productoService.crearProducto(nuevoProducto).subscribe(
      (productoCreado)=>{
        console.log("Producto creado", productoCreado);
        this.dialogRef.close();
      },
      (error)=>{
        console.log("Error al crear producto", error);
      }

    )
  }
}


cerrar(){
  this.dialogRef.close();
}













}
