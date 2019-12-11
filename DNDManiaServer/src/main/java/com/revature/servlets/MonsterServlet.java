package com.revature.servlets;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.revature.daos.MonsterDao;
import com.revature.models.Monster;


public class MonsterServlet extends HttpServlet{

	private MonsterDao monDao = MonsterDao.currentImplementation;
	ObjectMapper om = new ObjectMapper();


	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		List<Monster> monster = new ArrayList<Monster>();
		String groupnumber = req.getParameter("groupnumber");

		if (groupnumber != null) { // find by group number
			double doom = Math.random() * 100;
			if(doom>2) {
				monster = monDao.findByGroup(Integer.parseInt(groupnumber));}
			else {
				monster.add(monDao.findById(1));
			}
		} else { // find all
			monster = monDao.findAll();
		}
		String json = om.writeValueAsString(monster);

		resp.addHeader("content-type", "application/json");
		resp.getWriter().write(json);
	}

}
