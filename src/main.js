
const cards = document.querySelector(".cards");

const recuperationDonnees = async () => {
  try {
    const response = await fetch(
      "https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_inventaire-collections-musee-arts-nantes/records?limit=20");
    const data = await response.json();
    data.results.forEach((oeuvres) => {
      console.log(oeuvres);
      const card = `
    <div class="card">
      <h3>${oeuvres.titre}</h3>
      <p>${oeuvres.auteur}</p>
      <p>${oeuvres.date_creation}</p>
      <p>${oeuvres.domaine}</p>
      <p>${oeuvres.technique}</p>
    </div>
  `;
      cards.insertAdjacentHTML("beforeend", card);
    });
  } catch (erreur) {
    console.error(erreur.message);
  }
};



recuperationDonnees();

// fetch("https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_inventaire-collections-musee-arts-nantes/records?limit=20")
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data);
//     data.results.forEach((oeuvre) => {
//       console.log(oeuvre)
//       insertCard(oeuvre);
//     });
//   })

// const list = document.querySelector(".list");

// const insertCard = (oeuvre) => {
//   const card = `
//     <div class="card">
//       <h3>${oeuvre.titre}</h3>
//       <p>${oeuvre.auteur}</p>
//       <p>${oeuvre.date_creation}</p>
//       <p>${oeuvre.domaine}</p>
//       <p>${oeuvre.technique}</p>
//     </div>
//   `;
//   list.insertAdjacentHTML("beforeend", card);
// };