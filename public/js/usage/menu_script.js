// Attention ; jquery

let menu = document.getElementById("full-menu");
let menu_buttons = menu.getElementsByTagName('button');

function displayMenu( event ){

   console.log(event);

   let element = event.target;
   if( element.tagName == "SPAN" ){
      element = element.parentNode;
   }

   // On récupère les informations
   let submenu_id = element.getAttribute("aria-controls");
   let other_submenus = document.getElementsByClassName('submenu');

   // On ferme tous les menus 
   for ( let i = 0; i < other_submenus.length ; i ++ ){
      let submenu = other_submenus[i];
      let bouton_menu = submenu.previousElementSibling;
      if( bouton_menu.classList.contains('open') ){
         bouton_menu.classList.remove('open');
         bouton_menu.classList.add('closed');
         submenu.classList.toggle('hidden');
      }
   }

   let submenu = document.getElementById(submenu_id);

   console.log(submenu.classList);
   submenu.classList.toggle('hidden');
   console.log(submenu.classList);

   if( submenu.classList.contains('hidden') ){
      element.classList.remove('open');
      element.classList.add('closed');
      element.setAttribute( 'aria-expanded', false );
   } else {
      element.classList.add('open');
      element.classList.remove('closed');
      element.setAttribute( 'aria-expanded', true );
   }

}