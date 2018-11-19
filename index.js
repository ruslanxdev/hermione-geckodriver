const Launcher = require('./Launcher');

const launcher = new Launcher();

module.exports = function(hermione, opts) {
    hermione.on(hermione.events.INIT, () => {
        launcher.start(opts);
    });

    const stopHandler = () => {
        launcher.stop();
    };

    hermione
        .on(hermione.events.RUNNER_END, stopHandler)
        .on(hermione.events.ERROR, stopHandler)
        .on(hermione.events.EXIT, stopHandler);
};