function generateUniqueNumbers(count, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function generateLotomaniaNumbers() {
    const numbers = new Set();
    while (numbers.size < 50) {
        const randomNumber = Math.floor(Math.random() * 100); // 0 to 99
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function generateSuperSeteNumbers() {
    const numbers = [];
    for (let i = 0; i < 7; i++) {
        numbers.push(Math.floor(Math.random() * 10)); // 0 to 9 for each column
    }
    return numbers;
}

function generateLotecaResults() {
    const results = [];
    const possibleResults = ['1', 'X', '2'];
    for (let i = 0; i < 14; i++) {
        results.push(possibleResults[Math.floor(Math.random() * 3)]);
    }
    return results;
}

function generateUniqueNumbers(count, max) {
    const numbers = new Set();
    while (numbers.size < count) {
        const randomNumber = Math.floor(Math.random() * max) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function generateLotomaniaNumbers() {
    const numbers = new Set();
    while (numbers.size < 50) {
        const randomNumber = Math.floor(Math.random() * 100); // 0 to 99
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function generateSuperSeteNumbers() {
    const numbers = [];
    for (let i = 0; i < 7; i++) {
        numbers.push(Math.floor(Math.random() * 10)); // 0 to 9 for each column
    }
    return numbers;
}

function generateLotecaResults() {
    const results = [];
    const possibleResults = ['1', 'X', '2'];
    for (let i = 0; i < 14; i++) {
        results.push(possibleResults[Math.floor(Math.random() * 3)]);
    }
    return results;
}

function generatePrediction(lotteryType) {
    switch (lotteryType) {
        case 'mega-sena':
            return { name: 'Mega-Sena', result: generateUniqueNumbers(6, 60).join(' - ') };
        case 'lotofacil':
            return { name: 'Lotofácil', result: generateUniqueNumbers(15, 25).join(' - ') };
        case 'quina':
            return { name: 'Quina', result: generateUniqueNumbers(5, 80).join(' - ') };
        case 'milionaria':
            const numbersMil = generateUniqueNumbers(6, 50).join(' - ');
            const trevosMil = generateUniqueNumbers(2, 6);
            const cloverImg = '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAgMTAwIj48cGF0aCBkPSJNNTAgMTBjLTguMyAwLTE1IDYuNy0xNSAxNSAwIDguMyA2LjcgMTUgMTUgMTVzMTUtNi43IDE1LTE1YzAtOC4zLTYuNy0xNS0xNS0xNXpNNTAgNDBjLTguMyAwLTE1IDYuNy0xNSAxNXM2LjcgMTUgMTUgMTVzMTUtNi43IDE1LTE1cy02LjctMTUtMTUtMTV6TTIwIDU1YzAtOC4zIDYuNy0xNSAxNS0xNXMxNSA2LjcgMTUgMTVzLTYuNyAxNS0xNSAxNXMtMTUtNi43LTE1LTE1em02MCAwYzAtOC4zLTYuNy0xNS0xNS0xNXMtMTUgNi43LTE1IDE1czYuNyAxNSAxNSAxNXMxNS02LjcgMTUtMTV6TTUwIDkwYzAtOC4zLTYuNy0xNS0xNS0xNXMxNSA2LjcgMTUgMTVzLTYuNyAxNS0xNSAxNXoiIGZpbGw9ImdyZWVuIi8+PC9zdmc+" alt="Trevo" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 4px;">';
            const trevosHtml = trevosMil.map(trevo => `${cloverImg}${trevo}`).join(' - ');
            return { name: 'Mais Milionária', result: `Números: ${numbersMil} | Trevos: ${trevosHtml}` };
        case 'dupla-sena':
            const set1 = generateUniqueNumbers(6, 50).join(' - ');
            const set2 = generateUniqueNumbers(6, 50).join(' - ');
            return { name: 'Dupla Sena', result: `Sorteio 1: ${set1} | Sorteio 2: ${set2}` };
        case 'lotomania':
            return { name: 'Lotomania', result: generateLotomaniaNumbers().join(' - ') };
        case 'dia-de-sorte':
            const diaNumbers = generateUniqueNumbers(7, 31).join(' - ');
            const month = generateUniqueNumbers(1, 12)[0];
            const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
            return { name: 'Dia de Sorte', result: `Números: ${diaNumbers} | Mês de Sorte: ${months[month - 1]}` };
        case 'super-sete':
            return { name: 'Super Sete', result: `Colunas: ${generateSuperSeteNumbers().join(' - ')}` };
        case 'loteca':
            return { name: 'Loteca', result: `Resultados: ${generateLotecaResults().join(' - ')}` };
        default:
            return { name: 'Erro', result: 'Tipo de loteria desconhecido.' };
    }
}

document.getElementById('predictButton').addEventListener('click', function() {
    const resultDiv = document.getElementById('predictionResult');
    resultDiv.innerHTML = 'Gerando...'; // Use innerHTML to clear previous results

    const lotteryTypes = [
        'mega-sena',
        'lotofacil',
        'quina',
        'milionaria',
        'dupla-sena',
        'lotomania',
        'dia-de-sorte',
        'super-sete',
        'loteca'
    ];

    // Add a small delay to show "Gerando..."
    setTimeout(() => {
        resultDiv.innerHTML = ''; // Clear "Gerando..."

        lotteryTypes.forEach(type => {
            const prediction = generatePrediction(type);
            const lotteryResultDiv = document.createElement('div');
            lotteryResultDiv.classList.add('lottery-result');
            lotteryResultDiv.innerHTML = `<h3>${prediction.name}</h3><p>${prediction.result}</p>`;
            resultDiv.appendChild(lotteryResultDiv);
        });
    }, 100); // 100ms delay
});
