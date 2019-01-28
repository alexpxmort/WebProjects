package com.api.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.model.Oportunidade;

public interface OportunidadeRepository extends JpaRepository<Oportunidade,Long>{

	Optional<Oportunidade>findByDescricaoAndNomeProspecto(String descricao,String nomeProspecto);
}
