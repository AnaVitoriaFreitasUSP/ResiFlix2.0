/*************************FILMES QUE IRAO APARECER NO CARROSSEL************************************** */
let carrouselMovies = [{
        name: "the+little+prince",
        gender: "Anime/Desenho"
    },

    {
        name: "chicken+run",
        gender: "Anime/Desenho"
    },

    {
        name: "coco",
        gender: "Anime/Desenho"
    },

    {
        name: "arrival",
        gender: "Ficção Científica"
    },

    {
        name: "interstellar",
        gender: "Ficção Científica"
    },

    {
        name: "lucy",
        gender: "Ficção Científica"
    },

    {
        name: "blade+runner",
        gender: "Aventura"
    },

    {
        name: "logan",
        gender: "Ação"
    },

    {
        name: "fantastic+beasts+and+where+to+find+them",
        gender: "Aventura"
    },

    {
        name: "aquaman",
        gender: "Aventura"
    },

    {
        name: "the+old+guard",
        gender: "Ação"
    },

    {
        name: "yesterday",
        gender: "Romance"
    },

    {
        name: "a+star+is+born",
        gender: "Romance"
    },

    {
        name: "her",
        gender: "Romance"
    },

    {
        name: "carol",
        gender: "Romance"
    }

];


for (let i = 0; i < 15; i++) {
    let request = new XMLHttpRequest();
    request.open("GET", `http://www.omdbapi.com/?t=${carrouselMovies[i].name}&plot=full&apikey=ff8d5bd3`);

    request.addEventListener("load", () => {
        let divCarousel = document.createElement("div");
        divCarousel.setAttribute("class", "carousel-item");
        let img = document.createElement("img");
        img.src = JSON.parse(request.responseText).Poster;
        img.setAttribute("class", "d-block w-100 imagem-carrossel");
        img.setAttribute("alt", "...");
        let innerDiv = document.createElement("div");
        innerDiv.setAttribute("class", "carousel-caption d-none d-md-block h-25");
        divCarousel.appendChild(img);
        divCarousel.appendChild(innerDiv);
        let h1 = document.createElement("h1");
        h1.setAttribute("class", "fonte-titulo");
        h1.textContent = carrouselMovies[i].gender;
        innerDiv.appendChild(h1);
        document.getElementsByClassName("carousel-inner")[0].appendChild(divCarousel);


    }, false);

    request.send();
}


/**************************FIM DOS FILMES QUE IRÃO APARECER NO CARROSSEL****************************************************** */


/*************************COMEÇO DOS FILMES QUE IRÃO APARECER NA PAGINA INICIAL******************************************************* */

let bannerMovies = [
    "murder+on+the+orient+express",
    "the+hunger+games",
    "home+alone",
    "the+book+thief",
    "madagascar",
    "inside+out",
    "hidden+figures",
    "2001:+a+space+odyssey",
    "call+me+by+your+name",
    "back+to+the+future",
    "the+breakfast+club",
    "brokeback+mountain"
];

for (let i = 0; i < 12; i++) {
    let request = new XMLHttpRequest();
    request.open("GET", `http://www.omdbapi.com/?t=${bannerMovies[i]}&plot=full&apikey=ff8d5bd3`);

    request.addEventListener("load", () => {
        let article = document.createElement("article");
        article.setAttribute("class", "card borda-cor-especial card-largura p-0 m-4 col-12 col-md-4");
        article.style.backgroundColor = "#212529";
        document.getElementsByClassName("row justify-content-center")[0].appendChild(article);

        let div1 = document.createElement("div");
        div1.setAttribute("class", "container");
        article.appendChild(div1);

        let img = document.createElement("img");
        img.setAttribute("class", "card-img-top card-posicao-imagem");
        img.setAttribute("alt", "...");
        img.src = JSON.parse(request.responseText).Poster;
        div1.appendChild(img);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "middle");
        div1.appendChild(div2);

        let div3 = document.createElement("button");
        div3.setAttribute("class", "text");
        div3.textContent = "Detalhes";
        div2.appendChild(div3);

        div3.addEventListener("click", () => {

            div3.addEventListener("mouseover", () => {
                article.setAttribute("class", "zoom");
                div1.removeChild(img);
                div1.setAttribute("class", "container-flex");
                div1.style.padding = "150px";
                div1.style.backgroundColor = "black";

                let poster = document.createElement("img");
                poster.src = JSON.parse(request.responseText).Poster;
                div1.appendChild(poster);

                let divInfo = document.createElement("div");
                divInfo.setAttribute("id", "divInfo");
                divInfo.style.backgroundColor = "#222523";
                div1.appendChild(divInfo);

                let title = document.createElement("p");
                title.setAttribute("id", "titleStyle");
                title.textContent = JSON.parse(request.responseText).Title;
                divInfo.appendChild(title);

                let runTime = document.createElement("p");
                runTime.textContent = "Run Time: " + JSON.parse(request.responseText).Runtime;
                runTime.style.color = "white";
                divInfo.appendChild(runTime);

                let imdbRating = document.createElement("p");
                imdbRating.textContent = "IMBD: " + JSON.parse(request.responseText).imdbRating;
                imdbRating.style.color = "white";
                divInfo.appendChild(imdbRating);

                let plot = document.createElement("p");
                plot.textContent = "Plot: " + JSON.parse(request.responseText).Plot;
                plot.style.color = "white";
                divInfo.appendChild(plot);


                let buttonHide = document.createElement("button");
                buttonHide.setAttribute("id", "button-hide");
                buttonHide.textContent = "Hide";
                buttonHide.style.color = "white";
                divInfo.appendChild(buttonHide);

            });



        });


        /*let div = document.createElement("div");
        div.setAttribute("class", "card-body");
        div.setAttribute("id", i);
        article.appendChild(div);

        let h5 = document.createElement("h5");
        h5.setAttribute("class", "card-title");
        h5.textContent = JSON.parse(request.responseText).Title;
        div.appendChild(h5);

        let p = document.createElement("p");
        p.setAttribute("class", "card-text");
        p.textContent = JSON.parse(request.responseText).Production;
        div.appendChild(p);

        let a = document.createElement("a");
        a.setAttribute("class", "btn botao-cor-especial");
        a.textContent = "Detalhes";
        div.appendChild(a);

        a.addEventListener("click", () => {
            if(document.getElementById("info" + i)){
                document.getElementById(i).removeChild(document.getElementById("info" + i));
            }
            let div = document.createElement("div");
            div.setAttribute("id", "info" + i);
            document.getElementById(i).appendChild(div);
            let title = document.createElement("p");
            title.textContent = "Title: " + JSON.parse(request.responseText).Title;
            title.style.fontWeight = "bold";
            let runTime = document.createElement("p");
            runTime.textContent = "Run Time: " + JSON.parse(request.responseText).Runtime;
            runTime.style.fontWeight = "bold";
            let imdbRating = document.createElement("p");
            imdbRating.textContent = "IMBD: " + JSON.parse(request.responseText).imdbRating;
            imdbRating.style.fontWeight = "bold";
            let plot = document.createElement("p");
            plot.textContent = "Plot: " + JSON.parse(request.responseText).Plot;
            plot.style.fontWeight = "bold";
            div.appendChild(title);
            div.appendChild(runTime);
            div.appendChild(imdbRating);
            div.appendChild(plot);
        });*/

    }, false);

    request.send();
}


/*************************FIM DOS FILMES QUE IRÃO APARECER NA PAGINA INICIAL************************************************************** */


/**************************COMEÇO DA PESQUISA DE FILMES***************************************************************************** */
let input = document.getElementById("movieSearch");
//let button = document.getElementById("movieButtonSearch");

input.addEventListener("keyup", () => {
    if (document.getElementById("buttonSearch")) {
        document.getElementsByClassName("d-flex")[0].removeChild(document.getElementById("buttonSearch"));
    }
    let button = document.createElement("button");
    button.setAttribute("class", "botao-cor-especial");
    button.setAttribute("id", "buttonSearch");
    button.setAttribute("aria-label", "Close");
    button.textContent = "X";
    document.getElementsByClassName("d-flex")[0].appendChild(button);

    button.addEventListener("click", () => {
        document.getElementById("movieResult").innerText = "";
        input.value = "";
        if (document.getElementById("buttonSearch")) {
            document.getElementsByClassName("d-flex")[0].removeChild(document.getElementById("buttonSearch"));
        }
    });

    if (input.value.length >= 3) {
        let div = document.getElementById("movieResult");
        let request = new XMLHttpRequest();

        request.open("GET", `http://www.omdbapi.com/?s=${input.value.toLowerCase().replace(/\s/g, "+")}&plot=short&apikey=ff8d5bd3`);

        request.addEventListener("load", () => {
            let results = JSON.parse(request.responseText).Search;
            for (let movie in results) {
                if (results[movie].Poster != "N/A") {
                    let img = document.createElement("img");
                    img.src = results[movie].Poster;
                    div.appendChild(img);
                }

            }
            console.log(results);
        }, false);

        request.send();
        div.textContent = "";


    }
});

/*button.addEventListener("click", () => {
    let request = new XMLHttpRequest();

    request.open("GET", `http://www.omdbapi.com/?s=${input.value.toLowerCase().replace(/\s/g, "+")}&plot=short&apikey=ff8d5bd3`);

    request.addEventListener("load", () =>{
        document.getElementById("movieResult").textContent = "";
        if(JSON.parse(request.responseText).Poster != "N/A"){
            let img = document.createElement("img");
            img.src = JSON.parse(request.responseText).Poster;
            document.getElementById("movieResult").appendChild(img);
        }else{
            let p = document.createElement("p");
            p.textContent = "Not found!";
            document.getElementById("movieResult").appendChild(p);
        }

    }, false);

    request.send();
});*/


/**************************FIM DA PESQUISA DE FILMES***************************************************************************************************** */




/****************************INICIO DA FUNCAO QUE VAI GERAR TUDO DE NOVO************************************************************************* */
document.getElementById("movieSearch").addEventListener("click", () => {
    console.log(document.getElementById("movieSearch").value);
    if (document.getElementById("movieSearch") == "") {
        document.getElementById("movieResult").innerText = "";

    }

});






/*******************************FIM DA FUNCAO QUE VAI GERAR TUDO DE NOVO***********************************************************************************8 */