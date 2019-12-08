package com.revature.driver;

import java.util.ArrayList;
import java.util.List;

import com.revature.daos.PlayerDao;
import com.revature.models.Player;

public class TestDriver {

	public static void main(String[] args) {
		
		PlayerDao player = PlayerDao.currentImplementation;
		
		List <Player> play = new ArrayList<Player>();
		Player playert = player.getStats("New", "Barbarian", "Tiefling");
		player.createPlayer(playert);
		play = player.viewAll();
		for(Player p: play) {
			System.out.println(p);
		}
	}
}
