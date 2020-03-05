
let menu = document.getElementById("full-menu");
if(menu != null) {
   let menu_buttons = menu.getElementsByTagName('button');
}
else {
   let menu_buttons = null;
}
let open_menu = $('.bars_easytoc');
if(open_menu.length > 0) {
   open_menu.on('click', function() {
      $('#menubar-easytoc').toggleClass('open-resp');
      $(this).toggleClass('close');
   })
}
let sous_menu = $('.has-submenu');
if(sous_menu.length > 0) {
   sous_menu.on('click', function() {
      $(this).toggleClass('open-ss-menu');
      $('.open-ss-menu button').addClass('open');
   })
}


function displayMenu( event ){

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
      }
      else {
      }
   }

   let submenu = document.getElementById(submenu_id);

   submenu.classList.toggle('hidden');

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