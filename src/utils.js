/**
 * 
 * @param {*} technique 
 * @param {*} domaine 
 * @returns 
 */
export const nettoyageTechnique = (technique, domaine) => {
  if (!technique) {
    return "";
  }

  return technique.replace(domaine, "").trim().replace(/^, /, "");
};


/**
 * 
 * @param {*} data 
 * @returns 
 */
export const getTechniques = (data) => {
  const tabTech = [];
  
  for (let i = 0; i < data.length; i++) {
    const oeuvre = data[i];
    const techniquePropre = nettoyageTechnique(oeuvre.technique, oeuvre.domaine);
    
    if (!tabTech.includes(techniquePropre)) {
      tabTech.push(techniquePropre);
    }
  }
  tabTech.sort();
  return tabTech;
};


/**
 * 
 * @param {*} data 
 * @returns 
 */
export const getDomaines = (data) => {
  const domaines = [];

  for (let i = 0; i < data.length; i++) {
    const domaine = data[i].domaine;

    if (!domaines.includes(domaine)) {
      domaines.push(domaine);
    }
  }

  domaines.sort();

  return domaines;
};