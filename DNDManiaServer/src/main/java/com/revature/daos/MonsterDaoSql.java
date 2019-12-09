package com.revature.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.revature.models.Monster;
import com.revature.util.ConnectionUtil;

public class MonsterDaoSql implements MonsterDao {
	
	private static final String FIND_ALL = "SELECT * FROM mon_group ";

	
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
		try (Connection c = ConnectionUtil.getConnection()) {

			String sql = "SELECT * FROM pokemon p "
					+ "LEFT JOIN pokemon_types t ON (p.pokemon_type_id = t.pokemon_types_id) "
					+ "LEFT JOIN pokemon_users u ON (p.trainer = u.user_id)";

			PreparedStatement ps = c.prepareStatement(sql);

			ResultSet rs = ps.executeQuery();
			List<Monster> monster = new ArrayList<>();
			while (rs.next()) {
				monster.add(extract(rs));
			}

			return monster;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}

	public List<Monster> findByGroup(int group) {
		// TODO Auto-generated method stub
		return null;
	}

	public Monster findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
