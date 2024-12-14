/* import { Component, ElementRef, Inject, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
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
 @ViewChild("proveedorInput", {static: false}) proveedorInput!: ElementRef;
 @ViewChild("categoriaInput", {static: false}) categoriaInput!: ElementRef;

 @Output() productoCreado = new EventEmitter<Producto>(); 



  categorias: string[] = [];
  productoForm: FormGroup;

constructor( private productoService: ProductoService,
             private dialogRef: MatDialogRef<ProductoDialogComponent>,
             private fb: FormBuilder,
             @Inject(MAT_DIALOG_DATA) public data: any            
){
  this.productoForm = this.fb.group({
    nombre: ['', Validators.required],
    precio: ['', [Validators.required, Validators.min(0)]],
    stock: ['', [Validators.required, Validators.min(0)]],
    proveedor: ['', Validators.required],
    categoria: ['', Validators.required]
  });
}

ngOnInit(): void {
    if(this.data?.producto){
      this.productoForm.patchValue(this.data.producto);
    }
    
}

crearProducto(){
  if(this.productoForm.valid){

    const productoFormValue = this.productoForm.value;
    productoFormValue.nombre = productoFormValue.nombre.charAt(0).toUpperCase()  + productoFormValue.nombre.slice(1).toLowerCase();



    const nuevoProducto = this.productoForm.value;
    this.productoService.crearProducto(nuevoProducto).subscribe(
      (productoCreado)=>{
        console.log("Producto creado", productoCreado);

        this.productoCreado.emit(productoCreado)

        this.productoForm.reset({
          nombre: '',
          precio: 0,
          stock: 0,
          proveedor: '',
          categoria: ''
        }, { emitEvent: false }); 

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
  this.siguienteElemento(this.proveedorInput);
}

onEnterProveedor(): void {
  this.siguienteElemento(this.categoriaInput);
}

onEnterCategoria(): void {
  this.crearProducto();
}

cerrar(){
  this.dialogRef.close();
}







actualizarProducto(){
  if(this.productoForm.valid && this.data?.producto){      
    const productoActualizado = this.productoForm.value;

    const productoFormValue = this.productoForm.value;

    productoFormValue.nombre = productoFormValue.nombre.charAt(0).toUpperCase() + productoFormValue.nombre.slice(1).toLowerCase();
  
  this.productoService.actualizarProducto(this.data.producto.id, productoActualizado).subscribe(
    (response)=>{
      console.log("Producto actualizado", response);

      this.dialogRef.close(response);
    },
    (error)=>{
      console.log("Error al actualizar producto", error);
    }
  );
  
}






}












} */


























/* 



import { Component, ElementRef, Inject, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit {
  @ViewChild("nombreInput", { static: false }) nombreInput!: ElementRef;
  @ViewChild("precioInput", { static: false }) precioInput!: ElementRef;
  @ViewChild("stockInput", { static: false }) stockInput!: ElementRef;
  @ViewChild("proveedorInput", { static: false }) proveedorInput!: ElementRef;
  @ViewChild("categoriaInput", { static: false }) categoriaInput!: ElementRef;

  @Output() productoCreado = new EventEmitter<Producto>();  

  productoForm: FormGroup;
  categorias: string[] = []; 

  constructor(
    private productoService: ProductoService,
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      proveedor: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
    this.categorias = this.productoService.obtenerCategorias();

    if (this.data?.producto) {
      this.productoForm.patchValue(this.data.producto);
    }
  }




    crearProducto() {
      if (this.productoForm.valid) {
        const productoFormValue = this.productoForm.value;
        productoFormValue.nombre = productoFormValue.nombre.charAt(0).toUpperCase() + productoFormValue.nombre.slice(1).toLowerCase();
    
        const nuevoProducto = this.productoForm.value;
        this.productoService.crearProducto(nuevoProducto).subscribe(
          (productoCreado) => {
            console.log("Producto creado", productoCreado);
            this.productoCreado.emit(productoCreado);
    
            
            this.productoForm.reset({
              nombre: '',
              precio: 0,
              stock: 0,
              proveedor: '',
              categoria: ''
            }, { emitEvent: false });
    
            
            Object.keys(this.productoForm.controls).forEach(controlName => {
              const control = this.productoForm.get(controlName);
              if (control) {
                control.setErrors(null); 
              }
            });
    
            
            this.productoForm.markAsPristine();
            this.productoForm.markAsUntouched();
    
            
            this.nombreInput.nativeElement.focus();
          },
          (error) => {
            console.log("Error al crear producto", error);
          }
        );
      }
    }
    





  siguienteElemento(elemento: ElementRef) {
    elemento.nativeElement.focus();
  }

  onEnterNombre(): void {
    this.siguienteElemento(this.precioInput);
  }

  onEnterPrecio(): void {
    this.siguienteElemento(this.stockInput);
  }

  onEnterStock(): void {
    this.siguienteElemento(this.proveedorInput);
  }

  onEnterProveedor(): void {
    this.siguienteElemento(this.categoriaInput);
  }

  onEnterCategoria(): void {
    this.crearProducto();
  }

  cerrar() {
    this.dialogRef.close();
  }

  actualizarProducto() {
    if (this.productoForm.valid && this.data?.producto) {
      const productoActualizado = this.productoForm.value;

      const productoFormValue = this.productoForm.value;
      productoFormValue.nombre = productoFormValue.nombre.charAt(0).toUpperCase() + productoFormValue.nombre.slice(1).toLowerCase();

      this.productoService.actualizarProducto(this.data.producto.id, productoActualizado).subscribe(
        (response) => {
          console.log("Producto actualizado", response);
          this.dialogRef.close(response);
        },
        (error) => {
          console.log("Error al actualizar producto", error);
        }
      );
    }
  }
}





 */























import { Component, ElementRef, Inject, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductoService } from 'src/app/services/producto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-producto-dialog',
  templateUrl: './producto-dialog.component.html',
  styleUrls: ['./producto-dialog.component.css']
})
export class ProductoDialogComponent implements OnInit {
  @ViewChild("nombreInput", { static: false }) nombreInput!: ElementRef;
  @ViewChild("precioInput", { static: false }) precioInput!: ElementRef;
  @ViewChild("stockInput", { static: false }) stockInput!: ElementRef;
  @ViewChild("proveedorInput", { static: false }) proveedorInput!: ElementRef;
  @ViewChild("categoriaInput", { static: false }) categoriaInput!: ElementRef;

  @Output() productoCreado = new EventEmitter<Producto>();  

  productoForm: FormGroup;
  categorias: string[] = []; 

  constructor(
    private productoService: ProductoService,
    private dialogRef: MatDialogRef<ProductoDialogComponent>,
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.productoForm = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', [Validators.required, Validators.min(0)]],
      stock: ['', [Validators.required, Validators.min(0)]],
      proveedor: ['', Validators.required],
      categoria: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.categorias = this.productoService.obtenerCategorias();

    if (this.data?.producto) {
      this.productoForm.patchValue(this.data.producto);
    }
  }

  crearProducto() {
    if (this.productoForm.valid) {
      const productoFormValue = this.productoForm.value;
      productoFormValue.nombre = productoFormValue.nombre.charAt(0).toUpperCase() + productoFormValue.nombre.slice(1).toLowerCase();

      const nuevoProducto = this.productoForm.value;
      this.productoService.crearProducto(nuevoProducto).subscribe(
        (productoCreado) => {
          console.log("Producto creado", productoCreado);
          this.productoCreado.emit(productoCreado);
          this.productoForm.reset({
            nombre: '',
            precio: 0,
            stock: 0,
            proveedor: '',
            categoria: ''
          }, { emitEvent: false });
          Object.keys(this.productoForm.controls).forEach(controlName => {
            const control = this.productoForm.get(controlName);
            if (control) {
              control.setErrors(null); 
            }
          });
          this.productoForm.markAsPristine();
          this.productoForm.markAsUntouched();
          this.nombreInput.nativeElement.focus();
        },
        (error) => {
          console.log("Error al crear producto", error);
        }
      );
    }
  }

  siguienteElemento(elemento: ElementRef) {
    elemento.nativeElement.focus();
  }

  onEnterNombre(): void {
    this.siguienteElemento(this.precioInput);
  }

  onEnterPrecio(): void {
    this.siguienteElemento(this.stockInput);
  }

  onEnterStock(): void {
    this.siguienteElemento(this.proveedorInput);
  }

  onEnterProveedor(): void {
    this.siguienteElemento(this.categoriaInput);
  }

  onEnterCategoria(): void {
    this.crearProducto();
  }

  cerrar() {
    this.dialogRef.close();
  }

  actualizarProducto() {
    if (this.productoForm.valid && this.data?.producto) {
      const productoActualizado = this.productoForm.value;
      const productoFormValue = this.productoForm.value;
      productoFormValue.nombre = productoFormValue.nombre.charAt(0).toUpperCase() + productoFormValue.nombre.slice(1).toLowerCase();

      this.productoService.actualizarProducto(this.data.producto.id, productoActualizado).subscribe(
        (response) => {
          console.log("Producto actualizado", response);
          this.dialogRef.close(response);
        },
        (error) => {
          console.log("Error al actualizar producto", error);
        }
      );
    }
  }
}
