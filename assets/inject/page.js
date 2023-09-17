console.log('page.js runing');

// container
const container = document.createElement('details');
container.classList.add('dtl-btn');

// inner container
const innerContainer = document.createElement('span')
innerContainer.classList.add('dtl-btn-inner-container')
innerContainer.classList.add('accordion-content')

// icon container
const iconContainer = document.createElement('summary')
iconContainer.classList.add('dtl-icon')
iconContainer.setAttribute('role', 'button');

// icon
const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
icon.setAttribute('width', '32');
icon.setAttribute('height', '24');
icon.setAttribute('viewBox', '0 0 127.14 96.36');
icon.setAttribute('xml:space', 'preserve');
icon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

const group1 = document.createElementNS("http://www.w3.org/2000/svg", "g");
group1.setAttribute('data-name', '1');

const group2 = document.createElementNS("http://www.w3.org/2000/svg", "g");
group2.setAttribute('data-name', 'dtl logo');

const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
path.setAttribute('d', 'M45.640625 0c-9.064126 1.5455186-17.888368 4.2649098-26.25 8.0898438C2.7906416 32.649819-1.7109353 56.600961.5390625 80.210938 10.26043 87.393512 21.143318 92.854443 32.710938 96.359375c2.604682-3.503204 4.90818-7.219071 6.888671-11.109375-3.761659-1.404935-7.391956-3.137984-10.849609-5.179688.909999-.659999 1.800157-1.34 2.660156-2 20.369937 9.579493 43.950376 9.579493 64.320313 0 .869999.71 1.760157 1.390001 2.660156 2-3.464337 2.045012-7.102756 3.781147-10.871094 5.189454 1.978062 3.888504 4.283654 7.601482 6.890625 11.099609 11.577484-3.490869 22.466314-8.949445 32.189454-16.138672 2.64-27.379972-4.51041-51.110412-18.90039-72.1503905C99.345979 4.2459958 90.529026 1.5325765 81.470703 0c-1.239544 2.2158802-2.362438 4.4958093-3.361328 6.8300781-9.648856-1.4539787-19.460519-1.4539787-29.109375 0C48.000587 4.4960496 46.879659 2.2161477 45.640625 0zm26.255859 25.558594c7.895375 0 14.294922 6.373371 14.294922 14.236328 0 7.862934-6.399547 14.236328-14.294922 14.236328-1.440581 0-4.720636-.329993-6.316406-1.654297l-1.99414 1.986328c-1.172735 1.167984-.857606 1.511665-.335938 2.078125.217626.236402.472287.512337.667969.902344 0 0 1.662279 2.317121 0 4.634766-.997413 1.324303-3.790973 3.178419-6.982422 0l-.664063.662109s1.994311 2.317121.332032 4.634766c-.997368 1.324529-3.657184 2.649675-5.984375.332031l-2.326172 2.316406c-1.595793 1.58921-3.546573.662152-4.322266 0L41.976562 67.9375c-1.861761-1.854116-.775737-3.862217 0-4.634766l17.28711-17.216796s-1.66211-2.648978-1.66211-6.291016c0-7.862957 6.399774-14.236328 14.294922-14.236328zm0 9.269531c-2.754253 0-4.986328 2.2239-4.986328 4.966797 0-2.742896 2.232075 4.966797 4.986328 4.966797 2.754027 0 4.988282-2.223901 4.988282-4.966797 0-2.742897-2.234255-4.966797-4.988282-4.966797');
path.style.fill = '#fff';

group2.appendChild(path);
group1.appendChild(group2);
icon.appendChild(group1);

// menu button container
const menuBtnContainer = document.createElement('span')
menuBtnContainer.classList.add('dtl-menu-btn')
const menuBtnIcon = document.createElement('span')
menuBtnIcon.classList.add('material-symbols-outlined')
menuBtnIcon.textContent = 'menu'
menuBtnContainer.appendChild(menuBtnIcon)
menuBtnContainer.setAttribute('role', 'button');

// login button container
const loginBtnContainer = document.createElement('span')
loginBtnContainer.classList.add('dtl-login-btn')
const loginBtnIcon = document.createElement('span')
loginBtnIcon.classList.add('material-symbols-outlined')
loginBtnIcon.textContent = 'passkey'
loginBtnContainer.appendChild(loginBtnIcon)
loginBtnContainer.setAttribute('role', 'button');
loginBtnContainer.id = 'dtl-login-btn'

// add to DOM
iconContainer.appendChild(icon);
container.appendChild(iconContainer)
innerContainer.appendChild(menuBtnContainer)
innerContainer.appendChild(loginBtnContainer)
container.appendChild(innerContainer)
document.body.appendChild(container);

// events
const loginBtn = document.querySelector('#dtl-login-btn');
loginBtn.addEventListener('click', async () => {
    modifyPage.changeAuthbox()
})

// modify page elements

class modify_page {
    changeAuthbox() {
        return new Promise((resolve, reject) => {
            document.querySelectorAll('section').forEach((possibleAuthbox) => {
                const possibleAuthboxClass = possibleAuthbox.className
                if (possibleAuthboxClass.startsWith('authBox')) {
                    possibleAuthbox.style.display = 'flex';
                    possibleAuthbox.style.flexDirection = 'column';
                    possibleAuthbox.style.gap = '.75rem';
                    possibleAuthbox.style.width = 'fit-content';
                    possibleAuthbox.style.margin = '8rem';
                    possibleAuthbox.innerHTML = `
                            <div class="login-ui-container">
                                <span class="login-ui-btn btn-green dtl-btn-square">
                                    <span class="login-ui-btn-title">
                                        Add
                                    </span>
                                    <span class="material-symbols-outlined">
                                        add
                                    </span>
                                </span>
                                <span class="login-ui-btn btn-gray dtl-btn-square">
                                    <span class="login-ui-btn-title">
                                        Sort
                                    </span>
                                    <span class="material-symbols-outlined">
                                        filter_list
                                    </span>
                                </span>
                            </div >
                            <div class="dtl-ao-container">
                                <table class="dtl-ao">
                                    <tr>
                                        <th>Icon</th>
                                        <th>DisplayName</th>
                                        <th>ProfileName</th>
                                        <th>ID</th>
                                        <th>Token</th>
                                        <th>Last Used</th>
                                    </tr>
                                    <tr>
                                        <td><img class="dtl-ao-icon" src="https://cdn.discordapp.com/embed/avatars/0.png"></td>
                                        <td>BlurpleGreenear</td>
                                        <td>blurple_greenie2654</td>
                                        <td>023019839132</td>
                                        <td>0103ads1-sajahj32jsa-fsa77ftsf-23</td>
                                        <td>10/09/2023</td>
                                    </tr>
                                    <tr>
                                        <td><img class="dtl-ao-icon" src="https://cdn.discordapp.com/embed/avatars/2.png"></td>
                                        <td>WumpusLover3000</td>
                                        <td>wumpie_doopsie</td>
                                        <td>01843854355</td>
                                        <td>af90afs1-s2ja438fc-sg23ewssa-fs32oaps0</td>
                                        <td>15/09/2023</td>
                                    </tr>
                                </table>
                            </div>
                        `;
                    return resolve('success');
                }
                return reject('fail');
            })
        })
    }
}

const modifyPage = new modify_page();