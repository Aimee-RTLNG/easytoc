(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{4:function(e,t,n){e.exports=n("kVxG")},kVxG:function(e,t,n){"use strict";n.r(t);var l,a,i,r,o=n("bUC5"),s=n("4mLJ"),d=!0,c=0;function p(e){$("#generated-form").attr("class","theme-"+e.style),$("#generated-form").attr("action",e.url),$("#generated-form").attr("method",e.options.method),$("#form-title").text(e.title),e.options.reset&&!$("#reset-button").prop("checked")&&$("#reset-button").click(),$("#full-form .element-container").remove(),$(".side-tool").hide(),$("#actions-interface").addClass("d-none");var t=e.items;if(Object.keys(t).forEach((function(e){var n=t[e].type;if(n="insert-"+(n=n.replace(/-/g,"_")),s.element_types["type-layout"][n]){if(Object(s.addElement)("type-layout",n),t[e].content&&($(".content-editable-selected .layout-text").text(t[e].content),$(".content-editable-selected a").attr("href",t[e].url)),t[e].items)for(var l=t[e].items,o=0;o<l.length;o++)if(l[o]){$(".content-editable-selected ul, .content-editable-selected ol").html();$(".content-editable-selected ul, .content-editable-selected ol").append("<li>"+l[o]+"</li>")}}else if(s.element_types["type-question"][n]){if(Object(s.addElement)("type-question",n),t[e].content){if($(".content-editable-selected .label-text").text(t[e].content),$(".content-editable-selected input, .content-editable-selected textarea").attr("placeholder",t[e].placeholder),$(".content-editable-selected select option").first().text(t[e].placeholder),$(".content-editable-selected input, .content-editable-selected textarea, .content-editable-selected select").attr("name",t[e].name),$(".content-editable-selected input, .content-editable-selected textarea").attr("maxlength",t[e].maxlength),t[e].options){if(-1!=t[e].options.indexOf("required")&&"insert-one_answer"!=n&&"insert-many_answer"!=n){$(".content-editable-selected input, .content-editable-selected textarea, .content-editable-selected select").attr("required","required");var p=s.element_types["type-special"]["make-required"];$(p).insertAfter($(".content-editable-selected").find(".label-text")),$(".content-editable-selected").addClass("field-required"),c+=1}-1!=t[e].options.indexOf("multiple-choice")&&$(".content-editable-selected select").attr("multiple","multiple")}t[e].answertype&&$(".content-editable-selected input").attr("type",t[e].answertype),$(".content-editable-selected option").last().remove(),"insert-binary_answer"!=n?$(".content-editable-selected fieldset label").last().remove():t[e].items[0]&&($(".content-editable-selected fieldset .label-option-text").text(t[e].items[0].name),$(".content-editable-selected fieldset input").attr("name",t[e].items[0].value))}else d=!1;if(t[e].items&&"insert-binary_answer"!=n){var m=t[e].items;for(o=0;o<m.length;o++)m[o].name&&(Object(s.addOption)(n),$(".content-editable-selected .label-option-text").last().text(m[o].name),$(".content-editable-selected option").last().text(m[o].name),$(".content-editable-selected input, .content-editable-selected option").last().attr("value",m[o].value),$(".content-editable-selected input").attr("name",t[e].name),a=$(".content-editable-selected").last(),i=a.prev(),r=a.next(),Object(s.refreshMoveButtons)(i,r,!0))}}else d=!1})),c>0&&0==$(".indicator-required").length()){var n=s.element_types["type-special"]["indicator-required"];$(n).insertAfter($("#form-title"))}Object(s.getOldContent)(),d?(l="en"==o.lang?"Data imported":"Données récupérées",Object(o.alertMsg)(l,"success")):(l="en"==o.lang?"Error while loading data":"Erreur dans l'importation des données",Object(o.alertMsg)(l,"error")),$(".content-editable-selected").last()&&$(".content-editable-selected").last().click()}$("#import-data").on("click",(function(){if(/^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/.test($("#imported_data").val().toLowerCase())){if("undefined"!=typeof FileReader){var e={type:"",title:"",url:"",options:"",style:"",items:[]};(t=new FileReader).onload=function(t){for(var n=t.target.result.split("\r\n"),l=1;l<n.length-1;l++){var a=n[l].split(";");if(1==l){e.type=a[0],e.title=a[1],e.url=a[3];var i=a[4].split(",");e.options={method:i[0],reset:i[1]},e.style=a[5]}else if(l>1){var r=[];if(!a[9]||"unordered-list"!=a[0]&&"ordered-list"!=a[0]){if(a[9])for(s=9;s<a.length;s+=2){var o={value:a[s+1],name:a[s]};r.push(o)}}else for(var s=9;s<a.length;s+=1){var d=a[s];r.push(d)}e.items.push({type:a[0],content:a[1],name:a[2],url:a[3],options:a[4].split(","),style:a[5].split(","),placeholder:a[6],maxlength:a[7],answertype:a[8],items:r})}}p(e)},t.readAsText($("#imported_data")[0].files[0])}}else if(/^([a-zA-Z0-9\s_\\.\-:])+(.json)$/.test($("#imported_data").val().toLowerCase())){var t;if("undefined"!=typeof FileReader)(t=new FileReader).onload=function(e){var t=e.target.result;try{p(t=JSON.parse(t)),d=!0}catch(e){d=!1,l="en"==o.lang?"Your file has an error : please try again.":"Votre fichier contient une erreur. Merci de réessayer.",Object(o.alertMsg)(l,"error")}},t.readAsText($("#imported_data")[0].files[0])}else l="en"==o.lang?"Incorrect file format : only JSON and CSV allowed;":"Format de fichier invalide : fichiers JSON et CSV seulement.",Object(o.alertMsg)(l,"error")})),$("#generate-example").on("click",(function(){$.getJSON(baseUrl+"/templates/form_template.json").done((function(e){p(e)})).fail((function(e,t,n){console.log(t),console.log(n),l="en"==o.lang?"Error while loading : the example could not be generated":"Erreur dans le chargement de l'exemple",Object(o.alertMsg)(l,"error")}))}))}},[[4,0,1]]]);
