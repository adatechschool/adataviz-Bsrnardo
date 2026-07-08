export const nettoyageTechnique = (technique, domaine) => {
  return technique.replace(domaine, "").trim().replace(/^, /, "");
};
