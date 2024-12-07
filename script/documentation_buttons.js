window.addEventListener('load', () => {
    WindowsBtn.click();
});

// Scroll to Headers
document.getElementById('backtop').addEventListener('click', () => {
    document.getElementById('select-installation').scrollIntoView({ behavior: 'smooth' });
});

// Software Required
document.getElementById('java_download_link').addEventListener('click', () => {
    document.getElementById('select_java').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('mariadb_download_link').addEventListener('click', () => {
    document.getElementById('select_mariadb').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('dbeaver_download_link').addEventListener('click', () => {
    document.getElementById('select_dbeaver').scrollIntoView({ behavior: 'smooth' });
});

// L2J LastWarrior Server Emulation
document.getElementById('prepate_configuration_link').addEventListener('click', () => {
    document.getElementById('select_prepare').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('database_configuration_link').addEventListener('click', () => {
    document.getElementById('select_database').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('register_configuration_link').addEventListener('click', () => {
    document.getElementById('select_gsregister').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('loginserver_configuration_link').addEventListener('click', () => {
    document.getElementById('select_loginserver').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('gameserver_configuration_link').addEventListener('click', () => {
    document.getElementById('select_gameserver').scrollIntoView({ behavior: 'smooth' });
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

    strHowToPrepare.innerText = 'After you receive our project zip file, you must unzip it into an appropriate path. The easiest path is the `C:` drive.';

    strHowToDatabase.innerText = 'To begin the database installation, you must run `Install_GameServerDB.bat` and `Install_LoginServerDB.bat` from the tools folder.\n' +
        'Enter all information about your MariaDB or MySQL connection, such as `localhost`, `username`, `password`, and `database`, and click connect.\n' +
        'If the connection information is correct, the database installer will prompt you with the options `Full Install`, `Upgrade`, and `Exit`.\n\n' +
        'Choosing `Full Install` will delete all data from the database.\n' +
        'Choosing `Upgrade` will add data to the database without losing any existing data.\n' +
        'Selecting `Exit` will terminate the database installer!';

    strHowToGSRegister.innerText = 'To register the GameServer, run `RegisterGameServer.bat` from the loginserver folder, type `help`, and select the empty server.\n' +
        'Once the program completes, you will find a generated file named `hedix`. Move this file into the `gameserver/config/loader` folder.\n';

    strHowToLoginServer.innerText = 'To start the L2jLoginServer, you must configure the settings in the config file located at `loginserver/config/Network loginserver.ini`.\n' +
        'Enter all required information:\n';
    const loginCode = document.createElement('code');
    loginCode.innerText = 'URL = jdbc:mysql://localhost/loginserver_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToLoginServer.appendChild(loginCode);
    strHowToLoginServer.append('Save the settings and run `StartLoginServer.bat` from the loginserver folder.');

    strHowToGameServer.innerText = 'To start the L2jGameServer, you must configure the settings in the config file located at `gameserver/config/Network gameserver.ini`.\n' +
        'Enter all required information:\n';
    const gameCode = document.createElement('code');
    gameCode.innerText = 'GameserverDB = gameserver_database_name\nLoginserverDB = loginserver_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToGameServer.appendChild(gameCode);
    strHowToGameServer.append('Save the settings and run `StartGameServer.bat` from the gameserver folder.');
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

    strHowToPrepare.innerText = 'After you receive our project zip file, you must unzip it into an appropriate path. The easiest path is `/home/user`.\n' +
        'Next, you need to make all `.sh` files executable. To do this, use the following command in the terminal (bash) within the `loginserver`, `gameserver`, and `tools` folders:';
    const dos2unix_cmd = document.createElement('code');
    dos2unix_cmd.innerText = 'dos2unix *.sh && chmod +x *.sh';
    strHowToPrepare.appendChild(dos2unix_cmd);

    strHowToDatabase.innerText = 'To begin the database installation, you must run `Install_GameServerDB.sh` and `Install_LoginServerDB.sh` from the `tools` folder.\n' +
        'To execute the files, either double-click them or run `./Install_GameServerDB.sh` or `./Install_LoginServerDB.sh` from the terminal (bash).\n' +
        'Enter all necessary information for your MariaDB or MySQL connection, such as `localhost`, `username`, `password`, and `database`, then click connect.\n' +
        'If the connection information is correct, the database installer will prompt you with the options `Full Install`, `Upgrade`, and `Exit`.\n\n' +
        'Choosing `Full Install` will delete all data from the database.\n' +
        'Choosing `Upgrade` will add data to the database without losing any existing data.\n' +
        'Selecting `Exit` will terminate the database installer!';

    strHowToGSRegister.innerText = 'To register the GameServer, run `RegisterGameServer.sh` from the `loginserver` folder, type `help`, and select the empty server.\n' +
        'Once the program completes, you will find a generated file named `hedix`. Move this file into the `gameserver/config/loader` folder.\n';

    strHowToLoginServer.innerText = 'To start the L2jLoginServer, you must configure the settings in the config file located at `loginserver/config/Network loginserver.ini`.\n' +
        'Enter all required information:\n';
    const loginCode = document.createElement('code');
    loginCode.innerText = 'URL = jdbc:mysql://localhost/loginserver_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToLoginServer.appendChild(loginCode);
    strHowToLoginServer.append('Save the settings and run `StartLoginServer.sh` from the `loginserver` folder.');

    strHowToGameServer.innerText = 'To start the L2jGameServer, you must configure the settings in the config file located at `gameserver/config/Network gameserver.ini`.\n' +
        'Enter all required information:\n';
    const gameCode = document.createElement('code');
    gameCode.innerText = 'GameserverDB = gameserver_database_name\nLoginserverDB = loginserver_database_name\nLogin = database_username\nPassword = database_password\n';
    strHowToGameServer.appendChild(gameCode);
    strHowToGameServer.append('Save the settings and run `StartGameServer.sh` from the `gameserver` folder.');
});