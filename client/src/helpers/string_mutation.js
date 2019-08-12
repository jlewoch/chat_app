export const capAllFirstLetters = str =>
  str.replace(
    /(\b\w)(\w+)/g,
    (word, grp1, grp2) => grp1.toUpperCase() + grp2.toLowerCase()
  );
