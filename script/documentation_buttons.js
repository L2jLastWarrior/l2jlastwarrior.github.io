window.addEventListener('load',()=>{
    WindowsBtn.click();
});

// Scroll to Headers
document.getElementById('updateos-link').addEventListener('click',()=>{
    document.getElementById('select-os').scrollIntoView({behavior:'smooth'});
});

document.getElementById('java-link').addEventListener('click',()=>{
    document.getElementById('select-java').scrollIntoView({behavior:'smooth'});
});

document.getElementById('mariadb-link').addEventListener('click',()=>{
    document.getElementById('select-mariadb').scrollIntoView({behavior:'smooth'});
});

document.getElementById('apache-link').addEventListener('click',()=>{
    document.getElementById('select-apache').scrollIntoView({behavior:'smooth'});
});

document.getElementById('php-link').addEventListener('click',()=>{
    document.getElementById('select-php').scrollIntoView({behavior:'smooth'});
});

document.getElementById('phpmyadmin-link').addEventListener('click',()=>{
    document.getElementById('select-phpmyadmin').scrollIntoView({behavior:'smooth'});
});

// Take button's element
const WindowsBtn = document.getElementById('WinBtn');
const DebianBtn = document.getElementById('DebianBtn');
const ArchBtn = document.getElementById("ArchBtn");

// Template Element
const codeElement = document.createElement('code');
const textElement = document.createElement('text');

// Append text
// Update OS
const strUpdateOs = document.getElementById('howtoupdateOS');
const codeUpdateOs = document.createElement('code');
// Java
const strAboutJava = document.getElementById('aboutjava');
const codeAboutJava = document.createElement('code');
const strErrorAboutJava = document.getElementById('erroraboutjava');
const linkJava = document.createElement('a');
// MariaDB
const strAboutMariaDB = document.getElementById('aboutmariadb');
const codeAboutMariaDB = document.createElement('code');
const strErrorAboutMariaDB = document.getElementById('erroraboutmariadb');
const linkMariaDB = document.createElement('a');
// PHP
const strAboutPhp = document.getElementById('aboutphp');
const codeAboutPhp = document.createElement('code');
const strErrorAboutPhp = document.getElementById('erroraboutphp');
const linkPhp = document.createElement('a');
// PhpMyAdmin
const strAboutPhpMyAdmin = document.getElementById('aboutphpmyadmin');
const codeAboutPhpMyAdmin = document.createElement('code');
const strErrorAboutPhpMyAdmin = document.getElementById('erroraboutphpmyadmin');
const linkPhpMyAdmin = document.createElement('a');

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

    strAboutMariaDB.innerHTML = 'First we need to check the MariaDB Version or if the MariaDB has been installed on our system, with CMD.exe and this Command: ';
    codeAboutMariaDB.textContent = 'mysql --version';
    strAboutMariaDB.appendChild(codeAboutMariaDB);
    strErrorAboutMariaDB.innerHTML = 'If we get error like is not recognized as an internal or external command, then will need to download from here: ';
    linkMariaDB.href = 'https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.6.2&os=windows&cpu=x86_64&pkg=msi&mirror=crete';
    linkMariaDB.textContent = 'Download MariaDB Windows Support';
    linkMariaDB.target = '_blank';
    strErrorAboutMariaDB.appendChild(linkMariaDB);

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

    strAboutMariaDB.innerHTML = 'First we need to check the MariaDB Version or if the MariaDB has been installed on our system, with bash and this Command: ';
    codeAboutMariaDB.textContent = 'mysql --version';
    strAboutMariaDB.appendChild(codeAboutMariaDB);
    strErrorAboutMariaDB.innerHTML = 'If we get error like command not found, then will need to download from here: ';
    linkMariaDB.href = 'https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.6.2&os=Linux&cpu=x86_64&i=systemd&mirror=crete';
    linkMariaDB.textContent = 'Download MariaDB Linux Support';
    linkMariaDB.target = '_blank';
    strErrorAboutMariaDB.appendChild(linkMariaDB);
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

    strAboutMariaDB.innerHTML = 'First we need to check the MariaDB Version or if the MariaDB has been installed on our system, with bash and this Command: ';
    codeAboutMariaDB.textContent = 'mysql --version';
    strAboutMariaDB.appendChild(codeAboutMariaDB);
    strErrorAboutMariaDB.innerHTML = 'If we get error like command not found, then will need to download from here: ';
    linkMariaDB.href = 'https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.6.2&os=Linux&cpu=x86_64&i=systemd&mirror=crete';
    linkMariaDB.textContent = 'Download MariaDB Linux Support';
    linkMariaDB.target = '_blank';
    strErrorAboutMariaDB.appendChild(linkMariaDB);
});