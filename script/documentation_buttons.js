const Winbutton = document.getElementById('WinBtn');
const LinButton = document.getElementById('LinuxBtn');
const output_update = document.getElementById('output_UpdateOS');

Winbutton.addEventListener('click', () => {
    const codeElement = document.createElement('code');
    codeElement.textContent = 'test code by javascript';
    output_update.innerHTML = '';
    output_update.appendChild(codeElement);
});

LinButton.addEventListener('click', () => {
    const codeElement = document.createElement('code');
    codeElement.textContent = 'pacman -Syyu';
    output_update.innerHTML = '';
    output_update.appendChild(codeElement);
});