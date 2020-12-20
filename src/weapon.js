class Weapon {

    constructor(id, weaponAttributes) {
        this.id = id;
        this.name = weaponAttributes.name;
        this.equipment = weaponAttributes.equipment;
        Weapon.all.push(this)
      }
    
      renderWeaponCard() {
        return `
                <div data-id=${this.id}>
                  <h3>${this.name}</h3>
                  <p>${this.equipment.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;

}

static findById(id) {
  return this.all.find(weapon => weapon.id === id);
}}
      
Weapon.all = [];

