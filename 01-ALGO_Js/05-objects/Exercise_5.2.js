const readlineSync = require('readline-sync');

function askTvSerie() {
  const tvSerie = {};

  tvSerie.name = readlineSync.question('Enter the name of your favorite TV series: ');
  tvSerie.productionYear = readlineSync.question('Enter the production year of the TV series: ');

  tvSerie.castMembers = [];
  let moreCastMembers = true;
  while (moreCastMembers) {
    const castMember = readlineSync.question('Enter a cast member (or press Enter to finish): ');
    if (castMember !== '') {
      tvSerie.castMembers.push(castMember);
    } else {
      moreCastMembers = false;
    }
  }

  return tvSerie;
}

function randomizeCast(tvSerie) {
  const randomizedCast = tvSerie.castMembers.slice(); // Make a copy of the original cast array
  for (let i = randomizedCast.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [randomizedCast[i], randomizedCast[j]] = [randomizedCast[j], randomizedCast[i]];
  }
  return randomizedCast;
}

// Generate TV serie object using user input
const tvSerieObject = askTvSerie();

console.log('\nOriginal Cast:');
console.log(tvSerieObject.castMembers.join(', '));

console.log('\nRandomized Cast:');
const randomizedCast = randomizeCast(tvSerieObject);
console.log(randomizedCast.join(', '));