let element = document.querySelectorAll('span label');
let options = document.querySelectorAll("input");

function marcar(cod){
    element[cod-1].click();
};

//CUOTAS

let perfil1 = parseInt("${qo://QO_v4oCqfrfRFBGx8o/QuotaCount}");
let perfil2 = parseInt("${qo://QO_muifmT03VrmmEPu/QuotaCount}");




console.log(perfil1, "p1")



//SELECCION DE PERFIL SEGUN CUOTAS

if (perfil1 <= perfil2) {
        marcar(1);
    } else {
        marcar(2);
    }



let link = '${e://Field/link}';
if(link=='LIVE'){
    document.querySelector('#NextButton').click();
}