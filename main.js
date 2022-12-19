/* 1) Escreva uma função que receba 2 valores inteiros e imprima o resultado da
divisão do primeiro pelo segundo. Valide dentro da função se o segundo valor
informado for ZERO, deve ser impressa uma mensagem de VALOR INVÁLIDO e
lido um novo valor. Realize os testes com os valores 348 e 2, 45 e 0 , 1025 e 3. */

function primeiraQuestao () {
    let valorUm = document.getElementById('valorUm').value
    let valorDois = document.getElementById('valorDois').value
    let primeiraResult = document.getElementById('primeiraResult')
    let divisao = valorUm / valorDois

    if (valorUm === '' || valorDois === '') { 
        let invalido = document.createElement('p') 
        invalido.id = 'primeiraInvalido'

        invalido.innerHTML = ('VALOR INVÁLIDO')
        primeiraResult.append(invalido)
    } else {
        let valido = document.createElement('p')
        valido.id = 'primeiraValido'

        valido.innerHTML = (`${valorUm} / ${valorDois} = ${divisao.toFixed(2)}`)
        primeiraResult.append(valido)
    } 
}

/* 2) Escreva uma função que receba as medidas dos lados de um triângulo e escreva se
ele é EQUILÁTERO, ISÓSCELES ou ESCALENO. Observação: Triângulo
equilátero: Possui os 3 lados iguais. Triângulo isósceles: Possui 2 lados iguais.
Triângulo escaleno: Possui 3 lados diferentes. Obs: receba os valores do usuário,
antes de passá-los para a função. */

function segundaQuestao () {
    let medidaUm = document.getElementById('medidaUm').value
    let medidaDois = document.getElementById('medidaDois').value
    let medidaTres = document.getElementById('medidaTres').value

    let segundaResult = document.getElementById('segundaResult')

    let triangulo = document.createElement('p') 
    triangulo.id = 'segundaTriangulo'

    if (medidaUm == '' || medidaDois == '' || medidaTres == '') {
        let invalido = document.createElement('p')
        invalido.id = 'segundaInvalido'

        invalido.innerHTML = ('VALOR INVÁLIDO')
        segundaResult.append(invalido)
    } else if (medidaUm === medidaDois && medidaDois === medidaTres) {
        triangulo.innerHTML = ('O triângulo é EQUILÁTERO')
        segundaResult.append(triangulo)
    } else if (medidaUm === medidaDois || medidaDois === medidaTres || medidaUm === medidaTres) {
        triangulo.innerHTML = ('O triângulo é ISÓSCELES')
        segundaResult.append(triangulo)
    } else {
        triangulo.innerHTML = ('O triângulo é ESCALENO')
        segundaResult.append(triangulo)
    }
}


/* segundaQuestao (); */

/* 3) A loja LuDas concede descontos a seus clientes, de acordo com o quanto foi
comprado. Escreva uma função que receba o valor das compras do cliente e
calcule um desconto de 10% se o valor das compras for menor ou igual a R$
500,00 e de 15 %, se superior a este valor. A função deve retornar o
percentual de desconto, o valor do desconto em reais e o valor final em reais. */

function terceiraQuestao () {
    alert('******3 QUESTÃO******')
    console.log('3 Questão')
    let compras = Number(prompt('Quanto o cliente gastou?'));

    if (compras <= 500) {
        let desconto_10 = (compras * 10) / 100
        let compras_10 = compras - desconto_10

        console.log(`O desconto foi de 10%`);
        console.log(`O desconto foi de R$${desconto_10.toFixed(2)}`);
        console.log(`O valor final foi de R$${compras_10.toFixed(2)}`);
    } else {
        let desconto_15 = (compras * 15) / 100
        let compras_15 = compras - desconto_15

        console.log(`O desconto foi de 15%`);
        console.log(`O desconto foi de R$${desconto_15.toFixed(2)}`);
        console.log(`O valor final foi de R$${compras_15.toFixed(2)}`);
    }

    console.log('')
}


/* terceiraQuestao (); */

/* 4) Escreva uma função que receba o total gasto pelo cliente e a opção de
pagamento, que pode ser:
1) Opção: a vista com 10% de desconto
2) Opção: em duas vezes (preço da etiqueta)
3) Opção: de 3 até 10 vezes com 3% de juros ao mês (somente para
compras acima de R$ 100,00).
A função deve imprimir a opção escolhida e o total a pagar. */

function quartaQuestao () {
    alert('******4 QUESTÃO******')
    console.log('4 Questão')

    let totalGasto = Number(prompt('Quanto o cliente gastou no total?'));
    let opcao = prompt('Informe qual opção de pagamento que você deseja 1, 2 ou 3?');

    if (opcao === '1') {
        console.log('1 opção: A vista com 10% de desconto');
        let descontoDez = (totalGasto * 10) / 100;
        let novoTotal = totalGasto - descontoDez;

        console.log(`Valor sem desconto R$${totalGasto.toFixed(2)}`);
        console.log(`Valor descontado R$${descontoDez.toFixed(2)}`);
        console.log(`Valor com 10% de desconto R$${novoTotal.toFixed(2)}`);

    } else if (opcao === '2') {
        console.log('2 opção: Em duas vezes')
        let duasParcelas = totalGasto / 2

        console.log(`Valor total R$${totalGasto.toFixed(2)}`);
        console.log(`Valor dividido em 2x sem juros R$ ${duasParcelas.toFixed(2)}`);

    } else if (opcao === '3') {
        console.log('3 opção: Parcelar de 3x a 10x com 3% de juros ao mês caso compra ultrapasse os R$ 100.00')
        let quantasParcelas = 0;
        let jurosTres = 0;
        let valorJuros = 0;
        let ValorParcela = 0;
        let valorFinal = 0;

        
        if (totalGasto > 100) {

            quantasParcelas = Number(prompt('Em quantas vezes parcelar de 3x até 10x'));
            valorJuros = totalGasto / quantasParcelas;
            jurosTres = (valorJuros * 3) / 100;
            ValorParcela = totalGasto / quantasParcelas;

            for (let i = 0; i < quantasParcelas; i++) {
                valorJuros += jurosTres
            }

            valorFinal = valorJuros * quantasParcelas;
            console.log(`Valor da parcela sem juros R$${ValorParcela.toFixed(2)}`)
            console.log(`Valor final da parcela com 3% de juros por mês R$ ${valorJuros.toFixed(2)}`)
            console.log(`Valor final com juros R$${valorFinal.toFixed(2)}`)
            console.log(`Valor gasto sem juros R$${totalGasto.toFixed(2)}`);
            console.log(`Valor dividido em ${quantasParcelas}x`)
        } else {
            console.log(`O valor gasto foi de R$${totalGasto.toFixed(2)}`)
        }

    } else {
        console.log('OPÇÃO INVÁLIDA')
    }

    console.log('')
} 


/* quartaQuestao (); */

/* 5) Crie uma função que receba a quantidade de linhas e de colunas que o
computador deve imprimir com o caractere *. Exemplo. Se receber 3 e 4,
deve ser impresso */

function quintaQuestao () {
    alert('******5 QUESTÃO******')
    console.log('5 Questão')

    let linha = Number(prompt('Informe a quantidade de linhas:'))
    let coluna = Number(prompt('Informe a quantidade de colunas:'))
    let imprimir = ''

    if (linha < 0 || coluna < 0) {
        console.log('Insira um valor VÁLIDO')
    } else {
        while (linha != 0) {
            while (coluna != 0) {
                imprimir += '*';
                coluna --;
            }

            console.log(imprimir);
            linha --;
        }
    }

    console.log('')
}

    

/* 6) Crie uma função que receba do usuário a base (b) e o expoente (n), e calcule b n. */

function sextaQuestao () {
    alert('******6 QUESTÃO******')
    console.log('6 Questão')

    let base = Number(prompt('Informe a base'));
    let expoente = Number(prompt('Informe o expoente'));
    let calculo = base ** expoente

    console.log(calculo)

    console.log('');
}
