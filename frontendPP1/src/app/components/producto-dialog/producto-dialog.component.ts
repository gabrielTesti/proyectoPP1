import { Component, ElementRef, Inject, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';


@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})

export class ProductoDialogComponent implements OnInit{
 @ViewChild("nombreInput", {static: false}) nombreInput!: ElementRef;
 @ViewChild("precioInput", {static: false}) precioInput!: ElementRef;
 @ViewChild("stockInput", {static: false}) stockInput!: ElementRef;

 @Output() productoCreado = new EventEmitter<Producto>();  // EventEmitter para comunicar al componente padre

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

ngOnInit(): void {
    
}

crearProducto(){
  if(this.productoForm.valid){
    const nuevoProducto = this.productoForm.value;
    this.productoService.crearProducto(nuevoProducto).subscribe(
      (productoCreado)=>{
        console.log("Producto creado", productoCreado);

        this.productoCreado.emit(productoCreado)

        this.productoForm.reset({
          nombre: '',
          precio: 0,
          stock: 0
        }, { emitEvent: false }); //hace que el evento de la validacion del stock se anule

        this.productoForm.markAsPristine();

        this.productoForm.markAsTouched();
       

        this.nombreInput.nativeElement.focus(); 
      },
      (error)=>{
        console.log("Error al crear producto", error);
      }

    )
  }
}


siguienteElemento(elemento: ElementRef){
  elemento.nativeElement.focus()
}

onEnterNombre():void{
  this.siguienteElemento(this.precioInput);
}

onEnterPrecio(): void{
  this.siguienteElemento(this.stockInput)
}

onEnterStock():void{
  this.crearProducto();
}

cerrar(){
  this.dialogRef.close();
}













}