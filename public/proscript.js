const urlParams = new URLSearchParams(window.location.search);
const userId = parseInt(urlParams.get('id'));

const user = users.find(u => u.id === userId);

const pro_card = document.querySelector("#profile-card");
const main = document.querySelector(".main");
const nm = document.querySelector(".name");
const det = document.querySelector(".detail");



pro_card.innerHTML = `
    <img src="${user.pic}" class="bg-img" alt="${user.name}">
    <div class="blur" style="background-image: url(${user.pic})"></div>
    <div class="content" style="opacity: 1; transform: translateY(0);">
        <h1>${user.name}</h1>
        <p>${user.bio}</p>
        <a href="/" style="margin-top: 20px; display: inline-block; color: white;">← Back</a>
    </div>
`;

nm.innerHTML = `${user.name}`;
det.innerHTML = `${user.detail}`;

