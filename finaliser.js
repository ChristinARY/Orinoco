const conteneur = document.createElement("div");
const afficheCommande = document.getElementById("afficheCommande");
afficheCommande.appendChild(conteneur);
const affichePanier = document.getElementsByClassName("panier");
const nbArticle = document.getElementById("nbArticle");
const totalArticle = document.getElementById("totalArticle");
const montantTotal = document.getElementById("montantTotal");
//const verification = document.getElementById("verification");
const alertInactive = document.getElementById("alertInactive");
//alertInactive.style.display = "none";
const videPanier = document.getElementById("monBoutton");
const validerCommande = document.getElementById("validerCommande");
let monElement = [];
let monElement1 = [];
//let elt = "€";
if (localStorage.getItem("listElements")) {
  nbArticle.textContent = JSON.parse(
    localStorage.getItem("listElements")
  ).listeCommande.length;
}
if (localStorage.getItem("listElements")) {
  let somme = 0;
  for (
    let i = 0;
    i < JSON.parse(localStorage.getItem("listElements")).listeCommande.length;
    i++
  ) {
    monElement1.push(document.createElement("span"));
    monElement1[i].textContent = JSON.parse(
      localStorage.getItem("listElements")
    ).listeCommande[i].price;
    monElement1[i].appendChild(document.createTextNode("€"));
    monElement.push(document.createElement("span"));
    monElement[i].textContent = JSON.parse(
      localStorage.getItem("listElements")
    ).listeCommande[i].name;
    somme += JSON.parse(localStorage.getItem("listElements")).listeCommande[i]
      .price;
    console.log(somme);
    console.log(monElement[i]);
    monElement[i].style.padding = "4em";
    conteneur.appendChild(monElement[i]);
    conteneur.appendChild(monElement1[i]);
    conteneur.appendChild(document.createElement("br"));
    //conteneur.appendChild(document.createTextNode("€"));

    //conteneur.innerHTML = "elt€";
    totalArticle.textContent = JSON.parse(
      localStorage.getItem("listElements")
    ).listeCommande.length;
    montantTotal.textContent = somme;
    //afficheCommande.style.display = "flex";

    console.log(localStorage.getItem("listElements").split(" ")[i]);
  }
  videPanier.addEventListener("click", () => {
    localStorage.removeItem("listElements");
    afficheCommande.textContent = "Panier vide";
    nbArticle.textContent = "";
    totalArticle.textContent = "0";
    montantTotal.textContent = "0";
  });
}

validerCommande.addEventListener("mousedown", () => {
  console.log("mon test");
  /*if (
    ((lastName.value = ""),
    (firstName.value = ""),
    (address.value = ""),
    (city.value = ""),
    (email.value = ""))
  ) {
    lastName.placeholder = "11";
    firstName.placeholder = "11";
    address.placeholder = "11";
    city.placeholder = "11";
    email.placeholder = "11";
  }*/
  if (
    !(lastName.value, firstName.value, address.value, city.value, email.value)
  ) {
    //verification.textContent = "formulaire Vide ceci est un test";

    //console.log(verification);
    //alertInactive.style.backgroundColor = "red";
    alertInactive.style.display = "block";
  } else {
    let montableaudeproduits = [];

    for (
      let i = 0;
      i < JSON.parse(localStorage.getItem("listElements")).listeCommande.length;
      i++
    )
      montableaudeproduits.push(
        JSON.parse(localStorage.getItem("listElements")).listeCommande[i]._id
      );
    console.log(montableaudeproduits);
    let achat = JSON.stringify({
      contact: {
        lastName: lastName.value,
        firstName: firstName.value,
        address: address.value,
        city: city.value,
        email: email.value,
      },
      products: montableaudeproduits,
    });
    console.log(achat);
    fetch("http://localhost:3000/api/cameras/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: achat,
    })
      .then((responsePost) => responsePost.json())
      .then((responsePost) => {
        console.log(responsePost);
        localStorage.setItem("recap", JSON.stringify(responsePost));
      });
    console.log("recap");
    localStorage.removeItem("listElements");
    localStorage.removeItem("recap");
    //location.href = "resume.html";
  }
});
