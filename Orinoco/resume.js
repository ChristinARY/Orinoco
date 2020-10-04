console.log(JSON.parse(localStorage.getItem("recap")));
const afficheRecapNom = document.getElementById("afficheNom");
const afficheRecapPrenom = document.getElementById("affichePrenom");
const afficheRecapAdresse = document.getElementById("afficheAdresse");
const afficheRecapVille = document.getElementById("afficheVille");
const afficheRecapMail = document.getElementById("afficheMail");
const afficheIdCommande = document.getElementById("afficheIdCommande");

afficheRecapPrenom.innerHTML = JSON.parse(
  localStorage.getItem("recap")
).contact.firstName;
afficheRecapNom.innerHTML = JSON.parse(
  localStorage.getItem("recap")
).contact.lastName;
afficheRecapAdresse.innerHTML = JSON.parse(
  localStorage.getItem("recap")
).contact.address;
afficheRecapVille.innerHTML = JSON.parse(
  localStorage.getItem("recap")
).contact.city;
afficheRecapMail.innerHTML = JSON.parse(
  localStorage.getItem("recap")
).contact.email;
afficheIdCommande.innerHTML = JSON.parse(localStorage.getItem("recap")).orderId;
console.log(JSON.parse(localStorage.getItem("recap")).contact.lastName);
console.log(JSON.parse(localStorage.getItem("recap")).contact.firstName);
console.log(JSON.parse(localStorage.getItem("recap")).contact.address);
console.log(JSON.parse(localStorage.getItem("recap")).contact.city);
console.log(JSON.parse(localStorage.getItem("recap")).contact.email);
console.log(JSON.parse(localStorage.getItem("recap")).orderId);
let containedItems = [];
console.log(JSON.parse(localStorage.getItem("recap")).products.length);
localStorage.removeItem("listElements");
localStorage.removeItem("recap");
