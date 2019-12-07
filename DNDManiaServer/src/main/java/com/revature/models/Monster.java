package com.revature.models;

import java.io.Serializable;

public class Monster implements Serializable{
	private int monster_id;
	private String name;
	private int challenge; 
	private int healthPoints;
	private int armorClass;
	private int attack;
	private int dmg;
	private int dmgMod;
	private int initiative;
	private int initiativeMod;
	private int entity_type;
	public Monster() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Monster(int monster_id, String name, int challenge, int healthPoints, int armorClass, int attack, int dmg,
			int dmgMod, int initiative, int initiativeMod, int entity_type) {
		super();
		this.monster_id = monster_id;
		this.name = name;
		this.challenge = challenge;
		this.healthPoints = healthPoints;
		this.armorClass = armorClass;
		this.attack = attack;
		this.dmg = dmg;
		this.dmgMod = dmgMod;
		this.initiative = initiative;
		this.initiativeMod = initiativeMod;
		this.entity_type = entity_type;
	}
	public synchronized int getMonster_id() {
		return monster_id;
	}
	public synchronized void setMonster_id(int monster_id) {
		this.monster_id = monster_id;
	}
	public synchronized String getName() {
		return name;
	}
	public synchronized void setName(String name) {
		this.name = name;
	}
	public synchronized int getChallenge() {
		return challenge;
	}
	public synchronized void setChallenge(int challenge) {
		this.challenge = challenge;
	}
	public synchronized int getHealthPoints() {
		return healthPoints;
	}
	public synchronized void setHealthPoints(int healthPoints) {
		this.healthPoints = healthPoints;
	}
	public synchronized int getArmorClass() {
		return armorClass;
	}
	public synchronized void setArmorClass(int armorClass) {
		this.armorClass = armorClass;
	}
	public synchronized int getAttack() {
		return attack;
	}
	public synchronized void setAttack(int attack) {
		this.attack = attack;
	}
	public synchronized int getDmg() {
		return dmg;
	}
	public synchronized void setDmg(int dmg) {
		this.dmg = dmg;
	}
	public synchronized int getDmgMod() {
		return dmgMod;
	}
	public synchronized void setDmgMod(int dmgMod) {
		this.dmgMod = dmgMod;
	}
	public synchronized int getInitiative() {
		return initiative;
	}
	public synchronized void setInitiative(int initiative) {
		this.initiative = initiative;
	}
	public synchronized int getInitiativeMod() {
		return initiativeMod;
	}
	public synchronized void setInitiativeMod(int initiativeMod) {
		this.initiativeMod = initiativeMod;
	}
	public synchronized int getEntity_type() {
		return entity_type;
	}
	public synchronized void setEntity_type(int entity_type) {
		this.entity_type = entity_type;
	}
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + armorClass;
		result = prime * result + attack;
		result = prime * result + challenge;
		result = prime * result + dmg;
		result = prime * result + dmgMod;
		result = prime * result + entity_type;
		result = prime * result + healthPoints;
		result = prime * result + initiative;
		result = prime * result + initiativeMod;
		result = prime * result + monster_id;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Monster other = (Monster) obj;
		if (armorClass != other.armorClass)
			return false;
		if (attack != other.attack)
			return false;
		if (challenge != other.challenge)
			return false;
		if (dmg != other.dmg)
			return false;
		if (dmgMod != other.dmgMod)
			return false;
		if (entity_type != other.entity_type)
			return false;
		if (healthPoints != other.healthPoints)
			return false;
		if (initiative != other.initiative)
			return false;
		if (initiativeMod != other.initiativeMod)
			return false;
		if (monster_id != other.monster_id)
			return false;
		if (name == null) {
			if (other.name != null)
				return false;
		} else if (!name.equals(other.name))
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Monster [monster_id=" + monster_id + ", name=" + name + ", challenge=" + challenge + ", healthPoints="
				+ healthPoints + ", armorClass=" + armorClass + ", attack=" + attack + ", dmg=" + dmg + ", dmgMod="
				+ dmgMod + ", initiative=" + initiative + ", initiativeMod=" + initiativeMod + ", entity_type="
				+ entity_type + "]";
	}
	
	
}
