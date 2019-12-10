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

			String sql = "SELECT * FROM monsters";

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
		try (Connection c = ConnectionUtil.getConnection()) {

			String sql = "SELECT * FROM mon_groups g"
						+" LEFT JOIN monsters m ON (g.monster_id = m.monster_id)"
						+" where g.group_id = ?";

			PreparedStatement ps = c.prepareStatement(sql);
			ps.setInt(1, group);

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

	public Monster findById(int id) {
		// TODO Auto-generated method stub
		return null;
	}

}
