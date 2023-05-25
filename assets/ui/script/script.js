const runScriptBtn = document.querySelector('#run');
const tokenInputField = document.querySelector('#token-in')
runScriptBtn.addEventListener('click', () => {
    const finalToken = tokenInputField.value.trim();
    if (finalToken === '') {
        ctmLog('error', 'insert a token!')
    }
    else {
        browser.tabs.query({ active: true, currentWindow: true }).then(async (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, { command: "RUN_LOGIN", token: finalToken }, (r) => {
                switch (r.code) {
                    case 200:
                        ctmLog('info', `finished:  ${r.code} ${r.cause} ${r.further}`);
                        break;

                    case 300:
                        ctmLog('error', `action rejected: ${r.code} ${r.cause} ${r.further}`);
                        break;

                    default:
                        ctmLog('error', `an unknown error occured! (${r.code} ${r.cause} ${r.further})`);
                        break;
                }
            })
                .then(() => {
                    ctmLog('info', 'login script running');
                })
                .catch((err) => {
                    ctmLog('error', `An unknown error occured: ${err}`);
                    throw new Error(err);
                });
        });
    }
})

async function ctmLog(type, content) {
    const logItemBone = document.createElement('span');
    const logContainer = document.querySelector('#log');
    const uuid = crypto.randomUUID();

    logItemBone.id = uuid;
    logItemBone.classList.add('log-item');

    switch (type) {
        case 'info':
            logItemBone.classList.add('info');
            break;

        case 'error':
            logItemBone.classList.add('error');
            break;

        case 'warn':
            logItemBone.classList.add('warn');
            break;

        default:
            logItemBone.classList.add('msg');
            break;
    }

    logContainer.appendChild(logItemBone);

    const logItemtext = document.createTextNode(content);
    logItemBone.appendChild(logItemtext);
}

ctmLog('info', 'welcome to Discord token login!');
ctmLog('info', 'you are using: v0.1');