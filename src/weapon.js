class Weapon {

    constructor(weapon, weaponAttributes) {
        this.id = weapon.id
        this.name = weaponAttributes.name
        this.equipment = weaponAttributes.equipment_id
        Weapon.call.push(this)
        console.log(this);
      }
    
      renderWeaponCard() {
        return `<div class="card">
                  <h3>${this.name}</h3>
                  <p>${this.equipment_id}</p>
                  <p>${this.id}</p>
                </div>`
  
  }}

  Weapon.all = [];