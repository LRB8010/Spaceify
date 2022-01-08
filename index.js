

'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6'
fetch("https://api.nasa.gov/planetary/apod?start_date=2021-12-01&end_date=2022-01-01&api_key=98Jn5EfwNiD6OHjI3IbxZYofdV1mTsqzYf4BySV6")
.then(response =>{
    return response.json();
})
.then(pic =>{
    console.log(pic)
    pic.forEach(e => {   
        if(e.media_type == "image"){
        let outerdiv = document.querySelector(".column")
        let div = document.createElement("div")
        let img = document.createElement("img")
        let title = document.createElement("h3")
        title.innerText = e.title
        img.src = e.hdurl
        div.className = "card"
        div.append(title,img)
        outerdiv.append(div)
        }
    });
})