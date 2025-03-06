
const schedule = require('node-schedule');


function restartService() {
    exec('pm2 reload 7 --force', (err, stdout, stderr) => { //Here You can replace 7 with your app id
        if (err) {
            //some err occurred
            console.error(err)
        }

        else {
            console.log('App restarted from Bash Script')
        }
    });
}

// Schedule the service to start at the desired times
const times = ['0 0 * * *', '0 3 * * *', '0 6 * * *', '0 9 * * *', '0 12 * * *', '0 15 * * *', '0 18 * * *', '0 21 * * *'];

times.forEach(time => {
    schedule.scheduleJob(time, () => {
        console.log('Starting service at:', new Date());
        restartService();
    });
});