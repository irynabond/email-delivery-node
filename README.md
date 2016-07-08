# email-delivery-node

###How it works:
I used node.js to set up email delivery to multiple email addresses. 
Steps done:
* Created new domain name using NAMECHEAP.COM website. My domain is @irynabond.space. 
* Integrated with gmail.com for email receiving. 
* Created account on MANDRILLAPP.COM in order to get API key for sending messages. Added new domain and set up DNS and DKIM values, verified domain.
* Recieved API key. 
* Written script file (index.js) and connected to mandrill using api key.
* Created a test template (sample of dolly email) on MAILCHIMP.COM
* Sent the template to mandrill.
* Added template name to index.js file. In my case : "dollydolly"
 
###Try it yourself steps:

You need node.js to be installed to run this example

#####Download or clone this repo
Use git clone https://github.com/irynabond/email-delivery-node.git

####Open Command Propmt or Terminal in folder path
run command 'npm install' to get essential packages

####Open index.js
Edit line 16. Add your own email address. You can add multiple emails (objects)  to array

#### Run program
Use 'node index.js' command (for command prompt)

#### Open your email
You are going to see new letter in your inbox! It should look like this
![alt text](https://s31.postimg.org/t699dyw3f/email.png "Email")

