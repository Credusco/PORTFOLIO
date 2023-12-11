// Fonction appelée lorsqu'un fichier est sélectionné
function handleFileSelect(event) {
  event.preventDefault();

  var files = event.dataTransfer.files || event.target.files;

  for (var i = 0; i < files.length; i++) {
    console.log("Nom du fichier : " + files[i].name);
    // Vous pouvez ajouter ici le code pour traiter chaque fichier
  }
}

var zoneChargement = document.getElementById("zone-chargement");

// Gestion de l'événement de glisser-déposer
zoneChargement.addEventListener("dragover", function (event) {
  event.preventDefault();
  zoneChargement.style.border = "2px dashed #333";
});

zoneChargement.addEventListener("dragleave", function (event) {
  event.preventDefault();
  zoneChargement.style.border = "2px dashed #ccc";
});

zoneChargement.addEventListener("drop", function (event) {
  event.preventDefault();
  zoneChargement.style.border = "2px dashed #ccc";
  handleFileSelect(event);
});

// Gestion de l'événement de sélection de fichier
var inputFichier = document.getElementById("input-fichier");
inputFichier.addEventListener("change", handleFileSelect);

const send = document.querySelector(".text-center");
const sent = document.querySelector(".sent-message");
const scro = document.querySelector(".sevices_boxs");
const ser = document.querySelector(".services");
console.log(ser);

// gestion du bouton send message
send.addEventListener("click", () => {
  alert("Your message has been sent. Thank you!");
});

// pour faire defiler les element de service de la droite vers la gauche
window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scro.style.visibility = "visible";
    scro.style.transition = "all 0.5s ease";
  }
});

Window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    ser.style.backgroud = "#0692c9";
  }
});
