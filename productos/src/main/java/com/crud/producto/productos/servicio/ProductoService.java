package com.crud.producto.productos.servicio;

import com.crud.producto.productos.modelo.Producto;
import com.crud.producto.productos.repositorio.ProductoRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    private ProductoRepositorio productoRepositorio;


    public Producto guardarProducto(Producto producto) {

        return productoRepositorio.save(producto);
    }

    public List<Producto> obtenerTodosLosProductos() {

        return productoRepositorio.findAll();
    }

    public Producto obtenerProductoPorId(Long id) {
        Optional<Producto> productoOpt = productoRepositorio.findById(id);
        if (productoOpt.isPresent()) {
            return productoOpt.get();
        } else {
            throw new RuntimeException("Producto no encontrado con id " + id);
        }
    }


    public Producto actualizarProducto(Long id, Producto detallesProducto) {
        // 1. Buscar el producto existente por ID
        Producto productoExistente = obtenerProductoPorId(id);

        // 2. Actualizar los campos del producto existente
        productoExistente.setNombre(detallesProducto.getNombre());
        productoExistente.setPrecio(detallesProducto.getPrecio());
        productoExistente.setStock(detallesProducto.getStock());

        // 3. Guardar el producto actualizado
        return productoRepositorio.save(productoExistente);
    }


    public void eliminarProducto(Long id) {
        Optional<Producto> productoOpt = productoRepositorio.findById(id);
        if (!productoOpt.isPresent()) {
            throw new RuntimeException("Product no encontrado con el id " + id);
        }else{
            productoRepositorio.deleteById(id);
        }

    }






}