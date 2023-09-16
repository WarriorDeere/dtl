console.debug('cmd.js running');

browser.commands.onCommand.addListener((command) => {
    switch (command) {
        case "login-page-tab":
            browser.tabs.create({
                "url": "https://discord.com/login"
            })

            break;

        default:
            throw new Error('No (valid) command given.');
    }
});
