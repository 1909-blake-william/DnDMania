package com.revature.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.daos.PlayerDao;
import com.revature.models.Player;


public class CharacterServlet extends HttpServlet {
		
	private PlayerDao playerDao = PlayerDao.currentImplementation;
	ObjectMapper om = new ObjectMapper();
	
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		List<Player> plays = new ArrayList<Player>();
		plays = playerDao.viewAll();
		String json = om.writeValueAsString(plays);
		resp.addHeader("content-type", "application/json");
		resp.getWriter().write(json);
	}
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
			
			String[] path = req.getRequestURI().split("/");
			Player o = playerDao.getStats(path[3], path[4], path[5]);
			playerDao.createPlayer(o); 
			String json = om.writeValueAsString(o);
			resp.getWriter().write(json);
			resp.setStatus(201); // created status code
	}
	
	
	
}
