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
    "Sci-Fi/",
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
                let p = document.createElement("p");
                p.textContent = JSON.parse(request.responseText).Plot;
                p.style.fontWeight = "bold";
                document.getElementsByTagName("body")[0].appendChild(p);
            });
            img.src = JSON.parse(request.responseText).Poster;
            document.getElementById("p" + i).appendChild(gender);
            document.getElementById(i).appendChild(img);
            
        }, false);
        
        request.send();
        
    }
    
    k++;
};


