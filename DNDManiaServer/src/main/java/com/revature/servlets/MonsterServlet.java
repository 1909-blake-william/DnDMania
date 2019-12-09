package com.revature.servlets;

import java.io.IOException;
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
	
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.service(req, resp);
		System.out.println("To context param: " + req.getServletContext().getInitParameter("To"));

		resp.addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
		resp.addHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE, HEAD");
		resp.addHeader("Access-Control-Allow-Headers",
				"Origin, Methods, Credentials, X-Requested-With, Content-Type, Accept");
		resp.addHeader("Access-Control-Allow-Credentials", "true");
		resp.setContentType("application/json");
	}

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		List<Monster> monster;

		int groupnumber = Integer.parseInt(req.getParameter("groupnumber"));

	
		monster = monDao.findByGroup(groupnumber);
		

		ObjectMapper om = new ObjectMapper();
		String json = om.writeValueAsString(monster);

		resp.addHeader("content-type", "application/json");
		resp.getWriter().write(json);
	}

}
