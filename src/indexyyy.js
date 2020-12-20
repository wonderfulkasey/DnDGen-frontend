const BASE_URL = "http://localhost:3000"
const WEAPONS_URL = `${BASE_URL}/weapons`



class Weapon {

  constructor(weaponAttributes) {
      this.id = id;
      this.name = weaponAttributes.name;
      this.equipment = weaponAttributes.equipment;
    }
  
    render() {
      return `
              <div class="card">
                <h3>${this.name}</h3>
                <p>${this.equipment.name}</p>
                <button data-id=${this.id}>edit</button>
              </div>`

}}


function fetchWeapons (){
  fetch(WEAPONS_URL)
  .then(res => res.json())
  .then(weapons => renderWeapons(weapons))
}
 

function renderWeapons(weapons) {
     weapons.forEach(weapon => {
            innerHTML += `<div class="card">
              <h3>${weapon.attributes.name}</h3>
              <p>${weapon.attributes.equipment.name}</p>
              <button data-id=${weapon.id}>edit</button>
              </br>
            </div>`
    })       
} 

