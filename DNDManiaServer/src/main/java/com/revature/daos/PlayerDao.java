package com.revature.daos;

import java.util.List;

import com.revature.models.Player;


public interface PlayerDao {
	
	PlayerDao currentImplementation = new PlayerDaoSql();

	List <Player> viewAll();
	Player getStats(String name, String className, String race);
	int createPlayer (Player player); 
	
}
