import { Injectable } from '@angular/core';
import { DChar } from './dChars.model';
import { DEnemy } from './dEnemy.model';

@Injectable({
  providedIn: 'root'
})
export class TestModelService {

  characterArray = [
    new DChar(
      'Test1',    // name
      '',         // className
      '',         // race
      15,         // HP
      13,         // AC
      0,          // init
      3,          // init mod
      5,          // attack mod
      8,          // dmg die
      3,          // dmg mod
      1,          // levl
      0           // special
    ),
    new DChar(
      'Test2',    // name
      '',         // className
      '',         // race
      10,         // HP
      10,         // AC
      0,          // init
      1,          // init mod
      5,          // attack mod
      4,          // dmg die
      3,          // dmg mod
      1,          // levl
      0           // special
    ),
    new DChar(
      'Test3',    // name
      '',         // className
      '',         // race
      20,         // HP
      16,         // AC
      0,          // init
      3,          // init mod
      5,          // attack mod
      12,          // dmg die
      3,          // dmg mod
      1,          // levl
      0           // special
    ),
    new DChar(
      'Test4',    // name
      '',         // className
      '',         // race
      13,         // HP
      11,         // AC
      0,          // init
      4,          // init mod
      3,          // attack mod
      8,          // dmg die
      1,          // dmg mod
      1,          // levl
      0           // special
    )
  ];

  EnemyArray = [
    new DEnemy(
      3,          // id
      'enemy1',   // name
      1,          // challenge rating
      10,         // HP
      13,         // AC
      3,          // attack mod
      4,          // dmg die
      3,          // dmg mod
      0,          // init
      1           // init mod
    ),
    new DEnemy(
      3,          // id
      'enemy2',   // name
      1,          // challenge rating
      12,         // HP
      13,         // AC
      3,          // attack mod
      4,          // dmg die
      4,          // dmg mod
      0,          // init
      1           // init mod
    ),
    new DEnemy(
      3,          // id
      'enemy3',   // name
      1,          // challenge rating
      13,         // HP
      13,         // AC
      3,          // attack mod
      4,          // dmg die
      3,          // dmg mod
      0,          // init
      1           // init mod
    )
  ];

  constructor() { }
}
