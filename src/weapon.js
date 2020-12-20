class Weapon {

    constructor(id, weaponAttributes) {
        this.id = id;
        this.name = weaponAttributes.name;
        this.equipment = weaponAttributes.equipment;
        Weapon.all.push(this)
      }
    
      renderWeaponCard() {
        return `
                <div data-id=${this.id}>
                  <h3>${this.name}</h3>
                  <p>${this.equipment.name}</p>
                  <button data-id=${this.id}>edit</button>
                </div>
                <br><br>`;

}

static findById(id) {
  return this.all.find(weapon => weapon.id === id);
}

renderUpdateForm() {
  return `
  <form data-id=${this.id} >
    <h3>Edit a weapon!</h3>

    <label>Name </label>
    <input id='input-name' type="text" name="name" value="${this.name}" class="input-text">
    <br><br>


    <label>Equipment</label>
    <select id="equipments" name="equipments" value="${this.equipment.name}">
      <option value="1">Spooky</option>
      <option value="2">Scratchy</option>
      <option value="3">Splendid</option>
    </select>
    <br><br>

    <input id='edit-button' type="submit" name="submit" value="Edit weapon" class="submit">
  </form>
`;
}

}
      
Weapon.all = [];

