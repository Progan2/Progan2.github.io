document.getElementById('toggle-sidebar').addEventListener('click', function() {
    var sidebar = document.getElementById('sidebar');
    var main = document.querySelector('main');
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.remove('collapsed');
        main.style.marginLeft = '0';
    } else {
        sidebar.classList.add('collapsed');
        main.style.marginLeft = '300px';
    }
});



const characters = [
    'Warrior',
    'Mage',
    'Rogue',
    'Cleric',
    'Paladin',
    'Ranger'
];

function addCharacter() {
    const characterList = document.getElementById('character-list');
    const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
    const characterElement = document.createElement('div');
    characterElement.className = 'character';
    characterElement.textContent = randomCharacter;
    characterList.appendChild(characterElement);
}
