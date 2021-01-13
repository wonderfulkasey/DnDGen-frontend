
//the this value is used as a class context, aka is an object
//this is bound to the object Weapon
class Weapon {

    constructor(weapon, weaponAttributes) {
        //the this is equal to the object weapon
        this.id = weapon.id
        this.name = weaponAttributes.name
        this.equipmentId = weaponAttributes.equipment_id
        console.log(this);
      }
    
      renderWeaponCard() {
        return `<div class="card"><div id="${this.id}">
                  <h2>${this.name}</h2>
                  <p>equipment number: ${this.equipmentId}</p>
                  <p>id number: ${this.id} </p>
                  <p> <button onclick="deleteWeapon(${this.id})" id="button">Delete Weapon!</button>
                </p>
                  </div>
                </div>`
  }}
//we use this weapon class cause we don't have these in ruby
//ruby just contains bare bones

Weapon.all = [];