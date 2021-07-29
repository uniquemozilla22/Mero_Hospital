
# Getting the Source code Files

The Source code files for the project is available in the GitHub repository that can be downloaded using the command in the terminal using the Git CLI. The source code could be used to run the application

## Front-end Application

The link for the application can be used to download the application. If a person has the Git bash installed in the application can clone the repository through the CLI. Use the code below to clone the application through git

_ **git clone https://github.com/uniquemozilla22/Mero\_Hospital.git** _

Github Link: - _https://github.com/uniquemozilla22/Mero\_Hospital.git_

![](RackMultipart20210729-4-15gmrp2_html_aa25cf9d71cedb6d.png)

_Figure: The source code for the frontend of the application in the GitHub repository_

## Back-End Application

The link for the application can be used to clone the application. The application can be cloned using the git bash integrated into the terminal through CLI.

Use the code below to clone the application through git

_ **git clone https://github.com/uniquemozilla22/Mero\_hospital\_Backend.git** _

Github Link: - _https://github.com/uniquemozilla22/Mero\_hospital\_Backend.git_

![](RackMultipart20210729-4-15gmrp2_html_ab3d36397a161258.png)

# Setting up the project

## Front-end through Expo

The project is set up in the expo framework of React Native. First, install the expo cli to the system. We need a Node Js Package Manager (NPM ) in the system to install all the packages and libraries in the application. The npm package is available when installing the node in the application which we can install by going to the official website for Node.

![](RackMultipart20210729-4-15gmrp2_html_8034bc25a3019e90.png)

_Figure: Node official Website to install node into the system_

Then after installing the node application in the system, the npm command in the command-line interface is enabled. Now the packages for the expo framework could be installed. For installing the global expo-CLI, run the command

&quot;_ **npm install -g expo-cli&quot;** _

![](RackMultipart20210729-4-15gmrp2_html_f3b721ce8de8fcdf.png)

_Figure: Command to initialize the project_

We need to install all the packages that are needed to run the application that can be done through the command

_ **npm install** _

This command installs all the packages that are required in the application. After the expo-cli and the dependencies have been installed.

After setting up the project, we can run the project using the command

&quot;_ **expo start&quot;** _

The Project will start in the 19000 port (if not busy), The development phase will initiate in the 19002 port (if not occupied).

![](RackMultipart20210729-4-15gmrp2_html_714cae3595dd95dd.png)

_Figure: Developer console for the expo of the React Native_

After we have set up the developer console we can see the web version of the application by using the &quot;Run in Web Browser command&quot; or we can start the android emulation through an Android Device.

### Emulation in Android Studio

For emulating through the android studio, we need to install the android studio application through the android studio&#39;s official website.

![](RackMultipart20210729-4-15gmrp2_html_8ae469c8c3a2f67d.png)

_Figure: Android Studio website to download_

After downloading and installing the android studio application through the website we need to go to the AVD Manager, of the application and install a device. After a successful install of the android emulator of choice.

![](RackMultipart20210729-4-15gmrp2_html_a76896147d1501d7.png)

_Figure: Android Studio AVD Manager_

![](RackMultipart20210729-4-15gmrp2_html_8489aa81299d9b4f.png)

_Figure: Android Studio AVD Manager after downloading the device_

![](RackMultipart20210729-4-15gmrp2_html_ac0d659681c0ed6.png)

After the installation of the Virtual Device, we can run the Android Device in the application. A Virtual Device container will be open. And we can now emulate the application in that virtual device that we just installed.

This device is used to run our application. For running the application in the Virtual Device through expo we can use the command

&#39; _ **expo start --android &#39;** _

Then the expo application will be installed into the virtual device and the initiation of the application would be shown in the virtual device.

### Emulating in a Physical device ![](RackMultipart20210729-4-15gmrp2_html_4e859c0d81215eeb.png)

For emulating the device in the physical device, install the expo app that is available in the AppStore and Google PlayStore and install the app. Then scan the QR code that is presented in the developer console of the application that is being developed will be installed.

## Setting up the Backend Project

After setting up the project, we need to initialize a backend server too. The backend server could be integrated to the frontend or could be integrated into a separate folder and for the communication of the backend and frontend a port could be deployed and the front-end could be initiated to listen to the server.

The backend server could be initiated by installing the packages that are required for the application in a separate folder. NPM could be used to install all the packages in the application. The packages could be installed using the command.

_ **npm install** _

After the successful installation of the packages, we could create a server for listening to a specific port. For starting the server, we can use the command

_ **npm start** _

![](RackMultipart20210729-4-15gmrp2_html_50315bd93b0fbd71.png)

_Figure: Listening to the 8000 port if the auto-generated port is unavailable_

Now when the backend application is started it starts deploying to the 8000 port. Ongoing to the browser, using the localhost:8000 in the browser we can see that the application is running in the system.

![](RackMultipart20210729-4-15gmrp2_html_d130308bd3960ad8.png)

_Figure: Starting off the Backend Server_

The message shown in the above diagram shows that the application is running. Right now, the port does not contain any data in the route &quot;/&quot; so we are getting the error.
