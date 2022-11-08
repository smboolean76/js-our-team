const team = [
    {
        role: 'Founder & CEO',
        avatar: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        avatar: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        avatar: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        avatar: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        avatar: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        avatar: 'barbara-ramos-graphic-designer.jpg',
    },
];

// Milestone 1
for(let i = 0; i < team.length; i++) {
    const employee = team[i];
    // console.log(employee.name, employee.role, employee.avatar);
    for(let key in employee) {
        console.log(employee[key]);
    }
}

// Milestone 2
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const teamContainer = document.querySelector('.team');

// Template literal
for(let i = 0; i < team.length; i++) {
    const employee = team[i];

    let listItem = `
    <li class="employee">
        <div class="employee-avatar">
            <img src="img/${employee.avatar}">
        </div>`;
        if( employee.name ) {
            listItem += `<h3 class="employee-name">${employee.name}</h3>`
        }
    listItem += `<p class="employee-role">${employee.role}</p>
    </li>`;

    teamContainer.innerHTML += listItem;
    // teamContainer.append(listItem);
}

// Creazione degli elementi in JS
// for(let i = 0; i < team.length; i++) {
//     const employee = team[i];

//     const listItem = document.createElement("li");
//     listItem.classList.add('employee');

//     const avatar = document.createElement("div");
//     avatar.classList.add('employee-avatar');
//     avatar.innerHTML = employee.avatar;
//     listItem.append(avatar);

//     if( employee.name ) {
//         const name = document.createElement("h3");
//         name.classList.add('employee-name');
//         name.innerHTML = employee.name;
//         listItem.append(name);
//     }

//     const role = document.createElement("p");
//     role.classList.add('employee-role');
//     role.innerHTML = employee.role;
//     listItem.append(role);

//     teamContainer.append(listItem);
// }

// Clonazione di un template html
// for(let i = 0; i < team.length; i++) {
//     const employee = team[i];
//     const listItem = document.getElementById('template-employee').content.cloneNode(true);
//     listItem.querySelector('.employee-avatar').innerHTML = employee.avatar;
//     if( employee.name ) {
//         listItem.querySelector('.employee-name').innerHTML = employee.name;
//     } else {
//         listItem.querySelector('.employee-name').remove();
//     }
//     listItem.querySelector('.employee-role').innerHTML = employee.role;

//     teamContainer.append(listItem);
// }

// Tempalte Engine - Handlebars.js
// for(let i = 0; i < team.length; i++) {
//     const employee = team[i];
//     const source = document.getElementById("template-employee").innerHTML;
//     const template = Handlebars.compile(source);

//     const listItem = template(employee);
//     teamContainer.innerHTML += (listItem);
// }