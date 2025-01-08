const menu = () => {
    const menu = document.querySelector('menu');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const body = document.querySelector('body');

    const toggleMenu = function  () {
        body.addEventListener('click', (e) => {
            if (e.target.closest('.menu') && !menu.classList.contains('active-menu')) {
                menu.classList.add('active-menu');  
            };
                menuItems.forEach((item) => {
                    if (item === e.target.closest('a')) {
                        menu.classList.remove('active-menu');
                }
            });
    
            if (e.target.classList.contains('close-btn') || !e.target.closest('.active-menu') && !e.target.closest('.menu')) {
                menu.classList.remove('active-menu');               
            }
        }) 
    }
    
    toggleMenu();
}

export default menu;



// if (e.target.classList.contains('close-btn') || !e.target.closest('.active-menu') && !e.target.closest('.menu')) {
//     menu.classList.remove('active-menu');
//     }