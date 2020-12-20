const BASE_URL = "http://localhost:3000"
const WEAPONS_URL = `${BASE_URL}/weapons`


const allWeapons = document.querySelector("#weapon-collection")


class Weapon {

  constructor(weaponAttributes) {
      this.id = id;
      this.name = weaponAttributes.name;
      this.equipment = weaponAttributes.equipment_id;
    }
  
    render() {
      return `<div class="card">
                <h3>${this.name}</h3>
                <p>${this.equipment_id}</p>
                <p>${this.id}</p>
              </div>`

}}



function showAllWeapons(weaponArray){
  allWeapons.innerHTML = `<h2 class="subheader"> All Weapons </h2>
                          <h3 class="all-link">View All</h2>`
  weaponArray.forEach(weapon => {
    allWeapons.innerHTML += new Weapon(weapon).render()
  })
}

function fetchWeapons(){
  fetch(WEAPONS_URL)
  .then(res => res.json())
  .then(weapons => showAllWeapons(weapons))
}


//function to show all weapons
//function to render all weapons
//event listener to click and show


//function to show all weapons by equipment
//spooky, scratchy, splendid (1,2,3)
//event listener to clickdown menu of 3 options

//function to add a new weapon
//event listener to put through

