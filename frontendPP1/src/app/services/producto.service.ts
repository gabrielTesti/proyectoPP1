/* import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {


private apiUrl = "http://localhost:8080/productos"

constructor(private http: HttpClient) { }


obtenerTodosLosProductos():Observable<Producto[]>{
  return this.http.get<Producto[]>(this.apiUrl)
}



eliminarProducto(id: number): Observable<string> {
return this.http.delete<string>(`${this.apiUrl}/${id}`, { responseType: 'text' as 'json' });
}
  


crearProducto(producto: Producto):Observable<Producto>{
return this.http.post<Producto>(`${this.apiUrl}`, producto)
}


actualizarProducto(id: number, producto: Producto):Observable<Producto>{
  return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto)

}







} */





import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../interfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private apiUrl = "http://localhost:8080/productos";  // URL del backend

  constructor(private http: HttpClient) { }

  // Método para obtener todos los productos
  obtenerTodosLosProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }

  // Método para eliminar un producto
  eliminarProducto(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/${id}`, { responseType: 'text' as 'json' });
  }

  // Método para crear un producto
  crearProducto(producto: Producto): Observable<Producto> {
    return this.http.post<Producto>(`${this.apiUrl}`, producto);
  }

  // Método para actualizar un producto
  actualizarProducto(id: number, producto: Producto): Observable<Producto> {
    return this.http.put<Producto>(`${this.apiUrl}/${id}`, producto);
  }

  // Método para obtener las categorías directamente desde el servicio
  obtenerCategorias(): string[] {
    return [
      "ALIMENTOS_Y_BEBIDAS",
      "PRODUCTOS_DE_LIMPIEZA",
      "ELECTRODOMESTICOS_Y_ELECTRONICA",
      "PRODUCTOS_DE_HIGIENE_PERSONAL",
      "TEXTILES_Y_ROPA",
      "MOBILIARIO_Y_DECORACION",
      "MATERIALES_DE_CONSTRUCCION_Y_FERRETERIA",
      "PAPELERIA_Y_OFICINA",
      "PRODUCTOS_FARMACEUTICOS_Y_MEDICOS",
      "AUTOMOTRIZ",
      "PRODUCTOS_DE_JARDINERIA",
      "JUGUETERIA_Y_ENTRETENIMIENTO",
      "MASCOTAS",
      "PRODUCTOS_QUIMICOS"
    ];  // Aquí van las categorías del ENUM en Java
  }
}
