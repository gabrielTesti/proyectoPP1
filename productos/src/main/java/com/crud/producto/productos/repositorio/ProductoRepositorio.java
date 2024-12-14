package com.crud.producto.productos.repositorio;

import com.crud.producto.productos.modelo.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long> {

    List<Producto> findByOrderByPrecioDesc();

    // Ordenar por stock descendente
    List<Producto> findByOrderByStockDesc();
}


