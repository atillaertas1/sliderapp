let carModels =
[
    {
        "name" : "1966 Ford Mustang ",
        "img"  : "img/mustang.jpg",
        "link" : "https://www.sahibinden.com/ilan/vasita-klasik-araclar-klasik-otomobiller-1966-uniqe-fastback-1051039137/detay"
    },
    {
        "name" : "1939 LINCOLN-ZEPHYR",
        "img"  : "img/lincoln.jpg",
        "link" : "https://www.sahibinden.com/ilan/vasita-klasik-araclar-klasik-otomobiller-nasyonel-1939-lincoln-zephyr-v12-coupe-emsalsiz-koleksiyonluk-1082462218/detay"
    },
    {
        "name" : "1977 FERRARİ 308 GTS",
        "img"  : "img/ferrari.jpg",
        "link" : "https://www.sahibinden.com/ilan/vasita-klasik-araclar-klasik-otomobiller-tk-motors-1977-ferrari-308-gts-1081921536/detay"
    },
    {
        "name" : "1964 Alfa Romeo Spider",
        "img"  : "img/alfa.jpg",
        "link" : "https://www.sahibinden.com/ilan/vasita-klasik-araclar-klasik-otomobiller-ars-motors-1964-alfa-romeo-spider-1075290306/detay"
    },
    {
        "name" : "1958 İmpala",
        "img"  : "img/impala.jpg",
        "link" : "https://www.sahibinden.com/ilan/vasita-klasik-araclar-klasik-otomobiller-1958-impala-1071879879/detay"
    },

];



let carModelsLenght = carModels.length;
let index = 0;

// const settings = 
// {
//     duration : 5000,
//     random : true
// }

showSlider(index);

//left arrow
document.querySelector(".fa-arrow-left").addEventListener("click",function(){
    index--;
    if(index < 0){
        index = carModelsLenght -1;
    }
    if(index >= carModelsLenght){
        index = 0;
    }
    
    console.log(index);
    showSlider(index);

});

//right arrow
document.querySelector(".fa-arrow-right").addEventListener("click",function(){
    index++;
    if(index < 0){
        index = carModelsLenght -1;
    }
    if(index >= carModelsLenght){
        index = 0;
    }
    
    console.log(index)
    showSlider(index);
});

function showSlider(index)
{
    document.getElementById("img-top").src = carModels[index].img;
    document.getElementById("card-title").textContent = carModels[index].name;
    document.getElementById("card-button").onclick = 
    function()
    {
        window.open(carModels[index].link, "_blank");
    }
}

// function changeImage()
// {
//     let oldIndex;

//     if(settings.random == true)
//     {
//         do
//         {
//             index = Math.floor(Math.random() *carModelsLenght);
//         }
//         while(index == oldIndex)
//         oldIndex = index;
//     }
//     else
//     {
//         showSlider(index);
//         index++
//         console.log(index);
//     }
//     showSlider(index);
// }



// setInterval(changeImage,settings.duration);

