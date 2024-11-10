import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  productos: Producto[] = []; //array vacio para almacenar ls productos


  //inyectamos el servicio creado e importado
constructor(private productoService: ProductoService){}



ngOnInit(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (productos)=>{
        this.productos= productos
      },
      (error) => {
        console.error("Error al obtener los productos" ,error);
      }
    )
}


}
