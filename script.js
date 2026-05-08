const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes'];

const predictions = [
  'vai encontrar dinheiro no bolso da calça',
  'receberá uma mensagem misteriosa',
  'terá uma ideia brilhante no banho',
  'vai tropeçar em algo invisível',
  'vai ganhar um elogio inesperado',
  'vai perder o fone de ouvido e achar no lugar mais óbvio',
  'vai finalmente terminar aquela série que estava atrasado',
];

const advice = [
  'Evite comer pizza às 3 da manhã.',
  'O universo recomenda tirar uma soneca.',
  'Beba água. Sempre beba água.',
  'Confie no processo... ou não.',
];

const getRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

const generateMessage = () => {
  const sign    = getRandom(signs);
  const predict = getRandom(predictions);
  const tip     = getRandom(advice);

  console.log(`\n🔮 Horóscopo do dia para ${sign}:`);
  console.log(`Hoje você ${predict}.`);
  console.log(`Conselho cósmico: ${tip}\n`);
};

generateMessage();