# First time setup instructions to use this project on local machines:
- In the folder you want to save files run command <br />
`git clone https://github.com/abhinav-huria/Kveri.git` <br />
`cd Kveri`<br/>
`git branch development` 
- Just run command &ensp;`git branch -a`&ensp; to confirm that current branch is development only
- Do your updations and run commands<br/>
`git add .`<br/>
`git commit -m "<your commit message>"`<br/>
`git push origin development`
- All changes will show up in development branch which will be merged to main branch periodically. Please donot commit directly in main
- After this whole setup just run commands from next time<br/>
`git checkout development`<br/>
`git pull origin development`<br/>
and now do updations<br />

## For frontend team
- First run &ensp;`npm run build`&ensp; in frontend folder
- Then come to backend folder and run &ensp;`nodemon server.js`
- The frontend will be rendered by server at [localhost:5000/](localhost:5000/)