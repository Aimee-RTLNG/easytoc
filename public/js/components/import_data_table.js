(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{5:function(e,t,a){e.exports=a("qajH")},qajH:function(e,t,a){"use strict";a.r(t);var l,n=a("bUC5"),r=a("3bT4"),o=!0;function i(e){($("#generated-table #full-table").empty(),$("#generated-table #table-title").text(e.title),$("#generated-table #full-table").append(r.element_types["type-container"]["insert-caption"]),$("#generated-table #table-caption span").text(e.caption),$("#generated-table").attr("class","theme-"+e.theme),"true"==e.options.header_top?($("#central-header-button").prop("checked",!0),$("#full-table").append(r.element_types["type-container"]["insert-header"]),e.items.thead.forEach((function(e,t){$("#full-table thead").append(r.element_types["type-container"]["insert-row"]),e.forEach((function(e,t){$("#full-table thead tr").last().append(r.element_types["type-unique"]["insert-header-col"]),$("#full-table thead tr th").last().text(e)}))}))):$("#central-header-button").prop("checked",!1),$("#full-table").append("<tbody></tbody>"),e.items.tbody.forEach((function(t){$("#full-table tbody").append(r.element_types["type-container"]["insert-row"]),t.forEach((function(t,a){0==a&&"true"==e.options.header_left?($("#full-table tbody tr").last().append(r.element_types["type-unique"]["insert-header-row"]),$("#full-table tbody tr th").last().text(t),$("#lateral-header-button").prop("checked",!0)):($("#full-table tbody tr").last().append(r.element_types["type-unique"]["insert-cell"]),$("#full-table tbody tr td").last().text(t))}))})),"true"==e.options.footer)&&($("#footer-button").prop("checked",!0),$("#full-table").append(r.element_types["type-container"]["insert-footer"]),$("#full-table tfoot").append(r.element_types["type-container"]["insert-row"]),e.items.tfoot[0].forEach((function(e,t){$("#full-table tfoot tr").last().append(r.element_types["type-unique"]["insert-cell"]),$("#full-table tfoot tr td").last().text(e)})));Object(r.getOldContent)(),$("#full-table tbody tr").each((function(){$(this).text()||$(this).remove()})),$("#full-table tbody tr td, #full-table tbody tr th").each((function(e,t){var a=$(t).parent().find("td, th").last().index(),l=[];$("#full-table tr").each((function(e,t){var n=$("#full-table tr")[e];l[e]=$(n).find("th, td")[a]}));var n=!1;l.forEach((function(e){n=!$(e).text()})),n&&Object(r.removeCol)(l)}));var t=$("#full-table tbody tr").first().find("th, td").length;$("#table-col-nb").val(t);var a=$("#full-table tr").length;$("#table-row-nb").val(a),o?(l="en"==n.lang?"Data imported":"Données récupérées",Object(n.alertMsg)(l,"success")):(l="en"==n.lang?"Error while loading data":"Erreur dans l'importation des données",Object(n.alertMsg)(l,"error")),Object(r.updateContent)(),$("#full-table tr td").last().focus()}$("#import-data").on("click",(function(){if(/^([a-zA-Z0-9\s_\\.\-:])+(.csv)$/.test($("#imported_data").val().toLowerCase())){if("undefined"!=typeof FileReader){var e={type:"",title:"",caption:"",options:"",theme:"",items:{thead:[],tbody:[],tfoot:[]},size:[]};(t=new FileReader).onload=function(t){var a=t.target.result.split("\r\n"),l=[];a.forEach((function(e,t){var a=e.split(";"),n=0;a.forEach((function(e){e||(n+=1)})),n<a.length&&l.push(a)}));for(var n=1;n<l.length;n++){var r=l[n];if(1==n)e.type=r[0],e.title=r[1],e.caption=r[2],e.theme=r[3],e.options={header_top:r[4],header_left:r[5],footer:r[6]},e.size={header_row:r[7]};else if(n>1){"true"==e.options.header_top&&n<=parseInt(e.size.header_row)+1?("thead",e.items.thead.push(r)):n==l.length-1&&"true"==e.options.footer?("tfoot",e.items.tfoot.push(r)):("tbody",e.items.tbody.push(r))}}i(e)},t.readAsText($("#imported_data")[0].files[0])}}else if(/^([a-zA-Z0-9\s_\\.\-:])+(.json)$/.test($("#imported_data").val().toLowerCase())){var t;if("undefined"!=typeof FileReader)(t=new FileReader).onload=function(e){var t=e.target.result;try{i(t=JSON.parse(t)),o=!0}catch(e){o=!1,l="en"==n.lang?"Your file has an error : please try again.":"Votre fichier contient une erreur. Merci de réessayer.",Object(n.alertMsg)(l,"error")}},t.readAsText($("#imported_data")[0].files[0])}else l="en"==n.lang?"Incorrect file format : only JSON and CSV allowed;":"Format de fichier invalide : fichiers JSON et CSV seulement.",Object(n.alertMsg)(l,"error")})),$("#generate-example").on("click",(function(){$.getJSON(baseUrl+"/templates/table_template.json").done((function(e){i(e)})).fail((function(e,t,a){console.log(t),console.log(a),l="en"==n.lang?"Error while loading : the example could not be generated":"Erreur dans le chargement de l'exemple",Object(n.alertMsg)(l,"error")}))}))}},[[5,0,1]]]);
