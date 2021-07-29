
# Getting the Source code Files
The Source code files for the project is available in the GitHub repository that can be downloaded using the command in the terminal using the Git CLI. The source code could be used to run the application 
Front-end Application
The link for the application can be used to download the application. If a person has the Git bash installed in the application can clone the repository through the CLI. Use the code below to clone the application through git

**git clone https://github.com/uniquemozilla22/Mero_Hospital.git**

Github Link: - **https://github.com/uniquemozilla22/Mero_Hospital.git**
 ![image](https://user-images.githubusercontent.com/49606627/127480103-850e85c0-5e05-43f1-87c1-fb8222b74537.png)

Figure: The source code for the frontend of the application in the GitHub repository
Back-End Application
The link for the application can be used to clone the application. The application can be cloned using the git bash integrated into the terminal through CLI.
 Use the code below to clone the application through git
**git clone https://github.com/uniquemozilla22/Mero_hospital_Backend.git**

Github Link: - **https://github.com/uniquemozilla22/Mero_hospital_Backend.git**
 ![image](https://user-images.githubusercontent.com/49606627/127480140-331ef22b-2113-4c25-876c-c3e2c62cbade.png)

# Setting up the project
## Front-end through Expo
The project is set up in the expo framework of React Native. First, install the expo cli to the system. We need a Node Js Package Manager (NPM ) in the system to install all the packages and libraries in the application. The npm package is available when installing the node in the application which we can install by going to the official website for Node. 
 ![image](https://user-images.githubusercontent.com/49606627/127480166-bab8c24a-82e9-4cf1-a572-76c5f6948849.png)
Figure: Node official Website to install node into the system

Then after installing the node application in the system, the npm command in the command-line interface is enabled. Now the packages for the expo framework could be installed. For installing the global expo-CLI, run the command 

 &quot;_ **npm install -g expo-cli&quot;** _

 ![image](https://user-images.githubusercontent.com/49606627/127480186-f87d5bd5-df0a-4717-83e3-e00ba9240f64.png)

Figure: Command to initialize the project

We need to install all the packages that are needed to run the application that can be done through the command 
_ **npm install** _

This command installs all the packages that are required in the application. After the expo-cli and the dependencies have been installed.

After setting up the project, we can run the project using the command
&quot;_ **expo start&quot;** _

The Project will start in the 19000 port (if not busy), The development phase will initiate in the 19002 port (if not occupied).
 ![image](https://user-images.githubusercontent.com/49606627/127480206-26354578-800c-4e25-a364-1fe201762dda.png)

_Figure: Developer console for the expo of the React Native_

After we have set up the developer console we can see the web version of the application by using the “Run in Web Browser command” or we can start the android emulation through an Android Device. 
### Emulation in Android Studio
For emulating through the android studio, we need to install the android studio application through the android studio’s official website. 
 ![image](https://user-images.githubusercontent.com/49606627/127480222-fc798ca7-ec17-4cf0-aa7e-32ba735946da.png)

_Figure: Android Studio website to download_

After downloading and installing the android studio application through the website we need to go to the AVD Manager, of the application and install a device. After a successful install of the android emulator of choice. 
 ![image](https://user-images.githubusercontent.com/49606627/127480236-db378b3d-ef4a-4c44-8fe6-3f464d5286e3.png)

_Figure: Android Studio AVD Manager_

 ![image](https://user-images.githubusercontent.com/49606627/127480253-7b22d2af-6012-4ebc-9c86-d1e0e67a3629.png)
_Figure: Android Studio AVD Manager after downloading the device_

![image](https://user-images.githubusercontent.com/49606627/127480275-2445bf5b-f2e4-4433-90f0-36f17fb3cbd3.png)



After the installation of the Virtual Device, we can run the Android Device in the application. A Virtual Device container will be open. And we can now emulate the application in that virtual device that we just installed.
This device is used to run our application. For running the application in the Virtual Device through expo we can use the command 
&#39; _ **expo start --android &#39;** _
Then the expo application will be installed into the virtual device and the initiation of the application would be shown in the virtual device.

![image](https://user-images.githubusercontent.com/49606627/127480307-745d3734-2e17-4681-97ba-b8eb52f9e061.png)


### Emulating in a Physical device
For emulating the device in the physical device, install the expo app that is available in the AppStore and Google PlayStore and install the app. Then scan the QR code that is presented in the developer console of the application that is being developed will be installed.

## Setting up the Backend Project
After setting up the project, we need to initialize a backend server too. The backend server could be integrated to the frontend or could be integrated into a separate folder and for the communication of the backend and frontend a port could be deployed and the front-end could be initiated to listen to the server.

The backend server could be initiated by installing the packages that are required for the application in a separate folder. NPM could be used to install all the packages in the application. The packages could be installed using the command.
_ **npm install** _

After the successful installation of the packages, we could create a server for listening to a specific port. For starting the server, we can use the command

npm start

 ![image](https://user-images.githubusercontent.com/49606627/127480364-936abf90-5dde-48c4-ae1e-e3ba3a5fec65.png)

_Figure: Listening to the 8000 port if the auto-generated port is unavailable_

Now when the backend application is started it starts deploying to the 8000 port. Ongoing to the browser, using the localhost:8000 in the browser we can see that the application is running in the system.
 ![image](https://user-images.githubusercontent.com/49606627/127480374-206e1cd3-329e-42d1-a4f9-f81ab6f5be49.png)

_Figure: Starting off the Backend Server_

The message shown in the above diagram shows that the application is running. Right now, the port does not contain any data in the route “/” so we are getting the error.

# Using the application

## User/ Patients and Doctors:
The application is made on react native and the functions of the application that the user base is allowed to explore are huge. The application for the user base will be defined in steps of using the application. 

### Step:1 Registering the User

 ![image](https://user-images.githubusercontent.com/49606627/127480396-3a4c5609-c12d-4f2a-aa9e-af1ed433baea.png)

Fill in the form and send the application the credentials of the application then the user will be registered.

### Step 2 : Forget Password
If the user has forget the password the button is given in the login form. 
![image](https://user-images.githubusercontent.com/49606627/127480450-b5df31e1-b072-469c-a170-4dcd31cf35d9.png)

![image](https://user-images.githubusercontent.com/49606627/127480495-a2253301-f19a-495b-9c95-b8db35bcc15e.png)

The user or the doctor can register and if the user or the doctor forgets the passwor for the login credential. He or she must have to type the user email provided by them while registering the application and the user will get the email mentioning the username and password that will be reset in the applciation while forgetting the password.
 

### Step 3: Logging in to the application

The Interface will be provided whilist using the application. The user need to provide the application with the login credentials.
 ![image](https://user-images.githubusercontent.com/49606627/127480533-a64db225-2482-4a0d-a504-0529f6497db1.png)
![image](https://user-images.githubusercontent.com/49606627/127480546-c5d33cc6-e764-4286-a061-31055565c1fd.png)

Then after providing the application with the credentials we can log on to the application.
 ![image](https://user-images.githubusercontent.com/49606627/127480565-58ac59c2-a39d-492a-9aae-ff0975a72d28.png)

### Step 4: Booking an Appointment
The booking of the application can be done through the application. The user can navigate to the bottom of the application of the home screen and the user can see the book an appointment tab on the application.



#### Step 4.1:
We can see the Get an Appointment in the home screen. We can go to the application and choose the fields in the application.
![image](https://user-images.githubusercontent.com/49606627/127480686-16754a5b-e9cc-49df-9145-596467d38dc1.png)



 #### Step 4.2 
The application will let the user of the application choose between the fields on the hospital.

![image](https://user-images.githubusercontent.com/49606627/127480715-0b462525-55c3-4a02-8aba-df75c2d97e61.png)

#### Step 4.3: 
After the choosing of the application the user will be greeted with the interface to select the date for the application. The user will also see the coming Appointments of the application.
 ![image](https://user-images.githubusercontent.com/49606627/127480744-5dd6cdb8-bf19-4817-aa9e-f5810ad2ae86.png)
![image](https://user-images.githubusercontent.com/49606627/127480752-b1b40a6a-7242-4202-bbeb-68ae12288552.png)

#### Step 4.4
The application will show the available time for the date on the application and the app user could go the specific time to the hospital. The application will then book the appointment when pressing the submit button
 ![image](https://user-images.githubusercontent.com/49606627/127480766-db65a740-9714-4813-b18d-e8b7509d6153.png)
![image](https://user-images.githubusercontent.com/49606627/127480781-e69b5613-5823-4af3-b73f-71e655603440.png)



### Step 5: Chatting with Doctor
After the login of the user the user if needs to chat with the doctor the feature has been entered into the application.This is one of the main features of the application, the users can communicate with the doctor. The User can go to the message box in the Bottom Navigation Bar in the application. The users can create a chat room with the doctor of a specific field 
 ![image](https://user-images.githubusercontent.com/49606627/127480809-2ab52f5d-de4b-446f-97f1-e4e98b7e8059.png)
Figure: Bottom navigation for message

#### Step 5.1 : Creating a Chatroom
The User after going to the Message bar can see the “Choose Feild” option in the application. The user can choose the field and the list of doctors available in the field will be shown on the screen.
![image](https://user-images.githubusercontent.com/49606627/127480833-f837f589-7311-4370-b1fd-06e2a05c4d92.png)

The users can then see the list of doctors that are available to chat in the application. The users can see the details of the doctors in the application
![image](https://user-images.githubusercontent.com/49606627/127480844-f6419d28-b820-49d5-863d-56ce209d681f.png)

#### Step 5.2 : The user can then use the “Message Him” button on the screen and the chat room for the user will be created. The validation if the user has already created a message room for the doctor. Then the user will be requested to go to the messages.
The user can now chat with the Doctor in the chatroom he or she is enabled to send the messages to the doctor. The text on the application’s chat system is stored in the database.

 #### Step 5.3
The application will then show the chatroom in the application in the Messages tab from the Message Bottom Bar Icon.

![image](https://user-images.githubusercontent.com/49606627/127480880-b65380af-3436-4beb-b994-9c8cee705fc3.png)

![image](https://user-images.githubusercontent.com/49606627/127480891-2c1b5f08-23bc-4a21-ab92-22d893f7d5bc.png)

### Step 6: Covid Information
The application gives the user some of the data in the application using external sources from the government of Nepal.

#### Step 6.1
The application will show the data for the COVID in the current scenario of the country. The user can click on the second icon of the bottom navigation bar and then the application will show the current news covid FAQ and the latest data of the covid in the screen.
![image](https://user-images.githubusercontent.com/49606627/127480912-ac0d3068-58b3-4da8-becd-0a4446ba0c78.png)

#### Step 6.2:
After the application is shown the news the user can click on the desired NEWS application. The application will then show the current news on a separate screen if the user needs to see the individual message more the user can click on the Go To Site Link which will open the application in the browser.
![image](https://user-images.githubusercontent.com/49606627/127480926-da7f92cb-3680-4f35-af00-f99c57a9be6b.png)

#### Step 6.3:
When the application will show the current FAQ of the application, the user can click on the question to see the answers in the application.

![image](https://user-images.githubusercontent.com/49606627/127480950-539c8e09-5678-4b20-b3f8-a764f4268ad8.png)
### Step 7: User Profile

#### Step 7.1
The User can see the user details in the application by going to the profile screen of the Bottom Navigation Bar. Here the user will see the details provided by them

![image](https://user-images.githubusercontent.com/49606627/127481020-4130d37f-bce5-45b7-bc28-8fa9f68b963e.png)

### Step: 8 : Seeing User Appointments

After going to the profile screen of the application the application will then show the appointments and the messages section.

#### Step: 8.1
To see the appointment Lists in the application made by the user the user then can see the appointments in the application.
![image](https://user-images.githubusercontent.com/49606627/127481014-51f85cdc-5e51-428c-bcdd-c448d1db37d2.png)

#### Step 8.2
The User can click on the appointment to see the details of the appointment or to delete the appointment.
![image](https://user-images.githubusercontent.com/49606627/127481019-60e94dd9-071f-49e0-8850-b54b810718cf.png)

#### Step 8.3
The user can see the appointments in the application by clicking the appointment list on the appointment screen.
![image](https://user-images.githubusercontent.com/49606627/127481037-aee1c9b0-cd67-4b58-a2e4-5141bb15b5b4.png)

#### Step 8.4
If the user chooses to delete the appointment the user can do that by clicking on the delete appointment on the view of the appointment. The user will be greeted with the alert of the application being removed

![image](https://user-images.githubusercontent.com/49606627/127481070-1ecdbc9a-2ef5-4116-9ec7-9f9e53ee63b6.png)
Step 10: Edit the User Information

#### Step 10.1
The application allows the user to edit their name and email in the application. We can edit the user profile from the Edit Profile in the profile screen.
![image](https://user-images.githubusercontent.com/49606627/127481130-b70f00e2-53ef-408b-8d82-0b8e974a0e30.png)

#### Step 10.2
The screen will allow the user to edit the information on the details and the application will then enable to edit the profile on submitting.
![image](https://user-images.githubusercontent.com/49606627/127481146-5f214ac5-4e10-41e3-b2e4-f51cc117f580.png)

## Admin
### Step 1: Logging into the application
![image](https://user-images.githubusercontent.com/49606627/127481083-6a299161-8d28-4c88-929d-d535aa112213.png)


####  Step 1.1
The Interface will be provided whilist using the application. The user need to provide the application with the login credentials.
 ![image](https://user-images.githubusercontent.com/49606627/127481108-c12b8923-a1bb-47b8-a11c-fbab0f2d9f29.png)

Then after providing the application with the credentials we can log on to the application.

#### Step 1.2:
The application will then redirect the admin to the application. The Admin can see the recent appointments and the categories at a glance.
![image](https://user-images.githubusercontent.com/49606627/127481147-999aa937-7cc6-413d-a6f8-12d01f158592.png)



### Step 2 : Updating Categories


#### Step 2.1
The admin will be able to update the application’s categories. The List of categories will be given to the admin to choose the data to edit. The admin can click on the category to go to the edit screen.

![image](https://user-images.githubusercontent.com/49606627/127481186-7c67446e-d724-4c39-b8cb-7b521e6c91a7.png)

#### Step 2.2
The admin is able to update the image description and Name of the Category the admin will be given a interface to fill the form with the default value of the earlier data in the application. Then the admin can edit the data in the category section of the admin panel.

![image](https://user-images.githubusercontent.com/49606627/127481206-1f2d5491-e1ec-45bd-8cf9-2cc3269e9f1e.png)

### Step 3: Seeing Doctor Info


#### Step 3.1
The application will enable the admin to see the information about the doctor. The admin can go to the doctor Screen in the Bottom Navigation Bar and see the list of the doctors
![image](https://user-images.githubusercontent.com/49606627/127481226-b048d865-c9ea-4902-b23e-f266042fd403.png)

#### Step 3.2: 
The application will show the description of the doctor using the modalizer. The admin can click on the list item of the and the application will show the description in the doctor.

![image](https://user-images.githubusercontent.com/49606627/127481263-7bb8d6fc-8c0e-4078-bbe1-13a93a15e3d2.png)

#### Step 4: Appointments Lists

#### Step 4.1
The appointment’s data can be seen in the application using the admin. The admin can see the appointments to confirm the application.
![image](https://user-images.githubusercontent.com/49606627/127481295-b083c2c1-b4d5-496e-810c-3eda33344c90.png)

#### Step 4.2
The appointment can be more descriptive of the appointment and the appointment booker’s can be shown in the application by clicking the appointment item in the appointment list.
![image](https://user-images.githubusercontent.com/49606627/127481310-1c79f019-feea-4b96-8c54-ad0374d4cb3f.png)

### Step 5: Adding Doctor


#### Step 5.1
The Admin have the ability to add the doctor. The admin can go to the profile tab on the bottom navigation bar. The option Add Doctor can move the screen towards the form to add the data for the doctors.
![image](https://user-images.githubusercontent.com/49606627/127481323-a9c46256-2c37-402a-865b-157910da3dc2.png)

#### Step 5.2
The data of the doctors can be added through the application and the application form could be submitted to add the doctor to the specific category
![image](https://user-images.githubusercontent.com/49606627/127481346-e1535612-b836-451d-8027-e46a37e9756d.png)


### Step 6: Adding Categories


#### Step 6.1
The admin can add the categories of the hospital. The admin can ho to the profile page and click on the add category feature the admin can then go to the form to add category.
![image](https://user-images.githubusercontent.com/49606627/127481363-60bbc991-06b0-4360-8a90-33153d0e082f.png)

#### Step 6.2
The form on the application when filled and submitted will add the categories in the system. Further more doctors could be added though the add doctor panel.
![image](https://user-images.githubusercontent.com/49606627/127481397-3c741d88-ed4b-4395-b0b3-b13f6a9db132.png)

