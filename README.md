This repository contains a sample static web application to demonstrate cyber security protection 

---
### Requirements

This project uses the following technologies, we need to download first node js from the below link and install it:

-  https://nodejs.org/en/download/

### Running the Application

To run this project, follow these steps:

1. Clone this repository or download this project

2. Move to the root folder of the project  in your machine and install the dependencies by running the following command:

   ```shell
   npm install
   ```

3. To launch the web application, run the following command:

   ```shell
   npm start
   ```

4. Point your browser to [http://localhost:3000](http://localhost:3000) to access the sample web app.

5. To launch the attacker website, run the following command:

   ```shell
   node attacker-server.js
   ```

6. Point your browser to [http://localhost:4000](http://localhost:4000/) to access the attacker website

### Description

Here we have two website Personal website and Attacker website:

#### Personal website:

I have integrated Personal Website Button, when we click it then a message is rendered below that You have clicked our website button

#### Attacker website:

When we come to attackers website, I have embedded an iframe into it which is trying to render our website into their website

### What securities standards we are following

1. I have demonstrated use of X-Frame-Options or Content-Security-Policy headers in order to stop our website to get loaded in someone elses website

2. Also have demonstrated use of sameSite property in order to tell the browser not to send the session cookie when the request comes from a different domain

3. Similarly we can follow several more security standards in order to not let our static website hacked or being misused.

### Instructions to run the code (With solution):

No changes needed to be made in current code

### Instructions  to run the code (to reproduce issue):

Comment the code on the below lines in the project #server.js# file in order to reproduce the issue: 
   
   - line no 24 
   - From line no 29 to 38

Note: Clear the cache and again run the application


### Problem

When we Reproduce the issue then we will see following:

- We will see that Personal Website button is being overrided on the Attackers Website button in attackers website
- If we will reduce the opacity of the iframe to 0 instead of 0.4 then we will not be able to see Personal Website button, But when we click attackers website button then it will only click the Personal Website Button(And this is example of click-jacking).

### Solution

When an attacker is trying to embed our website in their Iframe our website is not letting that happen since we have used some standards in it in order to protect our static website being rendered on other website. This is a perfect example of Click Jacking attack which we have provided.




