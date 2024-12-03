window.addEventListener('load',()=>{
    WindowsBtn.click();
});

// Scroll to Headers
document.getElementById('backtop').addEventListener('click',()=>{
    document.getElementById('select-installation').scrollIntoView({behavior:'smooth'});
});

// Software Required
document.getElementById('java_download_link').addEventListener('click',()=>{
    document.getElementById('select_java').scrollIntoView({behavior:'smooth'});
});

document.getElementById('mariadb_download_link').addEventListener('click',()=>{
    document.getElementById('select_mariadb').scrollIntoView({behavior:'smooth'});
});

document.getElementById('dbeaver_download_link').addEventListener('click',()=>{
    document.getElementById('select_dbeaver').scrollIntoView({behavior:'smooth'});
});

// L2J LastWarrior Server Emulation
document.getElementById('database_configuration_link').addEventListener('click',()=>{
    document.getElementById('select_database').scrollIntoView({behavior:'smooth'});
});

document.getElementById('register_configuration_link').addEventListener('click',()=>{
    document.getElementById('select_gsregister').scrollIntoView({behavior:'smooth'});
});

document.getElementById('loginserver_configuration_link').addEventListener('click',()=>{
    document.getElementById('select_loginserver').scrollIntoView({behavior:'smooth'});
});

document.getElementById('gameserver_configuration_link').addEventListener('click',()=>{
    document.getElementById('select_gameserver').scrollIntoView({behavior:'smooth'});
});
















// Take button's element
const WindowsBtn = document.getElementById('WinBtn');
const LinuxBtn = document.getElementById('LinuxBtn');

// Template Element
const codeElement = document.createElement('code');
const textElement = document.createElement('text');

const strHowToJava = document.getElementById('how_to_java');
const linkJava = document.createElement('a');

const strHowToMariaDB = document.getElementById('how_to_mariadb');
const linkMariaDB = document.createElement('a');

const strHowToDBeaver = document.getElementById('how_to_dbeaver');
const linkDBeaver = document.createElement('a');

WindowsBtn.addEventListener('click', () => {
    strHowToJava.innerHTML = 'You can download the Java Runtime Environment(JRE) from here: ';
    linkJava.href = 'https://www.java.com/en/download/help/windows_manual_download.html';
    linkJava.target = '_blank';
    linkJava.textContent = 'Download for Windows';
    strHowToJava.appendChild(linkJava);

    strHowToMariaDB.innerHTML = 'You can download the MariaDB from here: ';
    linkMariaDB.href = 'https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.4.4&os=windows&cpu=x86_64&pkg=msi&mirror=neterra';
    linkMariaDB.target = '_blank';
    linkMariaDB.textContent = 'Download for Windows';
    strHowToMariaDB.appendChild(linkMariaDB);

    strHowToDBeaver.innerHTML = 'You can download the DBeaver from here: ';
    linkDBeaver.href = 'https://dbeaver.io/download/';
    linkDBeaver.target = '_blank';
    linkDBeaver.textContent = 'Download for Windows';
    strHowToDBeaver.appendChild(linkDBeaver);
});

LinuxBtn.addEventListener('click', () => {
    strHowToJava.innerHTML = 'You can download the Java Runtime Environment(JRE) from here: ';
    linkJava.href = 'https://www.java.com/en/download/help/linux_install.html';
    linkJava.target = '_blank';
    linkJava.textContent = 'Download for Linux';
    strHowToJava.appendChild(linkJava);

    strHowToMariaDB.innerHTML = 'You can download the MariaDB from here: ';
    linkMariaDB.href = 'https://mariadb.org/download/?t=mariadb&p=mariadb&r=11.4.4&os=Linux&cpu=x86_64&i=systemd&mirror=crete';
    linkMariaDB.target = '_blank';
    linkMariaDB.textContent = 'Download for Linux';
    strHowToMariaDB.appendChild(linkMariaDB);

    strHowToDBeaver.innerHTML = 'You can download the DBeaver from here: ';
    linkDBeaver.href = 'https://dbeaver.io/download/';
    linkDBeaver.target = '_blank';
    linkDBeaver.textContent = 'Download for Linux';
    strHowToDBeaver.appendChild(linkDBeaver);
});