package com.revature.daos;

import java.util.List;

import com.revature.models.Monster;

public interface MonsterDao {
	MonsterDao currentImplementation = new MonsterDaoSql();

	List<Monster> findAll();
	List<Monster> findByGroup();
	Monster findById(int id);

}
