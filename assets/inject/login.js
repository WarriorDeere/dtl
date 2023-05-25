browser.runtime.onMessage.addListener((request, from, sendResponse) => {
    if (request.command === "RUN_LOGIN") {
        try {
            setInterval(() => {
                document.body.appendChild(document.createElement`iframe`).contentWindow.localStorage.token = `"${request.token}"`
            }, 50);
            setTimeout(() => {
                location.reload();
            }, 1500);

            sendResponse({
                code: 200,
                cause: 'Ok',
                further: 'request successfull'
            })
        } catch (err) {
            sendResponse({
                code: 300,
                cause: 'Failed',
                further: err
            })
        }
    }
})