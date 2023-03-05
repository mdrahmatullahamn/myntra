window.onload = function () {
    // alert("warning")
    var vewier = JSON.parse(localStorage.getItem("product"));
    var atdataLS = document.getElementById("some");


    
    var array = []
    for (var i = 0; i < vewier.length; i++) {
        array += `<div><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`
        // array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1> <p>${vewier[i].price}</p></div>`


    }
atdataLS.innerHTML=array
}
    
