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
const NomArticle = document.getElementById("NomArticle");
//const selectionTaille = document.getElementById("selectionTaille");
//const selectionTaille1 = document.getElementById("selectionTaille1");
const optionTaille = document.getElementById("optionTaille");

const qArticle = document.getElementById("qArticle");
const prixArticle = document.getElementById("prixArticle");
const alertInactive = document.getElementById("alertInactive");

if (localStorage.getItem("idElement")) {
  fetch(
    "http://localhost:3000/api/cameras/" + localStorage.getItem("idElement")
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      //selectionTaille.textContent = "ooolll";
      /*for (let u = 0; u < response.lenses.length; u++) {
        let maSelection = document.createElement("option");
        let maSelection1 = document.createElement("option");
        let maSelection2 = document.createElement("option");
        //let maSelection1 = document.createElement("span");
        maSelection.textContent = response.lenses[0];
        maSelection1.textContent = response.lenses[1];
        maSelection2.textContent = response.lenses[u];
        //maSelection1.textContent = response.lenses[2];
        optionTaille.appendChild(maSelection);
        optionTaille1.appendChild(maSelection1);
        optionTaille1.appendChild(maSelection2);
        //document.body.appendChild(maSelection1);
        //selectionTaille.textContent = response.lenses[1];
        //selectionTaille1.textContent = response.lenses[u];
        optionTaille.textContent = response.lenses[u];
      }*/

      //Selection couleur
      let tailleLentille = response.lenses;
      for (let u = 0; u < response.lenses.length; u++) {
        let contain = [];

        for (let v = 0; v < Object.keys(response.lenses[u]).length; v++) {
          contain[v] = document.createElement("option");
          contain[v].textContent = tailleLentille[v];
          //optionTaille.appendChild(document.createElement("br"));
        }
        optionTaille.appendChild(contain[u]);
      }
      NomArticle.textContent = response.name;
      prixArticle.textContent = response.price / 100;
      prixArticle.appendChild(document.createTextNode("€"));
      /*let taillesLentille = [response.lenses];
      for (let taille of taillesLentille) {
        let choixTaille = document.createElement("option");
        choixTaille.textContent = taille;
        optionTaille.appendChild(choixTaille);
        optionTaille.appendChild(document.createElement("br"));
      }*/

      /*let item = [];
      for (let u = 0; u < response.lenses.length; u++) {

        item.push(document.createElement("option"));
        let maSelection = [];
        for (let v = 0; v < Object.keys(response.lenses[u]).length; v++) {
          maSelection.push(
            document.createElement(
              (Object.keys(response.lenses[u])[v] = "option")
            )
          );
          maSelection[v].textContent =
            response.lenses[u][Object.keys(response.lenses[u])[v]];
          item.appendChild = maSelection[v];
          //optionTaille.appendChild(maSelection[u]);
          //document.body.appendChild(maSelection1);
          //selectionTaille.textContent = response.lenses[1];
          //selectionTaille1.textContent = response.lenses[u];
          //optionTaille.textContent = response.lenses[u][v];
        }
        optionTaille.appendChild = response.lenses[u];
      }*/
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

      for (let j = 0; j < Object.keys(response).length - 5; j++) {
        containedItems.push(
          document.createElement(
            Object.keys(response)[j + 5] === "imageUrl" ? "img" : "p"
          )
        );
        if (Object.keys(response)[j + 5] === "imageUrl") {
          containedItems[j].src = response[Object.keys(response)[j + 5]];
        } else {
          containedItems[j].textContent =
            response[Object.keys(response)[j + 5]];
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
