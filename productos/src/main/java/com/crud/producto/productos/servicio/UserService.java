package com.crud.producto.productos.servicio;

import com.crud.producto.productos.modelo.User;
import com.crud.producto.productos.repositorio.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Registrar un nuevo usuario
    public User register(User user) {
        // Validación de unicidad
        if (userRepository.findByUsername(user.getUsername()) != null) {
            throw new RuntimeException("El nombre de usuario ya está en uso");
        }
        if (userRepository.findByEmail(user.getEmail()) != null) {
            throw new RuntimeException("El correo electrónico ya está registrado");
        }

        // Guardar el usuario en la base de datos
        return userRepository.save(user);
    }

    // Login de usuario
    public boolean login(String username, String password) {
        User user = userRepository.findByUsername(username);
        if (user != null && password.equals(user.getPassword())) {
            return true; // Inicio de sesión exitoso
        }
        return false; // El nombre de usuario o la contraseña son incorrectos
    }
}
