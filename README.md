# Starrify
NodeJS based CLI app to Start multiple repositories. This script stars all asiatik repositories at once.

## Requirements
1) NodeJS<br/>
2) NPM working on your console (test using "npm -v")<br/>

## How to Use
1) Clone or download the project to your machine or server<br/>  
2) Enter the following code given below :<br/>
```bash
npm install .
node starrify.js
```  
3) Enter your Github Username and Password credentials when prompted. (Username/Password is not shared anywhere, check source for confirmation).<br/>
4) Wait until the following message pops up :<br/>
```bash
All Asiatik Repositories have been Starred. Thank you !
```
5) You have completed starring of repositories.<br/>

## Issues and Troubleshooting
If you recieve the following text given below, then follow the given steps:<br/>
```
Token Already Exists. Please Go to your github settings and delete the token with the name 'Stars Asiatik Repositories'.
```  
1) Open Git [Profile](https://github.com/settings/profile) (Don't forget to login from your web browser into github)<br/>
2) Scroll Down and select 'Developer Settings' on the left hand menu list.<br/>
3) Select 'Personal Access Tokens' on the left hand menu list.<br/>
4) Delete the token named 'Stars Asiatik Repositories' and retry running the script.<br/>

For any other issues please file an issue on the 'Issues' Tab. Don't forget to add a screenshot and/or logs.<br/>

### Developer
[paltrickontpb](https://github.com/paltrickontpb) - Projjal Gupta  
(Developed exclusively for Asiatik)
