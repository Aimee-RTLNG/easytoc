
$(".btn-seepassword__icon").on('click', function(){
    var password_input = $(this).parent().find('input')[0];
    var vision_button_icon = $(this).find('i')[0];
    if (password_input.type === "password") {
        password_input.type = "text";
        vision_button_icon.className = "far fa-eye-slash";
      } else {
        password_input.type = "password";
        vision_button_icon.className = "far fa-eye";
      }
})

$('input[type="password"').on('keyup', function(event){
  // If "caps lock" is pressed, display the warning text
  var text = $(this).parent().parent().find("span.warning-block")[0];
  if (event.originalEvent.getModifierState("CapsLock")) {
    text.style.display = "block";
  } else {
    text.style.display = "none"
  }
}); 

$('input[type="password"').on('focusout', function(){
  // If "caps lock" is pressed, display the warning text
  var text = $(this).parent().parent().find("span.warning-block")[0];
  text.style.display = "none";
}); 