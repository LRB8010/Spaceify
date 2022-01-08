

'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6'
fetch("https://api.nasa.gov/planetary/apod?start_date=2021-12-02&end_date=2022-01-01&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6")
.then(response =>{
    return response.json();
})
.then(pic =>{
    console.log(pic)
    pic.forEach(e => {   
        if(e.media_type == "image"){
        let grid = document.querySelector(".grid");
        let card = document.createElement("div");
        let gridItem = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h3");
        let desc = document.createElement("p");
        let button = document.createElement("button")
        let date = document.createElement("p")
        desc.innerText = e.explanation
        title.innerText = e.title;
        date.innerText = `Date of Capture: ${e.date}`
        img.src = e.hdurl;
        gridItem.className = "gridItem";
        desc.className = "para"
        button.addEventListener("click",showDescription)
        grid.append(gridItem)
        gridItem.append(card)
        card.className = "card";
        card.append(title,img,date,button,desc);
        }
    });
})

function showDescription(){
    let active = false
    this.classList.toggle("active");
    var content = this.nextElementSibling
    console.log(content.style)
    if(content.style.display === "block")
    {
        content.style.display = "none"
    }else{
        content.style.display = "block"
    }
}


