const skills = [
    { css: "skill_zzz", skillName: "Бодрость", skillLevel: 10 },
    { css: "skill_rab", skillName: "Работоспособность", skillLevel: 70 },
    { css: "skill_---", skillName: "Меткость", skillLevel: 80 },

];


function addSkills() {
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(skill => {
        const dt = document.createElement('dt');
        dt.textContent = skill.skillName;
        dt.classList.add(skill.css);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = skill.skillLevel + '%';
        div.textContent = skill.skillLevel;
        
        dd.appendChild(div);
        dl.append(dt);
        dl.append(dd);
    });
    document.querySelector('.skills').append(dl);
}

addSkills();
