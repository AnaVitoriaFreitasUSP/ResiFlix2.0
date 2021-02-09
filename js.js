let arrMovies = [
    "spirited+away",
    "the+little+prince",
    "chicken+run",
    "coco",
    "arrival",
    "interstellar",
    "lucy",
    "blade+runner",
    "logan",
    "fantastic+beasts+and+where+to+find+them",
    "aquaman",
    "the+old+guard",
    "yesterday",
    "a+star+is+born",
    "her",
    "carol"
];

let arrGender = [
    "Anime/Desenho",
    "Sci-Fi",
    "Aventura",
    "Romance"
];

let k = 0;

for(let i = 0; i < arrMovies.length; i += 4){
    let gender = document.createElement("p");
    gender.textContent = arrGender[k];
    gender.style.fontWeight = "bold";
    gender.style.textAlign = "center";
    for(let j = i; j < i + 4; j++){
        let request = new XMLHttpRequest();
        request.open("GET", `http://www.omdbapi.com/?t=${arrMovies[j]}&plot=full&apikey=ff8d5bd3`);
        
        request.addEventListener("load", ()=>{
            console.log(JSON.parse(request.responseText));
            let img = document.createElement("img");
            img.addEventListener("click", () =>{
                if(document.getElementById("movieInfo")){
                    document.getElementsByTagName("body")[0].removeChild(document.getElementById("movieInfo"));
                }
                let div = document.createElement("div");
                div.setAttribute("id", "movieInfo");
                document.getElementsByTagName("body")[0].appendChild(div);

                let title = document.createElement("p");
                title.textContent = "Title: " + JSON.parse(request.responseText).Title;
                title.style.fontWeight = "bold";
                let runTime = document.createElement("p");
                runTime.textContent = "Run Time: " + JSON.parse(request.responseText).Runtime;
                runTime.style.fontWeight = "bold";
                let imdbRating = document.createElement("p");
                imdbRating.textContent = "IMBD: " + JSON.parse(request.responseText).imdbRating;
                let plot = document.createElement("p");
                plot.textContent = "Plot: " + JSON.parse(request.responseText).Plot;
                plot.style.fontWeight = "bold";

                div.appendChild(title);
                div.appendChild(runTime);
                div.appendChild(imdbRating);
                div.appendChild(plot);
            });
            img.src = JSON.parse(request.responseText).Poster;
            document.getElementById("p" + i).appendChild(gender);
            document.getElementById(i).appendChild(img);
            
        }, false);
        
        request.send();
        
    }
    
    k++;
};