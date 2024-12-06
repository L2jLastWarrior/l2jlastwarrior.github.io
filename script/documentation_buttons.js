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
document.getElementById('prepate_configuration_link').addEventListener('click',()=>{
    document.getElementById('select_prepare').scrollIntoView({behavior:'smooth'});
});

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

// Software Required
const strHowToJava = document.getElementById('how_to_java');
const linkJava = document.createElement('a');

const strHowToMariaDB = document.getElementById('how_to_mariadb');
const linkMariaDB = document.createElement('a');

const strHowToDBeaver = document.getElementById('how_to_dbeaver');
const linkDBeaver = document.createElement('a');

// L2J LastWarrior Server Emulation
const strHowToPrepare = document.getElementById('how_to_prepare');
const strHowToDatabase = document.getElementById('how_to_database');
const strHowToGSRegister = document.getElementById('how_to_gsregister');
const strHowToLoginServer = document.getElementById('how_to_loginserver');
const strHowToGameServer = document.getElementById('how_to_gameserver');

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

    strHowToPrepare.innerText = 'After you get our project zip file you must to unzip it into suitable path, the easiest path is `C:` Drive';

    strHowToDatabase.innerText = 'To begin Database installation you must run the `Install_GameServerDB.bat and Install_LoginServerDB.bat` from folder tools.\n' + 
                                'Fill in all information about your MariaDB or Mysql connection such `localhost,username,password and database` and click connect.\n' +
                                'If the information about your connection is currect our database installer ask you `Full Install,Upgrade,Exit`\n\n' +
                                'The choice Full Install it will delete all data from database.\n' + 
                                'The choice Upgrade it will add data into database with out lose any previous data.\n'+
                                'And with Exit the Database Installer will be terminate!';

    strHowToGSRegister.innerText = 'To Register the GameServer run the RegisterGameServer.bat from loginserver folder and type help then select the empty Server.\n' + 
                                    'When the program finished you will found an generated file with name hedix, move this file inside the gameserver/config/loader\n';

    strHowToLoginServer.innerText = 'To start the L2jLoginServer you must settings up the config file that you will find it loginserver/config/Network loginserver.ini\n' + 
                                    'Fill in all information:\n';
    const loginCode = document.createElement('code');
    loginCode.innerText = 'URL = jdbc:mysql://localhost/loginsever_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToLoginServer.appendChild(loginCode);
    strHowToLoginServer.append('Save the settings and run the StartLoginServer.bat from loginserver folder');

    strHowToGameServer.innerText = 'To start the L2jGameServer you must settings up the config file that you will find it gameserver/config/Network gameserver.ini\n' + 
                                    'Fill in all information:\n';
    const gameCode = document.createElement('code');
    gameCode.innerText = 'GameserverDB = gameserver_database_name\nLoginserverDB = loginsever_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToGameServer.appendChild(gameCode);
    strHowToGameServer.append('Save the settings and run the StartGameServer.bat from gameserver folder');
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

    strHowToPrepare.innerText = 'After you get our project zip file you must to unzip it into suitable path, the easiest path is `/home/user`.\n' +
                                'Then we must make executables all files with `.sh` to do that we use this command in bash(terminal) at folders(loginserver,gameserver,tools): ';
    const dos2unix_cmd = document.createElement('code');
    dos2unix_cmd.innerText = 'dos2unix *.sh && chmod +x *.sh';
    strHowToPrepare.appendChild(dos2unix_cmd);

    strHowToDatabase.innerText = 'To begin Database installation you must run the `Install_GameServerDB.sh and Install_LoginServerDB.sh` from folder tools.\n' +
                                'To execute the files double click or from terminal(bash) run ./Install_GameServerDB.sh or ./Install_LoginServerDB.sh.\n' + 
                                'Fill in all information about your MariaDB or Mysql connection such `localhost,username,password and database` and click connect.\n' +
                                'If the information about your connection is currect our database installer ask you `Full Install,Upgrade,Exit`\n\n' +
                                'The choice Full Install it will delete all data from database.\n' + 
                                'The choice Upgrade it will add data into database with out lose any previous data.\n'+
                                'And with Exit the Database Installer will be terminate!';

    strHowToGSRegister.innerText = 'To Register the GameServer run the RegisterGameServer.sh from loginserver folder and type help then select the empty Server.\n' + 
                                'When the program finished you will found an generated file with name hedix, move this file inside the gameserver/config/loader\n';

    strHowToLoginServer.innerText = 'To start the L2jLoginServer you must settings up the config file that you will find it loginserver/config/Network loginserver.ini\n' + 
                                    'Fill in all information:\n';
    const loginCode = document.createElement('code');
    loginCode.innerText = 'URL = jdbc:mysql://localhost/loginsever_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToLoginServer.appendChild(loginCode);
    strHowToLoginServer.append('Save the settings and run the StartLoginServer.sh from loginserver folder');

    strHowToGameServer.innerText = 'To start the L2jGameServer you must settings up the config file that you will find it gameserver/config/Network gameserver.ini\n' + 
                                    'Fill in all information:\n';
    const gameCode = document.createElement('code');
    gameCode.innerText = 'GameserverDB = gameserver_database_name\nLoginserverDB = loginsever_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToGameServer.appendChild(gameCode);
    strHowToGameServer.append('Save the settings and run the StartGameServer.sh from gameserver folder');
});