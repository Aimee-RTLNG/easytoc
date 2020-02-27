// Attention ; jquery

let menu = document.getElementById("full-menu");
let menu_buttons = menu.getElementsByTagName('button');

function displayMenu( element ){
   // On récupère les informations
   let submenu_id = element.getAttribute("aria-controls");
   let other_submenus = document.getElementsByClassName('submenu');

   // On ferme tous les menus 
   for ( let i = 0; i < other_submenus.length ; i ++ ){
      other_submenus[i].style.display = "none";
      other_submenus[i].classList.replace('open', 'closed');
   }

   // On affiche le menu ouvert
   let submenu = document.getElementById(submenu_id);
   submenu.classList.remove('closed');
   submenu.classList.add('open');
   submenu.style.display = "block";

}