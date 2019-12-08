package com.revature.models;

public class Player {
	
	private String name;
	private String className;
	private String race;
	private int healthsPoints;
	private int armorClass;
	private int initiative;
	private int initiativeMod;
	private int attack;
	private int dmg;
	private int dmgMod;
	private int level;
	private int special;
	private int type;
	
	public Player(String name, String className, String race, int healthsPoints, int armorClass, int initiative,
			int initiativeMod, int attack, int dmg, int dmgMod, int level, int special, int type) {
		super();
		this.name = name;
		this.className = className;
		this.race = race;
		this.healthsPoints = healthsPoints;
		this.armorClass = armorClass;
		this.initiative = initiative;
		this.initiativeMod = initiativeMod;
		this.attack = attack;
		this.dmg = dmg;
		this.dmgMod = dmgMod;
		this.level = level;
		this.special = special;
		this.type = type;
	}

	public Player() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

	public String getRace() {
		return race;
	}

	public void setRace(String race) {
		this.race = race;
	}

	public int getHealthsPoints() {
		return healthsPoints;
	}

	public void setHealthsPoints(int healthsPoints) {
		this.healthsPoints = healthsPoints;
	}

	public int getArmorClass() {
		return armorClass;
	}

	public void setArmorClass(int armorClass) {
		this.armorClass = armorClass;
	}

	public int getInitiative() {
		return initiative;
	}

	public void setInitiative(int initiative) {
		this.initiative = initiative;
	}

	public int getInitiativeMod() {
		return initiativeMod;
	}

	public void setInitiativeMod(int initiativeMod) {
		this.initiativeMod = initiativeMod;
	}

	public int getAttack() {
		return attack;
	}

	public void setAttack(int attack) {
		this.attack = attack;
	}

	public int getDmg() {
		return dmg;
	}

	public void setDmg(int dmg) {
		this.dmg = dmg;
	}

	public int getDmgMod() {
		return dmgMod;
	}

	public void setDmgMod(int dmgMod) {
		this.dmgMod = dmgMod;
	}

	public int getLevel() {
		return level;
	}

	public void setLevel(int level) {
		this.level = level;
	}

	public int getSpecial() {
		return special;
	}

	public void setSpecial(int special) {
		this.special = special;
	}

	public int getType() {
		return type;
	}

	public void setType(int type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "Player [name=" + name + ", className=" + className + ", race=" + race + ", healthsPoints="
				+ healthsPoints + ", armorClass=" + armorClass + ", initiative=" + initiative + ", initiativeMod="
				+ initiativeMod + ", attack=" + attack + ", dmg=" + dmg + ", dmgMod=" + dmgMod + ", level=" + level
				+ ", special=" + special + ", type=" + type + "]";
	}

	
	
	
	
}
