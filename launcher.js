const requireg = require('requireg');

try {
    require.resolve(requireg.resolve('geckodriver'));
} catch (e) {
    throw Error('geckodriver not found: npm install -g geckodriver');
}

const geckoDriver = requireg('geckodriver');
const childProcess = require('child_process');

const binPath = geckoDriver.path;

class Launcher {
    constructor() {
        this.geckoDriverArgs = {}
    }

    start(config) {
        this.geckoDriverArgs = config.geckoDriverArgs || [];

        return new Promise((resolve, reject) => {
            this.process = childProcess.execFile(binPath, this.geckoDriverArgs, (err, stdout, stderr) => {
                if (err) {
                    return reject(err)
                }
            });

            if (this.process) {
                resolve()
            }
        })
    }

    stop() {
        if (this.process) {
            this.process.kill();
            this.process = null;
        }
    }
}

module.exports = Launcher;