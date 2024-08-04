const cards = [];

for (let suit of ["Heart", "Club", "Diamond", "Spades"]) {
  for (let i = 1; i <= 13; i++) {
    cards.push({ suit, i });
  }
}

console.log(cards);

const nextCards = cards.filter((v) => v.i === 2);

console.log(nextCards);
