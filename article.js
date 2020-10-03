/*console.log("hello!");
const afficheImage = document.getElementById("element");
fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    let monElement = document.createElement("p");
    monElement.textContent = response[0].name;
    document.body.appendChild(monElement);
    //afficheImage.innerHTML = response[0].name;

    let monElement1 = [];
    for (let i = 0; i < response.length; i++) {
      monElement1.push(document.createElement("img"));
      monElement1[i].src = response[i].imageUrl;
      document.body.appendChild(monElement1[i]);
    }

    afficheImage.src = response.imageUrl;
    document.body.appendChild(afficheImage);
  });





  <label>Selectionner la taille de lentille de l'appareil:
        <select id="Taille-Lentille" name="Taille-Lentille">
              <option value="">Selectionner une Taille de Lentille</option>
              <option value="Taille-1">Taille-1</option>
              <option value="Taille-2">Taille-2</option>
              <option value="Taille-3">Taille-3</option>
        </select>
  </label>



  const element1 = document.getElementById('res-gender');

document.addEventListener('DOMContentLoaded', function() {

document.querySelector('select[name="Taille-Lentille"]').onchange=fonctionChange;},false);

let fonctionChange = (event) => {

if(!event.target.value) {alert('Please select one')}

else {element1.innerHTML= event.target.value}

}



*/

console.log("hello!");
const afficheImage = document.getElementById("imgArticle");
const btnCommander = document.getElementById("monBoutton");
const finaliser = document.getElementById("finaliser");
const affichePanier = document.getElementsByClassName("panier");
const nbArticle = document.getElementById("nbArticle");
const selectionTaille = document.getElementById("selectionTaille");
const selectionTaille1 = document.getElementById("selectionTaille1");
const qArticle = document.getElementById("qArticle");
const alertInactive = document.getElementById("alertInactive");

if (localStorage.getItem("idElement")) {
  fetch(
    "http://localhost:3000/api/cameras/" + localStorage.getItem("idElement")
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      selectionTaille.textContent = "ooolll";
      for (let u = 0; u < response.lenses.length; u++) {
        let maSelection = document.createElement("span");
        let maSelection1 = document.createElement("span");
        maSelection.textContent = response.lenses[1];
        maSelection1.textContent = response.lenses[2];
        document.body.appendChild(maSelection);
        document.body.appendChild(maSelection1);
        selectionTaille.textContent = response.lenses[1];
        selectionTaille1.textContent = response.lenses[u];
      }
      /*
    let monElement1 = [];
    monElement1.push(document.createElement("img"));
    monElement1 = localStorage.getItem("idElement");

    afficheNom.innerHTML = localStorage.getItem("nameSelect");
    afficheImage.appendChild = monElement1;
    localStorage.getItem("selection");
    console.log(localStorage);*/
      //clicImage.textContent = "abcd";
      let containedItems = [];

      for (let j = 0; j < Object.keys(response).length - 1; j++) {
        containedItems.push(
          document.createElement(
            Object.keys(response)[j + 1] === "imageUrl" ? "img" : "p"
          )
        );
        if (Object.keys(response)[j + 1] === "imageUrl") {
          containedItems[j].src = response[Object.keys(response)[j + 1]];
        } else {
          containedItems[j].textContent =
            response[Object.keys(response)[j + 1]];
        }
        containedItems[j].style.width = "100%";
        afficheImage.appendChild(containedItems[j]);
        //afficheImage.style.width = "80%";
        let nb = 0;
        if (localStorage.getItem("listElements")) {
          let nb_ = JSON.parse(localStorage.getItem("listElements"))
            .listeCommande.length;
        }
        let commandes = [];
        if (localStorage.getItem("listElements")) {
          for (
            let i = 0;
            i <
            JSON.parse(localStorage.getItem("listElements")).listeCommande
              .length;
            i++
          ) {
            commandes.push(
              JSON.parse(localStorage.getItem("listElements")).listeCommande[i]
            );
          }
        }
        btnCommander.addEventListener("click", () => {
          //let articlePaniers = [];
          nb++;
          commandes.push(response);
          localStorage.setItem(
            "listElements",
            JSON.stringify({ listeCommande: commandes })
          );
          console.log(commandes);
          //articlePaniers[i] = articlePanier;
          nbArticle.textContent = nb;

          qArticle.textContent = nb;
          console.log(nb);
          alertInactive.style.display = "none";
        });
        finaliser.addEventListener("click", () => {
          if (!localStorage.getItem("listElements")) {
            //verification.textContent = "formulaire Vide ceci est un test";

            //console.log(verification);
            //alertInactive.style.backgroundColor = "red";
            alertInactive.style.display = "block";
          } else {
            location.href = "finaliser.html";
          }
        });
      }
      /*if (localStorage.getItem("listElements")) {
        nbArticle.textContent = JSON.parse(
          localStorage.getItem("listElements")
        ).listeCommande.length;
      }*/
    });
}
