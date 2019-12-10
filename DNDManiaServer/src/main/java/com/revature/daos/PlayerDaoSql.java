package com.revature.daos;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.revature.models.Player;
import com.revature.util.ConnectionUtil;

public class PlayerDaoSql implements PlayerDao{

	@Override
	public List<Player> viewAll() {
		try (Connection c = ConnectionUtil.getConnection()) {
			String query = "SELECT * FROM currentcharacters";
			
			PreparedStatement ps = c.prepareStatement(query);

			ResultSet rs = ps.executeQuery();
			List<Player> player = new ArrayList<Player>();
			while(rs.next()) {
				Player play = new Player(rs.getString(1),rs.getString(2),rs.getString(3),rs.getInt(4), 
					   rs.getInt(5),rs.getInt(6), rs.getInt(7),rs.getInt(8),rs.getInt(9), 
					   rs.getInt(10),rs.getInt(11),rs.getInt(12),rs.getInt(13));
				player.add(play);
			}
			return player;
		} catch (SQLException e) {
			return null;
		}
	}

	@Override
	public int createPlayer(Player player) {
		try (Connection c = ConnectionUtil.getConnection()) {

			String query = "INSERT INTO currentcharacters (cname, classname, race, healthPoints, armorClass, initiative, initiativeMod, attack, dmg, dmgMod, clevel, special, ctype)"
					+ " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

			PreparedStatement ps = c.prepareStatement(query);
			ps.setString(1, player.getName());
			ps.setString(2, player.getClassName());
			ps.setString(3, player.getRace());
			ps.setInt(4, player.getHealthPoints());
			ps.setInt(5, player.getArmorClass());
			ps.setInt(6, player.getInitiative());
			ps.setInt(7, player.getInitiativeMod());
			ps.setInt(8, player.getAttack());
			ps.setInt(9, player.getDmg());
			ps.setInt(10, player.getDmgMod());
			ps.setInt(11, player.getLevel());
			ps.setInt(12, player.getSpecial());
			ps.setInt(13, player.getType());

			ps.executeUpdate();
			
			return 0;

		} catch (SQLException e) {
			// TODO Auto-generated catch block
//			e.printStackTrace(); 
			return 0;
		}
	}

	@Override
	public Player getStats(String name, String className, String race) {
		try (Connection c = ConnectionUtil.getConnection()) {
			List<Player> play = new ArrayList<Player>();
			String query = "SELECT * FROM basecharacters WHERE className = ?";
			
			PreparedStatement ps = c.prepareStatement(query);
			ps.setString(1, className);
			
			ResultSet rs = ps.executeQuery();
			while(rs.next()) {
			Player player = new Player(name, rs.getString(1), rs.getString(2), rs.getInt(3), 
					   rs.getInt(4), rs.getInt(5), rs.getInt(6), rs.getInt(7), rs.getInt(8), 
					   rs.getInt(9), rs.getInt(10), rs.getInt(11), rs.getInt(12));
				   play.add(player);
			}
			String query1 = "SELECT * FROM basecharacters WHERE race = ?";
			
			PreparedStatement ps1 = c.prepareStatement(query1);
			ps1.setString(1, race);

			ResultSet rs1 = ps1.executeQuery();
			while(rs1.next()) {
			Player player1 = new Player(name, rs1.getString(1), rs1.getString(2), rs1.getInt(3),
					   rs1.getInt(4), rs1.getInt(5), rs1.getInt(6), rs1.getInt(7), rs1.getInt(8),
					   rs1.getInt(9), rs1.getInt(10), rs1.getInt(11), rs1.getInt(12));
				   play.add(player1);
			}
			Player full = new Player(play.get(0).getName(),play.get(0).getClassName(),play.get(1).getRace(),play.get(0).getHealthPoints()+play.get(1).getHealthPoints(),
					play.get(0).getArmorClass()+play.get(1).getArmorClass(),play.get(0).getInitiative()+play.get(1).getInitiative(),play.get(0).getInitiativeMod()+play.get(1).getInitiativeMod(),
					play.get(0).getAttack()+play.get(1).getAttack(),play.get(0).getDmg()+play.get(1).getDmg(),play.get(0).getDmgMod()+play.get(1).getDmgMod(),play.get(0).getLevel(),
					play.get(0).getSpecial(),play.get(0).getType());
			
			return full;
			
		} catch (SQLException e) {
			return null;
		}
	}

}
