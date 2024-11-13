import { Injectable } from '@angular/core';
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

eliminarProducto(id: number):Observable<void>{
  return this.http.delete<void>(`${this.apiUrl}/${id}`)

}
}