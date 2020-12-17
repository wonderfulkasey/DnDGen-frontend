class Weapon {
    constructor(weapon, weaponAttributes) {
        this.id = weapon.id;
        this.name = weaponAttributes.name;
        this.equipment = weaponAttributes.equipment;
        weapon.all.push(this);
      }
    
      renderweaponCard() {
        return `
                <div data-id=${this.id}>
                  <h3>${this.name}</h3>
                  <p>${this.equipment.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;
      }
}

Weapon.all = [];