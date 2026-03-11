
function showUsers(arr) {
    const mainContainer = document.querySelector(".main");
    
    arr.forEach(function(user) {
        // 1. Create the Anchor Link (The Wrapper)
        const profileLink = document.createElement('a');
        // This redirects to profile.html and sends the ID as a parameter
        profileLink.href = `/profile?id=${user.id}`;
        profileLink.classList.add('card-link');
        profileLink.style.textDecoration = 'none'; // Keep it clean

        // 2. Create the main card container
        const card = document.createElement('div');
        card.classList.add('card');

        // 3. Create the background image
        const bgImg = document.createElement('img');
        bgImg.classList.add('bg-img');
        bgImg.src = user.pic;
        bgImg.alt = user.name;

        // 4. Create the blur overlay
        const blurDiv = document.createElement('div');
        blurDiv.style.backgroundImage = `url(${user.pic})`;
        blurDiv.classList.add('blur');

        // 5. Create the content wrapper
        const contentDiv = document.createElement('div');
        contentDiv.classList.add('content');

        // 6. Create the heading and paragraph
        const heading = document.createElement('h2');
        heading.textContent = user.name;

        const paragraph = document.createElement('p');
        paragraph.textContent = user.bio;

        // 7. Assemble the elements
        contentDiv.appendChild(heading);
        contentDiv.appendChild(paragraph);

        card.appendChild(bgImg);
        card.appendChild(blurDiv);
        card.appendChild(contentDiv);

        // 8. Nest the card inside the link, then the link into the main container
        profileLink.appendChild(card);
        mainContainer.appendChild(profileLink);
    });
}

showUsers(users);

let inp = document.querySelector("input");

inp.addEventListener("input", function() {
    let newUsers = users.filter((user) => {
        return user.name.toLowerCase().startsWith(inp.value.toLowerCase()); 
    });

    document.querySelector(".main").innerHTML = "";
    let h = document.querySelector("h1");

    if (newUsers.length === 0) {
        h.textContent = "!!User Not Found";
    } else {
        h.textContent = ""; 
        showUsers(newUsers); 
    }
});

