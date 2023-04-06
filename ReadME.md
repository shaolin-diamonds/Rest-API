<h1>Rest API</h1>

<h2>Description</h2>
Create a very basic REST API with Node.js (JavaScript), Express, and Postman.
<br />

<h2>Languages and Utilities Used</h2>

- <b>Postman</b>
- <b>Express</b>
- <b>Node.js</b>

<h2>Environments Used </h2>

- <b>Visual Studio Code</b>

<h2>Program walk-through:</h2>

<p align="center">
<h3>Project initialization:</h3> 
Initialize npm and it sets up the project for us: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/001_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/002_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
Notice when it's finished, it creates package.json file: <br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/003_npm%20Initialize.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
Install a module called Express: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/004_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/005_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
Install a module called Body-Parser: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/006_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/007_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
Install a module called Nodemon: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/008_npm%20Initialize.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
<h3>Code: Building API Scaffolding:</h3> 
Create index, import modules that were downloaded, and listen on port 3000: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/009_code%20scaffolding.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
Define first API route: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/010_code%20scaffolding.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
Start the server with nodemon: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/011_code%20scaffolding.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
Able to use browser to use localhost for port 3000: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/012_code%20scaffolding.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
Build out scaffolding for all 4 routes: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/013_code%20scaffolding.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
<h3>Code: Building Pseudo Patient Database:</h3> 
Use hashtable to hold patient/patient records inside of actual program: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/014_patient%20db.png" height="50%" width="50%" alt="RestAPI Steps"/>
<br />
<br />
<h3>Code: Get Patient Records (API route):</h3>
For GET route, we need to validate person sending the request. Make sure patient exists and make sure ssn entered matches first and last name. If all of that is true, we will return medical record. If we enter ssn that doesn't exist: <br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/015_patient%20get.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
If we enter incorrect first/last name: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/016_patient%20get2.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
If we don't specify the body: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/017_patient%20get3.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
If we enter correct headers and body: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/018_patient%20get4.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
<h3>Code: Create a New Patient (API route):</h3>
For POST route, we need to use headers to create new patient. Use patients object to pass in ssn. It's an array with variables being the elements: <br/>
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/019_patient%20post.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
<h3>Code: Update a Patient's Phone Number (API route):</h3>
For PUT route, we need to use headers to update patient phone number. We need to validate person sending the request. Make sure patient exists and make sure ssn entered matches first and last name. Use the body to specify new phone number: <br /> <br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/020_patient%20put.png" height="80%" width="80%" alt="RestAPI Steps"/>
<br />
<br />
<h3>Code: Delete a Patient and Patient Records (API route):</h3>
For DELETE route, we need to use headers to delete patient phone number. We need to validate person sending the request. Make sure patient exists and make sure ssn entered matches first and last name: <br /> <br />
<img src="https://github.com/shaolin-diamonds/Rest-API/blob/577e2216eae2d894e26acdf1a5ce230842c856ce/RestAPI/021_patient%20delete.png" height="80%" width="80%" alt="RestAPI Steps"/>
</p>

<!--
 ```diff
- text in red
+ text in green
! text in orange
# text in gray
@@ text in purple (and bold)@@
```
--!>
