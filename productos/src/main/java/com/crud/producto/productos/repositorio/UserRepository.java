package com.crud.producto.productos.repositorio;

import com.crud.producto.productos.modelo.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);  // Buscar usuario por username
    User findByEmail(String email);        // Buscar usuario por email
}