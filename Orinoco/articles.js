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
*/

console.log("hello!");
const affichePanier = document.getElementsByClassName("panier");
const nbArticle = document.getElementById("nbArticle");
const afficheImages = document.getElementById("element");
const afficheImage = document.getElementById("imgArticle");
const afficheNom = document.getElementById("nomImage");
const clicImage = document.getElementById("blocArticles");
fetch("http://localhost:3000/api/cameras")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    //monElement.textContent = response[0].name;
    //document.body.appendChild(monElement);

    // afficheImage.innerHTML = response[0].name;

    /*for (let u = 0; u < response.length; u++) {
      monElement.push(document.createElement("p"));
      monElement[u] = response[u].name;
      console.log(monElement[u]);
      afficheNom.innerHTML = monElement;*/
    let monElement = [];
    let monElement1 = [];
    let monElement2 = [];
    /*for (let i = 0, u = 0; i < response.length, u < response.length; i++, u++) {
      monElement.push(document.createElement("p"));
      monElement[u] = response[u].name;
      console.log(monElement[u]);
      monElement2[i] = response[i]._id;
      monElement1.push(document.createElement("img"));
      monElement1[i].src = response[i].imageUrl;
      afficheNom.textContent = monElement;
      afficheImage.appendChild(monElement1[i]);
      element.addEventListener("click", function () {
        localStorage.setItem("imgSelect", monElement1[i].src, monElement2[i]);
        localStorage.setItem("nameSelect", monElement[i], monElement2[i]);
      });
      localStorage.setItem("monClic", "hello");
      console.log(localStorage);
    }*/

    let item = [];

    for (let i = 0; i < response.length; i++) {
      item.push(document.createElement("div"));
      //item[i].id = "element";
      //item[i].style.display = "flex";
      //item[i].style.width = "50%";

      //item[i].style.fontSize = "2px";
      //item[i].style.flexDirection = "column";
      item[i].addEventListener("click", () => {
        localStorage.setItem("idElement", response[i]._id);
        location.href = "article.html";
        console.log(idElement);
      });

      let containedItems = [];

      for (let j = 0; j < Object.keys(response[i]).length; j++) {
        containedItems.push(
          document.createElement(
            Object.keys(response[i])[j] === "imageUrl" ? "img" : "p"
          )
        );

        if (Object.keys(response[i])[j] === "imageUrl")
          containedItems[j].src = response[i][Object.keys(response[i])[j]];
        else
          containedItems[j].textContent =
            response[i][Object.keys(response[i])[j]];
        item[i].appendChild(containedItems[j]);
        containedItems[j].style.width = "100%";
      }

      afficheImage.appendChild(item[i]);
    }
    if (localStorage.getItem("listElements")) {
      nbArticle.textContent = JSON.parse(
        localStorage.getItem("listElements")
      ).listeCommande.length;
    }

    /*let item = [];

    for (let i = 0, u = 0; i < response.length, u < response.length; i++, u++) {
      item.push(document.createElement("img"));
      item[i].src = response[i].imageUrl;

      item[i].style.width = "100%";
      afficheImage.appendChild(item[i]);
      let item1 = [];
      for (let j = 0; j < Object.keys(response[i]).length; j++) {
        item1.push(document.createElement(Object.keys(response[i])[j] === "p"));
        item1[j] = response[j];
      }
      afficheNom.textContent = item1;
    }*/

    /*if (localStorage.getItem("listElements")) {
      nbArticle.textContent = JSON.parse(
        localStorage.getItem("listElements")
      ).listeCommande.length;
    }*/
  });
