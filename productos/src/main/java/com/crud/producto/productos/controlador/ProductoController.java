package com.crud.producto.productos.controlador;


import com.crud.producto.productos.modelo.Producto;
import com.crud.producto.productos.servicio.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/productos")
public class ProductoController {

    @Autowired
    private ProductoService productoService;


    @GetMapping
    public ResponseEntity<List<Producto>> obtenerTodosLosProductos() {
        List<Producto> productos = productoService.obtenerTodosLosProductos();
        return new ResponseEntity<>(productos, HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Object> obtenerProductoPorId(@PathVariable Long id) {
        try {
            Producto producto = productoService.obtenerProductoPorId(id);
            return new ResponseEntity<>(producto, HttpStatus.OK);
        } catch (RuntimeException e) {
            String mensajeError = "Producto no encontrado con el id " + id;
            return new ResponseEntity<>(mensajeError, HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping
    public ResponseEntity<Producto> crearProducto(@RequestBody Producto producto) {
        Producto productoCreado = productoService.guardarProducto(producto);
        return new ResponseEntity<>(productoCreado, HttpStatus.CREATED);
    }


    @PutMapping("/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id, @RequestBody Producto detallesProducto) {
        try {
            Producto productoActualizado = productoService.actualizarProducto(id, detallesProducto);
            return new ResponseEntity<>(productoActualizado, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Object> eliminarProducto(@PathVariable Long id) {
        try {
            productoService.eliminarProducto(id);
            String mensajeExito = "Producto con el id: " + id + " eliminado";
            return new ResponseEntity<>(mensajeExito, HttpStatus.OK);
        } catch (RuntimeException e) {
            String mensajeError = "Producto no encontrado con el id: " + id;
            return new ResponseEntity<>(mensajeError, HttpStatus.NOT_FOUND);

        }


    }


}







