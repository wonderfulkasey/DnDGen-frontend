const endPoint = "http://localhost:3000/weapons"

document.addEventListener('DOMContentLoaded', () => {
  //fetches and gets weapon list
  console.log("DOM is Loaded");
  getWeaponing()

  // listens for 'submit' event on form and handles data
  const createWeaponForm = document.querySelector('#create-weapon-form')
  createWeaponForm.addEventListener('submit', (e) => createFormHandler(e))

  const loginForm = document.querySelector("#login-form")
  loginForm.addEventListener("submit", (e) => loginFormHandler(e))

 
  /* const weaponContainer = document.querySelector('#weapon-container')
  weaponContainer.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id);
    const weapon = Weapon.findById(id);
    document.querySelector('#update-weapon').innerHTML = weapon.renderUpdateForm();
  }); */
   /*  weaponContainer.addEventListener('click', e => {
    console.log('clicked');
  });  */
})

function getWeaponing() {
  fetch(endPoint)
    .then(response => response.json())
    .then(weaponing => {
      weaponing.data.forEach(weapon => {
        //makes a new instance of Weapon clss for each weapon in DB array
        let newWeapon = new Weapon(weapon, weapon.attributes)

        //render newweaponcard located in weapon class
        document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard()
      
      })
    })
}

function loginFormHandler(e) {
  e.preventDefault()
  const emailInput = e.target.querySelector("#login-email").value
  const pwInput = e.target.querySelector("#login-password").value
  loginFetch(emailInput, pwInput)
}

function loginFetch(email, password) {
  const bodyData = {user: { email, password } }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(bodyData)
  })
  .then(response => response.json())
  .then(json => {
    localStorage.setItem('jwt_token', json.jwt)
    renderUserProfile()
  })
}

function renderUserProfile() {
  console.log(localStorage.getItem('jwt_token');)
}


function createFormHandler(e) {
  e.preventDefault()
  const nameInput = document.querySelector('#input-name').value
  const equipmentId = parseInt(document.querySelector('#equipments').value)
  postFetch(nameInput, equipmentId)
}


function patchWeapon(weapon, name, equipment_id) {
  const bodyJSON = { name, equipment_id }
  fetch(`http://localhost:3000/weapons/${weapon.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(bodyJSON),
  })
    .then(res => res.json())
    // updated weapon instance as JSON
    .then(updatedNote => console.log(updatedNote));
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
    const weaponData = weapon.data
    //render JSON response

    let newWeapon = new Weapon(weaponData, weaponData.attributes)
    // calls the render in weapon class
    document.querySelector('#weapon-container').innerHTML += newWeapon.renderWeaponCard();
  })
}
