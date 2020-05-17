package com.prueba.interfaces;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.prueba.modelo.Persona;

@Repository
public interface IPersona extends CrudRepository<Persona, Integer>{

}
