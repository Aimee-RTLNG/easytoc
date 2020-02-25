var menuItems = document.querySelectorAll('.menu-item.has-submenu');
var menuBar = new menubar(document.getElementById('menubar-easytoc'));
menubar.init();

console.log(menuItems);

Array.prototype.forEach.call(menuItems, function(el, i){
    console.log('oj');
    el.addEventListener("click", function(event) {
        this.className = "menu-item has-submenu open";
    });
    el.addEventListener("click", function(event) {
        document.querySelector(".has-submenu.open").className = "menu-item has-submenu";
    });
})

