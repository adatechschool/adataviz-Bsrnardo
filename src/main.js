import { nettoyageTechnique, getTechniques, getDomaines } from "./utils.js";

const cards = document.querySelector(".cards");
const filtreDomaine = document.querySelector("#filtre-domaine");
const filtreTechnique = document.querySelector("#filtre-technique");

// Je dois créer un objet/array pour mettre les donées
let toutesLesOeuvres = [];

const remplirSelect = (select, valeurs) => {
  valeurs.forEach((valeur) => {
    const option = document.createElement("option");

    option.value = valeur;

    const texte =
      valeur.length > 40 ? valeur.slice(0, 40) + "..." : valeur;

    option.textContent = texte;

    select.appendChild(option);
  });
};

const initialiserPage = () => {
  const domaines = getDomaines(toutesLesOeuvres);
  const techniques = getTechniques(toutesLesOeuvres);

  remplirSelect(filtreDomaine, domaines);
  remplirSelect(filtreTechnique, techniques);

  afficherOeuvres(toutesLesOeuvres);
};

const recuperationDonnees = async () => {
  try {
    const response = await fetch(
      "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_inventaire-collections-musee-arts-nantes/records?limit=20",
    );
    const data = await response.json();
    console.log("L'ARRAY DES OEUVRES:", data.results);
    toutesLesOeuvres = data.results;
    initialiserPage();
  } catch (erreur) {
    console.error(erreur.message);
  }
};
recuperationDonnees();

const afficherOeuvres = (oeuvres) => {
  cards.innerHTML = ""; // Pour nettoyer chaque fois qu'on filtre
  oeuvres.forEach((oeuvre) => {
    const technique = nettoyageTechnique(oeuvre.technique, oeuvre.domaine);
    const card = `
      <div class="card">
        <h3>${oeuvre.titre}</h3>
        <p>${oeuvre.auteur}</p>
        <p>${oeuvre.date_creation}</p>
        <p>${oeuvre.domaine}</p>
        <p>${technique}</p>
      </div>
    `;
    cards.insertAdjacentHTML("beforeend", card);
  });
};
