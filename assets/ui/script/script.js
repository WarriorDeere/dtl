console.debug('script.js running');
class ctm {
    info(input) {
        const logItemBone = document.createElement('span');
        const logContainer = document.querySelector('#log');
        const uuid = crypto.randomUUID();

        logItemBone.id = uuid;
        logItemBone.classList.add('log-item');
        logItemBone.classList.add('info');
        
        logContainer.appendChild(logItemBone);
        
        const logItemtext = document.createTextNode(input);
        logItemBone.appendChild(logItemtext);
    }
    error(input) {
        const logItemBone = document.createElement('span');
        const logContainer = document.querySelector('#log');
        const uuid = crypto.randomUUID();
        
        logItemBone.id = uuid;
        logItemBone.classList.add('log-item');
        logItemBone.classList.add('error');

        logContainer.appendChild(logItemBone);

        const logItemtext = document.createTextNode(input);
        logItemBone.appendChild(logItemtext);
    }
    warn(input) {
        const logItemBone = document.createElement('span');
        const logContainer = document.querySelector('#log');
        const uuid = crypto.randomUUID();

        logItemBone.id = uuid;
        logItemBone.classList.add('log-item');
        logItemBone.classList.add('warn');

        logContainer.appendChild(logItemBone);

        const logItemtext = document.createTextNode(input);
        logItemBone.appendChild(logItemtext);
    }
}

export const cCons = new ctm();

cCons.info('welcome to Discord token login!');
cCons.info('you are using: v0.2.1');

const runScriptBtn = document.querySelector('#run');
const tokenInputField = document.querySelector('#token-in');
const userInterface = document.querySelector('#ui-form');

runScriptBtn.addEventListener('click', () => {
    const finalToken = tokenInputField.value.trim();
    if (finalToken === '') {
        cCons.error('insert a token!');
    }
    else {
        browser.tabs.query({ active: true, currentWindow: true }).then(async (tabs) => {
            browser.tabs.sendMessage(tabs[0].id, { command: "RUN_LOGIN", token: finalToken }, (r) => {
                switch (r.code) {
                    case 200:
                        cCons.info(`finished:  ${r.code} ${r.cause} ${r.further}`);
                        break;

                    case 300:
                        cCons.error(`action rejected: ${r.code} ${r.cause} ${r.further}`);
                        break;

                    default:
                        cCons.error(`an unknown error occured! (${r.code} ${r.cause} ${r.further})`);
                        break;
                }
            })
                .then(() => {
                    cCons.info('login script running');
                })
                .catch((err) => {
                    cCons.err(`An unknown error occured: ${err}`);
                    throw new Error(err);
                });
        });
    }
});

tokenInputField.addEventListener('submit', () => {
    cCons.info(tokenInputField.value.trim());
    console.log(tokenInputField.value);
    localStorage.setItem('key', tokenInputField.value.trim())
});