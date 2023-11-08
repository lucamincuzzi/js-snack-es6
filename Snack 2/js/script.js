const footballTeams = [
  {
    nome: "Roma",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Milan",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Inter",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Fiorentina",
    puntiFatti: 0,
    falliSubiti: 0,
  },
  {
    nome: "Juventus",
    puntiFatti: 0,
    falliSubiti: 0,
  },
];

insertRndNumbers(footballTeams);

console.log(footballTeams);

console.log("Nuovo array ottenuto dalla destrutturazione degli oggetti del primo", objectsValuesToArray(footballTeams));

/***FUNZIONI***/

//Funzione che inserisce i valori ottenuti dalle altre funzioni negli oggetti dell'array
//@param {array}
//@return {none}
function insertRndNumbers(array) {
  array.forEach((curTeam) => {
    curTeam.puntiFatti = getRndPoints();
    curTeam.falliSubiti = getRndFouls();
  });
}

//Funzione che dato un array ne destruttura gli oggetti e inserisce i valori delle chiavi in un nuovo array
//@param {array} origArray
//@return {array} newTeamsArray
function objectsValuesToArray(origArray) {
    const newTeamsArray = [];
    origArray.forEach((team) => {
      const { nome, falliSubiti } = team;
      newTeamsArray.push(nome, falliSubiti);
    });
    return newTeamsArray;
  }

//Funzione che genera un numero casuale di punti fatti
//@param {none}
//@return {number}
function getRndPoints() {
  const rndNumber = Math.floor(Math.random() * 90 + 1);
  return rndNumber;
}

//Funzione che genera un numero casuale di falli subiti
//@param {none}
//@return {number} rndNumber
function getRndFouls() {
  const rndNumber = Math.floor(Math.random() * 3 + 1);
  return rndNumber;
}
