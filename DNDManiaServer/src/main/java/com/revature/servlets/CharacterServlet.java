package com.revature.servlets;

import java.io.IOException;
import java.util.ArrayList;
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
		System.out.println(plays);
		String json = om.writeValueAsString(plays);
		resp.addHeader("content-type", "application/json");
		resp.getWriter().write(json);
	}
	
	
	
	
}
