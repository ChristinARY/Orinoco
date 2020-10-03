console.log("hello!");
const affichePanier = document.getElementsByClassName("panier");
const nbArticle = document.getElementById("nbArticle");
const afficheImage = document.getElementById("element");
const defileGauche = document.getElementById("gauche");
const defileDroite = document.getElementById("droite");
const afficheNom = document.getElementById("nomImage");
const clicImage = document.getElementById("selection");

fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((response) => {
    //console.log(response);
    let v = 0;
    let w = 0;
    let suivant = 0;
    /*defileGauche.addEventListener("click", function () {
      v++;

      let monElement = [];
      for (let u = 0; u < response.length; u++) {
        monElement.push(document.createElement("p"));
        monElement[u] = response[u].name;
        //console.log(monElement[v]);
        afficheNom.innerHTML = monElement[v];
      }
    });*/

    /*defileDroite.addEventListener("click", function () {
      v--;

      let monElement = [];
      for (let u = 0; u < response.length; u++) {
        monElement.push(document.createElement("p"));
        monElement[u] = response[u].name;
        //console.log(monElement[v]);
        afficheNom.innerHTML = monElement[v];
      }
    });*/

    // w++;
    /*let monElement1 = [];
    for (let i = 0; i < response.length; i++) {
      monElement1.push(document.createElement("img"));
      monElement1[i].src = response[i].imageUrl;
      // console.log(monElement1[0]);
      let current = 0;
      afficheImage.appendChild(monElement1[current++ % monElement1.length]);
      //afficheImage.style.width = "50%";
      //afficheImage.style.height = "40px !important";
      //let elementId = response._id;
      //x = localStorage.setItem("elementId", response._id);
    }*/ if (
      localStorage.getItem("listElements")
    ) {
      nbArticle.textContent = JSON.parse(
        localStorage.getItem("listElements")
      ).listeCommande.length;
    }
  });

//localStorage.setItem("monitem", "hello");
localStorage.setItem("monClic", "hello");
//localStorage.setItem("monitem", response[0]._id);
/*afficheImage.addEventListener("click", function () {
  let elementId = response._id;
  localStorage.setItem("elementId");
  console.log(response_id);*/
/* let carrousel = (suiv) => {
      let element = document.createElement("img");
      element.src = response[suiv % response.length];
      document.body.appendChild(element);
    };
    defileDroite.addEventListener("click", () => {
      carrousel(suivant++);
    });*/
