const endPoint = "http://localhost:3000/weapons"

document.addEventListener('DOMContentLoaded', () => {
  //fetches and gets weapon list
  console.log("DOM is Loaded");
  getWeaponing()

  const createWeaponForm = document.querySelector('#create-weapon-form')

  createWeaponForm.addEventListener('submit', (e) = createFormHandler(e))
  // listens for 'submit' event on form and handles data
  //const createWeaponForm = document.querySelector('#create-weapon-form')
  //createWeaponForm.addEventListener('submit', (e) => createFormHandler(e))
  const weaponContainer = document.querySelector('#weapon-container')
  weaponContainer.addEventListener('click', e => {
    
    const id = parseInt(e.target.dataset.id);
    const weapon = Weapon.findById(id);
    console.log(weapon);

    //console.log('clicked');
  });

})

function getWeaponing() {
  fetch(endPoint)
    .then(response => response.json())

    .then(weaponing => {
      weaponing.data.forEach(weapon => {
        //makes a new instance of Weapon clss for each weapon in DB array
        //let newWeapon = new Weapon(weapon, weapon.attributes)
        const newWeapon = new Weapon(weapon.id, weapon.attributes)

        //render newweaponcard located in weapon class
        document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard()
      
      })
    })
}


function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const equipmentInput = document.querySelector('#equipments').value
  const equipmentId = parseInt
  postFetch(nameInput, equipmentInput)
}


function postFetch(name, equipment_id) {
  //builds body object outside of fetch
  //console.log(name, equipment_id);
  const bodyData = {name, equipment_id}

  fetch(endPoint, {
    // POST request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(weapon => {
    //console.log(weapon);
    //const weaponData = weapon.data
    //render JSON response
    const newWeapon = new Weapon(weapon.data.id, weapon.data.attributes)

    //let newWeapon = new Weapon(weaponData, weaponData.attributes)
    // calls the render in weapon class
    document.querySelector('#weapon-container').innerHTML += newWeapon.renderweaponCard();
  })
}

function render(weapon) {
  const weaponMarkup = `
          <div data-id=${weapon.id}>
            <h3>${weapon.attributes.name}</h3>
            <p>${weapon.attributes.equipment.name}</p>
            <button data-id=${weapon.id}>edit</button>
          </div>
          <br><br>`;

  document.querySelector('#weapon-container').innerHTML += weaponMarkup;
}