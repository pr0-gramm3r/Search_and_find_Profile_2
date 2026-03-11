// 1. Get the ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const userId = parseInt(urlParams.get('id'));

// 2. Find the user in the 'users' array (which is now available globally)
const user = users.find(u => u.id === userId);

// 3. Update the UI
if (user) {
    const container = document.querySelector("#profile-card");
    
    // Use the same structure as your main card but centered/larger
    container.innerHTML = `
        <img src="${user.pic}" class="bg-img" alt="${user.name}">
        <div class="blur" style="background-image: url(${user.pic})"></div>
        <div class="content" style="opacity: 1; transform: translateY(0);">
            <h1>${user.name}</h1>
            <p>${user.bio}</p>
            <a href="/" style="margin-top: 20px; display: inline-block; color: white;">← Back</a>
        </div>
    `;
} else {
    document.body.innerHTML = "<h1>User Not Found</h1>";
}