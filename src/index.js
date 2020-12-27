const endPoint = "http://localhost:3000/weapons"


class Weapon {

    constructor(weapon, weaponAttributes) {
        this.id = weapon.id
        this.name = weaponAttributes.name
        this.equipment = weaponAttributes.equipment_id
        console.log(this);
      }
    
      renderWeaponCard() {
        return `<div class="card">
                  <h3>${this.name}</h3>
                  <p>equipment number: ${this.equipment}</p>
                  <p>id number: ${this.id}</p>
                </div>`
  
  }}



document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    
   
    const createWeaponForm = document.querySelector("#create-weapon-form")
    createWeaponForm.addEventListener("submit", (e) => createFormHandler(e))

})



function showAll() {
  var div = document.getElementById("");  
         if (div.style.display !== "none") 
         {  
             div.style.display = "none";  
         }  
         else
         {  
             div.style.display = "block";  
         }  
}

function showAllSpooky() {
  
}

function getWeapons() {
    fetch(endPoint)
      .then(response => response.json())
  
      .then(weapons => {
        weapons.data.forEach(weapon => {
          //makes a new instance of Weapon clss for each weapon in DB array
          //let newWeapon = new Weapon(weapon, weapon.attributes)
          let newWeapon = new Weapon(weapon, weapon.attributes)
  
          //render newweaponcard located in weapon class
          document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard()
        
        })
      })
  }


  
function createFormHandler(e) {
    e.preventDefault()
    const nameInput = document.querySelector('#input-name').value
    const equipmentInput = document.querySelector('#equipments').value
    postFetch(nameInput, equipmentInput)
  }
  

  function postFetch(name, equipment_id) {
    //builds body object outside of fetch

    const bodyData = {name, equipment_id}
  
    fetch(endPoint, {
      // POST request
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(weapon => {
      console.log(weapon);
      const weaponData = weapon.data
      //render JSON response
      let newWeapon = new Weapon(weaponData, weaponData.attributes)
  
      //let newWeapon = new Weapon(weaponData, weaponData.attributes)
      // calls the render in weapon class
      document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard();
    })
  }

  
  