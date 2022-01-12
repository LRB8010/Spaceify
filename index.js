
    let divLoader = document.querySelector(".loader")
    console.log(divLoader)
//'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6'
createLoader()
// fetch("https://api.nasa.gov/planetary/apod?start_date=2021-12-02&end_date=2022-01-01&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6")
// .then(response =>{
//     if(response.status >= 200 && response.status <= 299)
//     {
//         response.json();
//     }else
//     {
//         alert(`Please refresh or comeback later, NASA API down!!! ${response.statusText}`)
//     }
// })
// .then( data =>{
//     console.log(data)
// })

fetch("https://api.nasa.gov/planetary/apod?start_date=2021-12-02&end_date=2022-01-01&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6")
.then(response =>{
    if(response.status >= 200 && response.status <= 299)
    {
        return response.json();
    }
    else
    {
        alert(`Please refresh or comeback later, NASA API down!!! ${response.statusText}`)
    }
})
.then(data =>{
    hideLoader()
    console.log(data)
    data.forEach(elem => {   
        if(elem.media_type == "image"){
        let grid = document.querySelector(".grid");
        let card = document.createElement("div");
        let gridItem = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h3");
        let desc = document.createElement("p");
        let descbutton = document.createElement("button")
        let date = document.createElement("p")
        let likebtn = document.createElement("button")
        let likes = document.createElement("p")
        let icon =  document.createElement("i")
        let br = document.createElement("p")
        desc.innerText = elem.explanation
        title.innerText = elem.title;
        date.innerText = `Date: ${elem.date}`
        descbutton.innerText = "Description"
        br.innerText = "\n"
        likes.innerText = `${Math.floor(Math.random() * 10000)}`
        img.src = elem.hdurl;
        gridItem.className = "gridItem";
        desc.className = "para"
        likes.className = "like"
        card.className = "card";
        likebtn.className = "far fa-heart fa-xs"
        date.className = "date"
        descbutton.className = "descbttn"
        likebtn.id = "likebtn"
        likebtn.dataset.clicked = "false"
        descbutton.addEventListener("click",showDescription)
        likebtn.addEventListener("click",function(event){likeIncrease(event)})
        likebtn.append(icon)
        grid.append(gridItem)
        gridItem.append(card)
        card.append(title,img,date,likebtn,likes,br,descbutton,desc);
        }
    })
})

function showDescription(){
    let active = false
    this.classList.toggle("active");
    var content = this.nextElementSibling
    if(content.style.display === "block")
    {
        content.style.display = "none"
    }else{
        content.style.display = "block"
    }
}


function likeIncrease(event){
    let target = event.target
    let numberLike = target.nextElementSibling
    console.log(target.dataset.clicked)
    if(target.dataset.clicked === "true" ){
        target.dataset.clicked = "false"
        target.className = "far fa-heart fa-xs"
        numberLike.innerText = parseInt(numberLike.innerText) - 1   
    }else{
        target.dataset.clicked = "true"
        target.className = "fas fa-heart fa-xs likeAnimation"    
    numberLike.innerText = parseInt(numberLike.innerText) + 1
    }
}


// function createTags(e){
//     console.log("Working")
//     let p = document.createElement("p")
//     p.innerText = "Hello"
//     e.target.append(p)
// }

function createLoader(){
    let divLoader = document.querySelector(".loader")
    console.log(divLoader)
    let loading = document.createElement("i")
    loading.className = "fas fa-spinner fa-spin fa-5x loading"
    divLoader.append(loading)
}

function hideLoader(){
    console.log("Loaded")
    let divLoader = document.querySelector(".fa-spinner")
    divLoader.style.display = "none"
}