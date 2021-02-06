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
    "pretador",
    "yesterday",
    "a+star+is+born",
    "her",
    "carol"
];

arrMovies.forEach((parameter) => {
    let request = new XMLHttpRequest();
    request.open("GET", `http://www.omdbapi.com/?t=${parameter}&plot=full&apikey=ff8d5bd3`);
    
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
        document.getElementsByTagName("body")[0].appendChild(img);
    
    }, false);
    
    request.send();

});


