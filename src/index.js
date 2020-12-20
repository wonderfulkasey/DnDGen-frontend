const endPoint = "http://localhost:3000/weapons"

document.addEventListener('DOMContentLoaded', () => {
  //fetches and gets weapon list
  console.log("DOM is Loaded");
  getWeaponing()

  // listens for 'submit' event on form and handles data
  const createWeaponForm = document.querySelector('#create-weapon-form')
  createWeaponForm.addEventListener('submit', (e) => createFormHandler(e))
})

function getWeaponing() {
  fetch(endPoint)
    .then(response => response.json())
    .then(weaponing => {
      weaponing.data.forEach(weapon => {
        //makes a new instance of Weapon clss for each weapon in DB array
        //let newWeapon = new Weapon(weapon, weapon.attributes)
        const weaponMarkup = `
          <div data-id=${weapon.id}>
             <h3>${weapon.attributes.name}</h3>
            <p>${weapon.attributes.equipment.name}</p>
            <button data-id=${weapon.id}>edit</button>
          </div>
          <br><br>`;



        //render newweaponcard located in weapon class
        document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard()
      
      })
    })
}


function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const equipmentId = parseInt(document.querySelector('#equipments').value)
  postFetch(nameInput, equipmentId)
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
    // calls the render in weapon class
    document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard();
  })
}
