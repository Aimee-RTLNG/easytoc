$('#import-data').on('click', function(){
    let data;
    let path = $('#imported_data').val()
    // importData(file);
    let file = new FileReader();
    file.onload("GET", path, true );
    file.onreadystatechange = function(){
        data = file.responseText;
        console.log(data);
    }
})

function importData(file){
    if(type=="json"){
        console.log("json");
    }else if(type=="csv"){
        console.log("CSV");
    }

    console.log(file);
}