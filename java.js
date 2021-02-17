/*************************COMEÇO DOS FILMES QUE IRÃO APARECER NA PAGINA INICIAL******************************************************* */
function geraPosters() {
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
        request.open("GET", `https://www.omdbapi.com/?t=${bannerMovies[i]}&plot=full&apikey=ff8d5bd3`);

        request.addEventListener("load", () => {
            let article = document.createElement("article");
            article.setAttribute("class", "card borda-cor-especial card-largura p-0 m-2 col-12 col-md-4");
            article.style.backgroundColor = "#212529";
            document.getElementsByClassName("row justify-content-center")[0].appendChild(article);

            let img = document.createElement("img");
            img.setAttribute("alt", "...");
            img.src = JSON.parse(request.responseText).Poster;
            article.appendChild(img);

            let div2 = document.createElement("div");
            div2.setAttribute("class", "middle");
            article.appendChild(div2);

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

        }, false);

        request.send();
    }

}

geraPosters();


/*************************FIM DOS FILMES QUE IRÃO APARECER NA PAGINA INICIAL************************************************************** */

/**************************COMEÇO DA PESQUISA DE FILMES***************************************************************************** */
let input = document.getElementById("movieSearch");

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

        let divCarrossel = document.createElement("div");
        divCarrossel.setAttribute("id", "carouselExampleCaptions");
        divCarrossel.setAttribute("class", "carousel slide ajuste");
        divCarrossel.setAttribute("data-bs-interva", "3000");
        divCarrossel.setAttribute("data-bs-ride", "carousel");

        document.getElementsByTagName("main")[0].appendChild(divCarrossel);

        let ol = document.createElement("ol");
        ol.setAttribute("class", "carousel-indicators");
        divCarrossel.appendChild(ol);

        let li = document.createElement("li");
        li.setAttribute("data-bs-target", "#carouselExampleCaptions");
        li.setAttribute("data-bs-slide", "0");
        li.setAttribute("class", "active");
        ol.appendChild(li);

        for (let i = 1; i <= 5; i++) {
            let liDinamica = document.createElement("li");
            liDinamica.setAttribute("data-bs-target", "#carouselExampleCaptions");
            liDinamica.setAttribute("data-bs-slide", i);
            ol.appendChild(liDinamica);
        }

        let divImagens = document.createElement("div");
        divImagens.setAttribute("class", "carousel-inner");
        divCarrossel.appendChild(divImagens);

        let div1 = document.createElement("div");
        div1.setAttribute("class", "carousel-item active");
        divImagens.appendChild(div1);

        let img1 = document.createElement("img");
        img1.setAttribute("class", "d-block w-100 imagem-carrossel-zero");
        img1.setAttribute("alt", "...");
        img1.src = "https://images.mubicdn.net/images/film/268/cache-33670-1578600036/image-w1280.jpg?size=1900x600";
        div1.appendChild(img1);

        let div2 = document.createElement("div");
        div2.setAttribute("class", "carousel-item");
        divImagens.appendChild(div2);

        let img2 = document.createElement("img");
        img2.setAttribute("class", "d-block w-100 imagem-carrossel-um");
        img2.setAttribute("alt", "...");
        img2.src = "https://images.mubicdn.net/splash/darjeeling_limited_dark.jpg?size=1900x600";
        div2.appendChild(img2);

        let div3 = document.createElement("div");
        div3.setAttribute("class", "carousel-item");
        divImagens.appendChild(div3);

        let img3 = document.createElement("img");
        img3.setAttribute("class", "d-block w-100 imagem-carrossel-dois");
        img3.setAttribute("alt", "...");
        img3.src = "https://images.mubicdn.net/splash/grand_budapest_hotel_dark.jpg?size=1900x600";
        div3.appendChild(img3);

        let div4 = document.createElement("div");
        div4.setAttribute("class", "carousel-item");
        divImagens.appendChild(div4);

        let img4 = document.createElement("img");
        img4.setAttribute("class", "d-block w-100 imagem-carrossel-tres");
        img4.setAttribute("alt", "...");
        img4.src = "https://images.mubicdn.net/images/film/102/cache-7982-1563177610/image-w1280.jpg?size=1900x600";
        div4.appendChild(img4);

        let div5 = document.createElement("div");
        div5.setAttribute("class", "carousel-item");
        divImagens.appendChild(div5);

        let img5 = document.createElement("img");
        img5.setAttribute("class", "d-block w-100 imagem-carrossel-quatro");
        img5.setAttribute("alt", "...");
        img5.src = "https://images.mubicdn.net/images/film/14708/cache-50923-1445920346/image-w1280.jpg?size=1900x600";
        div5.appendChild(img5);


        let div7 = document.createElement("div");
        div7.setAttribute("class", "carousel-item");
        divImagens.appendChild(div7);

        let img7 = document.createElement("img");
        img7.setAttribute("class", "d-block w-100 imagem-carrossel-cinco");
        img7.setAttribute("alt", "...");
        img7.src = "https://images.mubicdn.net/images/film/1358/cache-8792-1562083863/image-w1280.jpg?size=1900x600";
        div7.appendChild(img7);


        let a1 = document.createElement("a");
        a1.setAttribute("class", "carousel-control-prev");
        a1.setAttribute("href", "#carouselExampleCaptions");
        a1.setAttribute("role", "button");
        a1.setAttribute("data-bs-slide", "prev");
        divCarrossel.appendChild(a1);

        let span1 = document.createElement("span");
        span1.setAttribute("class", "carousel-control-prev-icon");
        span1.setAttribute("aria-hidden", "true");
        a1.appendChild(span1);

        let span2 = document.createElement("span");
        span2.setAttribute("class", "visually-hidden");
        span2.textContent = "Previous";
        a1.appendChild(span2);


        let a2 = document.createElement("a");
        a2.setAttribute("class", "carousel-control-next");
        a2.setAttribute("href", "#carouselExampleCaptions");
        a2.setAttribute("role", "button");
        a2.setAttribute("data-bs-slide", "next");
        divCarrossel.appendChild(a2);

        let span3 = document.createElement("span");
        span3.setAttribute("class", "carousel-control-next-icon");
        span3.setAttribute("aria-hidden", "true");
        a2.appendChild(span3);

        let span4 = document.createElement("span");
        span4.setAttribute("class", "visually-hidden");
        span4.textContent = "Next";
        a2.appendChild(span4);


        document.getElementsByTagName("h2")[0].textContent = "ResiliaFlix assista filmes, séries onde e como quiser!";

        let divMovies = document.createElement("div");
        divMovies.setAttribute("class", "row justify-content-center");
        document.getElementsByTagName("section")[0].appendChild(divMovies);
        geraPosters();




    });

    if (input.value.length >= 3) {
        document.getElementsByTagName("main")[0].innerText = "";
        document.getElementsByTagName("h2")[0].innerText = "";
        document.getElementsByTagName("section")[0].innerText = "";
        let divizinha = document.getElementById("movieResult");
        let request = new XMLHttpRequest();

        request.open("GET", `https://www.omdbapi.com/?s=${input.value.toLowerCase().replace(/\s/g, "+")}&plot=short&apikey=ff8d5bd3`);

        request.addEventListener("load", () => {
            let results = JSON.parse(request.responseText).Search;
            for (let movie in results) {
                if (results[movie].Poster != "N/A") {
                    let img = document.createElement("img");
                    img.src = results[movie].Poster;
                    divizinha.appendChild(img);
                }

            }
            console.log(results);
        }, false);

        request.send();


    }
});

/**************************FIM DA PESQUISA DE FILMES***************************************************************************************************** */




/****************************INICIO DA FUNCAO QUE VAI GERAR TUDO DE NOVO************************************************************************* */
document.getElementById("movieSearch").addEventListener("click", () => {
    console.log(document.getElementById("movieSearch").value);
    if (document.getElementById("movieSearch") == "") {
        document.getElementById("movieResult").innerText = "";

    }

});






/*******************************FIM DA FUNCAO QUE VAI GERAR TUDO DE NOVO***********************************************************************************8 */