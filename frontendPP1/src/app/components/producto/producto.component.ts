import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';



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
  @ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private productoService: ProductoService
){}



ngOnInit(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (productos)=>{
        this.dataSource.data=productos
        //vinculamos el paginator con el dataSource
        this.dataSource.paginator = this.paginator
      },
      (error)=>{
        console.error("Error al obtener el producto", error)
      }
    )
}

applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
}


  
eliminarProducto(id: number): void {
  this.productoService.eliminarProducto(id).subscribe({
    next: () => {
      // Eliminar de la lista si la eliminación fue exitosa
      this.dataSource.data = this.dataSource.data.filter(producto => producto.id !== id);
      alert('Producto eliminado con éxito');
    },
    error: (error) => {
      console.error("Error al eliminar el producto ", error)
      alert('Error al eliminar el producto');
    }
  });
}

 









}
