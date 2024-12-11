import { Component, OnInit, ViewChild} from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from 'src/app/interfaces/producto';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductoDialogComponent } from '../producto-dialog/producto-dialog.component';



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

 nuevoProducto: Producto = {
   nombre: "",
   precio: 0,
   stock: 0
 }



  //inyectamos el servicio creado e importado
  @ViewChild(MatPaginator) paginator!: MatPaginator;
constructor(private productoService: ProductoService,
  private dialog: MatDialog
){}



ngOnInit(): void {
    this.productoService.obtenerTodosLosProductos().subscribe(
      (productos)=>{
        this.dataSource.data=productos
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

 
/* eliminarProducto(id: number): void {
  this.productoService.eliminarProducto(id).subscribe({
    next: () => {
      
      this.dataSource.data = this.dataSource.data.filter(producto => producto.id !== id);
      alert('Producto eliminado con éxito');
    },
    error: (error) => {
      console.error("Error al eliminar el producto ", error)
      alert('Error al eliminar el producto');
    }
  });
} 
 */
 






eliminarProducto(id: number): void {
  this.productoService.eliminarProducto(id).subscribe({
    next: () => {
      // Actualizamos el dataSource de manera que se refleje inmediatamente en la tabla
      this.dataSource.data = this.dataSource.data.filter(producto => producto.id !== id);

      // Si tienes paginación, asegúrate de resetear el paginator también.
      if (this.paginator) {
        this.paginator.pageIndex = 0;  // Esto reinicia la paginación para que no haya confusión si la tabla está vacía
      }

      alert('Producto eliminado con éxito');
    },
    error: (error) => {
      console.error("Error al eliminar el producto ", error);
      if (error.status === 404) {
        alert('Producto no encontrado');
      } else {
        alert('Error al eliminar el producto');
      }
    }
  });
}

abrirDialogo(): void {
  const dialogRef = this.dialog.open(ProductoDialogComponent, {
    width: '400px'
  });


  dialogRef.componentInstance.productoCreado.subscribe((productoCreado: Producto | undefined)=>{
    if(productoCreado){
      this.dataSource.data = [...this.dataSource.data, productoCreado]
    }

  })

}




abrirDialogoEditar(producto: Producto):void{
  const dialogRef = this.dialog.open(ProductoDialogComponent,{
    width: '400px',
    data: {producto}
  });

  dialogRef.afterClosed().subscribe(
    (productoActualizado: Producto | undefined)=>{
      if(productoActualizado){

        //actualizamos el producto en la tabla
        const index = this.dataSource.data.findIndex(p=>p.id === producto.id);
        if(index !== -1){
          this.dataSource.data[index] = productoActualizado;
          this.dataSource.data = [...this.dataSource.data] //se forza la actualizacion en la vista
        }
      }
 } )



}






}




