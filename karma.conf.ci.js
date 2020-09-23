/* eslint-disable camelcase */
module.exports = function (config) {
    config.set({
        singleRun: true
    });

    console.log("running default test on Chrome");
    config.set({
        customLaunchers: {
            Chrome_CI: {
                base: "Chrome",
                flags: []
            }
        },
        browsers: ["Chrome_CI"]
    });
};
