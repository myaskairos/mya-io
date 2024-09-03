
// skills section
let skills = ["JavaScript", "HTML", "CSS", "GitHub", "Jira", "Allyant" ];
let skillsSection = document.getElementById('Skills');
let skillsList = skillsSection.querySelector('ul');
for (let i = 0; i < skills.length; i++){
    let skill = document.createElement('li');
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

// copyright footer 
let today = new Date();
let thisYear = today.getFullYear();
console.log(today);
console.log(thisYear);
let footer = document.querySelector("footer");
let copyright = document.createElement('p');
copyright.innerText = "\u00A9 Mya " + thisYear;
footer.append(copyright);