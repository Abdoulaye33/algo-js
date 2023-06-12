const readlineSync = require('readline-sync');
const fs = require('fs');

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

// Generate TV serie object using user input
const tvSerieObject = askTvSerie();

// Save TV serie object to JSON file
fs.writeFileSync('tvSeries.json', JSON.stringify(tvSerieObject, null, 2));
console.log(JSON.stringify(tvSerieObject, null, 2));

console.log('TV serie object saved to tvSeries.json');