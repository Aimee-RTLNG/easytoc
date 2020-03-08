
let menu = document.getElementById("full-menu");
if(menu != null) {
   let menu_buttons = menu.getElementsByTagName('button');
}
else {
   let menu_buttons = null;
}

let open_menu = document.querySelector('.bars_easytoc');

if(open_menu) {
   open_menu.addEventListener('click', function() {
      document.getElementById('menubar-easytoc').classList.toggle('open-resp');
      this.classList.toggle('close');
   })
}
let sous_menus = document.querySelectorAll('.has-submenu');

// if(sous_menus) {
//    for (let sous_menu of sous_menus) {
//       sous_menu.addEventListener('click', function(event) {
//          let have_arrows = document.querySelectorAll('.open-ss-menu button');
//          this.classList.toggle('open-ss-menu');
//          for (let have_arrow of have_arrows) {
//             have_arrow.classList.add('open');   
//             have_arrow.classList.remove('closed');   
//          }   
//          // let menus_deroulant = document.querySelectorAll('.menu-item.has-submenu')
//          // for (let menu_deroulant of menus_deroulant) {
//          //    console.log(this.classList);
//          //    if(!menu_deroulant.classList.contains("open-ss-menu ")) {
//          //       this.classList.remove('open');   
//          //       this.classList.add('closed');  
//          //    }
//          // }
//       })
//     }
// }


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