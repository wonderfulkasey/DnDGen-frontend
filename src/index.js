const endPoint = "http://localhost:3000/weapons"

document.addEventListener('DOMContentLoaded', () => {
  getWeaponing()
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