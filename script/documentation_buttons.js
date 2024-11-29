// Take button's element
const WindowsBtn = document.getElementById('WinBtn');
const DebianBtn = document.getElementById('DebianBtn');
const ArchBtn = document.getElementById("ArchBtn");

// Create Element
const codeElement = document.createElement('code');
const textElement = document.createElement('text');

// Append text
const strUpdateOs = document.getElementById('howtoupdateOS');
const codeUpdateOs = document.createElement('code');
const strAboutJava = document.getElementById('aboutjava');
const codeAboutJava = document.createElement('code');
const strErrorAboutJava = document.getElementById('erroraboutjava');
const linkJava = document.createElement('a');

WindowsBtn.addEventListener('click', () => {
    strUpdateOs.innerHTML = 'To take the last Windows update will use the CMD.exe and this Command: ';
    codeUpdateOs.textContent = 'wuauclt /detectnow /updatenow';
    strUpdateOs.appendChild(codeUpdateOs);

    strAboutJava.innerHTML = 'First we need to check the Java Version or if the java has been installed on our system, with CMD.exe and this Command: ';
    codeAboutJava.textContent = 'java --version';
    strAboutJava.appendChild(codeAboutJava);

    strErrorAboutJava.innerHTML = 'If we get error like is not recognized as an internal or external command, then will need to download from here: ';
    linkJava.href = 'https://www.oracle.com/java/technologies/downloads/#jdk23-windows';
    linkJava.textContent = 'Download Java Windows Support';
    linkJava.target = '_blank';
    strErrorAboutJava.appendChild(linkJava);
});

DebianBtn.addEventListener('click', () => {
    strUpdateOs.innerHTML = 'To take the last Debian-Linux update will use the bash and this Command: ';
    codeUpdateOs.textContent = 'sudo apt-get update && sudo apt-get install';
    strUpdateOs.appendChild(codeUpdateOs);

    strAboutJava.innerHTML = 'First we need to check the Java Version or if the java has been installed on our system, with bash and this Command: ';
    codeAboutJava.textContent = 'java --version';
    strAboutJava.appendChild(codeAboutJava);

    strErrorAboutJava.innerHTML = 'If we get error like command not found, then will need to download from here: ';
    linkJava.href = 'https://www.oracle.com/java/technologies/downloads/#jdk23-linux';
    linkJava.textContent = 'Download Java Linux Support';
    linkJava.target = '_blank';
    strErrorAboutJava.appendChild(linkJava);
});

ArchBtn.addEventListener('click', () => {
    strUpdateOs.innerHTML = 'To take the last Arch-Linux update will use the bash and this Command: ';
    codeUpdateOs.textContent = 'sudo pacman -Syyuu';
    strUpdateOs.appendChild(codeUpdateOs);

    strAboutJava.innerHTML = 'First we need to check the Java Version or if the java has been installed on our system, with bash and this Command: ';
    codeAboutJava.textContent = 'java --version';
    strAboutJava.appendChild(codeAboutJava);

    strErrorAboutJava.innerHTML = 'If we get error like command not found, then will need to download from here: ';
    linkJava.href = 'https://www.oracle.com/java/technologies/downloads/#jdk23-linux';
    linkJava.textContent = 'Download Java Linux Support';
    linkJava.target = '_blank';
    strErrorAboutJava.appendChild(linkJava);
});