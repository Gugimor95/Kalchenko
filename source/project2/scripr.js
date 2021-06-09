let page = document.querySelector('.page');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() 
{
    page.classList.toggle('light-theme');
    page.classList.toggle('dark-theme');
    baton(1);
};
function baton(id)
{
    let bat1 = document.getElementById(id);
    if (bat1.textContent=='ZzzZzzZZzz')
    {
        bat1.textContent = 'День';
    }
    else 
    {
        bat1.textContent = 'ZzzZzzZZzz';
    }
};