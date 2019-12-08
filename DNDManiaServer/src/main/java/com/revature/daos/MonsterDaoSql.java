package com.revature.daos;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import com.revature.models.Monster;

public class MonsterDaoSql implements MonsterDao {
	
	private static final String FIND_ALL = "SELECT  FROM mon_group ";

	
	Monster extract(ResultSet rs) throws SQLException {
		return new Monster(
				rs.getInt("monster_id"),
				rs.getString("name"),
				rs.getInt("challenge"),
				rs.getInt("healthpoints"),
				rs.getInt("armorclass"),
				rs.getInt("attack"),
				rs.getInt("dmg"),
				rs.getInt("dmgmod"),
				rs.getInt("initiative"),
				rs.getInt("initiativemod"),
				rs.getInt("entity_type")
			);
	}
	
	public List<Monster> findAll() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Monster> findByGroup() {
		// TODO Auto-generated method stub
		return null;
	}

	public Monster findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
