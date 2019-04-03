/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject (obj)
{
  this.createdAt = obj.createdAt;
  this.myName = obj.name;
  this.demensions = obj.demensions;
  "use strict";
  
  this.destroy = function ()
  {
    return `\n ${this.myName} has Been Slain!`
  }
  return this;
}
/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
CharacterStats.prototype = Object.create(GameObject);
function CharacterStats(obj)
{
  GameObject.call(this, obj);
  this.healthPoints = obj.healthPoints;
  
  this.takeDamage = function(dam)
  {
    this.healthPoints -= dam;
    return `Hit: ${Math.floor(dam*100)/100} pts` + (this.healthPoints <= 0 ? this.destroy() : "");
  }
  this.destroy = function() 
  {
    this.takeDamage = function(dam){return `${this.myName} is dead. Don't beat a dead horse.`}
    return `\n ${this.myName} has Been Slain!`;
  }
  return this;
}


/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:

Humanoid.prototype = Object.create(CharacterStats);
function Humanoid(obj)
{
  CharacterStats.call(this, obj);
  this.team = obj.team;
  this.weapons = obj.weapons;
  this.language = obj.language;
  this.greet = function()
  {
    return `${this.myName} offers a greeting in ${this.language}.`
  };
  this.attack = function(weaponslot, victum)
  {
    if(victum.name !== "CharacterStats") { return `${this.myName} didnt know who to attack?`}; 
    //if(typeof this.weapons !== "array") return `${this.myName} has no weapon! ${this.weapons}`; //weapon undefined
    let wep = this.weapons[weaponslot < this.weapons.length ? weaponslot : 0]
    if(!wep) return `${this.name} has no weapon! ${wep}`; //weapon undefined
    if(wep.damage.length < 2) return  `${this.myName}'s '${wep.name}' is damaged. ${wep.damage.length}`;
    return `${this.myName} uses ${wep.name} on ${victum.myName}! \n ${victum.takeDamage(parseFloat((Math.random()*wep.damage[1]) + wep.damage[0]))}`;
  };
  this.destroy = function()
  {
    this.attack = function(){return `${this.myName} is dead and cannot attack.`};
    return `\n ${this.myName} has Been Slain!`;//couldnt call the parent function
  }
  return this;
}



var HomelessMan = new Humanoid({
  createdAt : "10",
  name : "Vilage Idiot",
  demensions : {width: 1, height: 2, depht:3},
  healthPoints : 100,
  team : "Evil",
  weapons : [{name : "Some Bath Salts", damage : [3,100]}],
  language : "Bat-Shit Crazy"
});

var GrandpaMoses = new Humanoid({
  createdAt : "10",
  name : "GrampaMoses",
  demensions : {width: 1, height: 2, depht:3},
  healthPoints : 50,
  team : "Good",
  weapons : [{name : "Old Boring Stoy", damage : [0,3]}],
  language : "Grampa"
});

console.log(HomelessMan.destroy());

console.log(HomelessMan.greet());
console.log(GrandpaMoses.greet());
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));
console.log(GrandpaMoses.attack(60, HomelessMan));
console.log(HomelessMan.attack(60, GrandpaMoses));


/*
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
*/

  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!
  console.log("hell\toh")