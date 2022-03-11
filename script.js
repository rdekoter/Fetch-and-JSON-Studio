function astronautDataToHTML(astronautDataJSON) {
    return `
<div class="astronaut">
    <div class="bio">
        <h3>${astronautDataJSON.firstName} ${astronautDataJSON.lastName}</h3>
        <ul>
            <li>Hours in space: ${astronautDataJSON.hoursInSpace}</li>
            <li>Active: ${astronautDataJSON.active}</li>
            <li>Skills: ${astronautDataJSON.skills.join(', ')}</li>
        </ul>
    </div>
    <img class="avatar" src="${astronautDataJSON.picture}">
</div>`
}

window.addEventListener('load', () => {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(response => {
        response.json().then(json => {
            const container = document.getElementById('container');
            for (const astronaut of json) {
                container.innerHTML += astronautDataToHTML(astronaut);
            }
        });
    });
});