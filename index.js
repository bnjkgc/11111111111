// const port = process.env.PORT || 5555;
const port = 5555;
const { execSync } = require("child_process");

execSync(`chmod +x ./start.sh && ./start.sh`,{
	cwd: './'
})