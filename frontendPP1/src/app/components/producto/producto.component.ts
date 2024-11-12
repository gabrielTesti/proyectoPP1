import { Component, OnInit} from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit{
  productos: Producto[] = []; //array vacio para almacenar ls productos
  displayedColumns: string[] = ["id", "nombre", "precio", "stock", "acciones"] //define las columnas
 //MatTableDataSource es una herramienta de Material para gestionar los datos
 dataSource = new MatTableDataSource<Producto>();
  //inyectamos el servicio creado e importado
constructor(private productoService: ProductoService){}



ngOnInit(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (productos)=>{
        this.dataSource.data=productos
      },
      (error)=>{
        console.error("Error al obtener el producto", error)
      }
    )
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}








}
