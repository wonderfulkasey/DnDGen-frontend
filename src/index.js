//the render json from controllers goes to endpoint in fetch
//so we use the JS to get the json from there

//global scope const
const endPoint = "http://localhost:3000/weapons"

//render.json is in weapon controller, also contains our if/else
//for if something goes wrong in code
//converts the weapon model info into json

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
        return `<div class="card">
                  <h2>${this.name}</h2>
                  <p>equipment number: ${this.equipmentId}</p>
                  <p>id number: ${this.id}</p>
                </div>`
  }}
//we use this weapon class cause we don't have these in ruby
//ruby just contains bare bones


//async callback- loads website, then getweapon and creates form
//domcontent means loads the html page, but js source is in html
document.addEventListener('DOMContentLoaded', () => {
    console.log("loaded");
    getWeapons()
    
    const createWeaponForm = document.querySelector("#create-weapon-form")
    createWeaponForm.addEventListener("submit", (e) => createFormHandler(e))
})


//a function declaration 
function getWeapons() {
    fetch(endPoint)
      //.json is used to turn js into json info
      //.then is our promise of eventual completion of operation
      //also, creates a .then chain

      .then(response => response.json())
      //turns the fetch JS into json
  
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


function fetchIdeas(){
  fetch('https://random-word-api.herokuapp.com/word?number=5')
  .then(response => response.json())
  .then(ideas => renderIdeas(ideas));
}


function renderIdeas(ideas){
  document.querySelector('#idea').innerHTML = ""
  //arrow function? with ideas
  ideas.forEach(idea => {
    document.querySelector('#idea').innerHTML += `<div class="idea">
      <h2>${idea}</h2>
       </br>
    </div>`
  })
}

  
function createFormHandler(e) {
    e.preventDefault()
    //will not create the form if name and equipment isnt inputted
    const nameInput = document.querySelector('#input-name').value
    const equipmentInput = document.querySelector('#equipments').value
    postFetch(nameInput, equipmentInput)
  }
  
  function postFetch(name, equipment_id) {
    //builds body object outside of fetch

    const bodyData = {name, equipment_id}
  
    fetch(endPoint, {
      // POST request
      //uses the ruby action
      method: "POST",
      headers: {"Content-Type": "application/json"},
      //converts the JS object into a json string
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

  
  