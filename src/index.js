const endPoint = "http://localhost:3000/weapons"

document.addEventListener('DOMContentLoaded', () => {
  getWeaponing()

  let createWeaponForm = document.querySelector('#create-weapon-form')

  createWeaponForm.addEventListener('submit', (e) => createFormHandler(e))
});

function getWeaponing() {
  fetch(endPoint)
    .then(response => response.json())
    .then(weaponing => {
      weaponing.data.forEach(weapon => {
        const weaponMarkup = `
          <div data-id=${weapon.id}>
            <h3>${weapon.attributes.name}</h3>
            <button data-id=${weapon.id}>edit</button>
          </div>
          <br><br>`;

          document.querySelector('#weapon-container').innerHTML += weaponMarkup
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
  console.log(name, equipment_id);
  let bodyData = {name, equipment_id}

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
    // render JSON response
    const weaponMarkup = `
    <div data-id=${weapon.id}>
      <h3>${weaponData.attributes.name}</h3>
      <button data-id=${weaponData.id}>edit</button>
    </div>
    <br><br>`;

    document.querySelector('#weapon-container').innerHTML += weaponMarkup;
  })
}