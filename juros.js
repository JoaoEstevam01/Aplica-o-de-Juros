import entradaDados from 'readline-sync';

console.log('Bem-Vindo a aplicação de Juros!\n');

//Variáveis com inputs
let valor_juros = '';
let valor = entradaDados.question('Informe o valor devido: R$');
let dias = entradaDados.question('Informe quantos dias se passaram desde o vencimento do boleto: ');
let juros = '';


//Condicionais
if (valor == 0 || dias == 0) {
    console.log('Você está em dia');
} 
    else if (valor > 0) {
        if (dias >= 15) {
            juros = Number(valor) + (valor * 0.10);
            valor_juros = 10;
        } else {
            juros = Number(valor) + (valor * 0.05);
            valor_juros = 5;
        }

        console.log('\nValor original da dívida: R$' + valor);
        console.log('Dias atrasados: ' + dias);
        console.log('Taxa de Juros: ' + valor_juros + '%');
        console.log('Valor total com juros: R$' + juros);
        console.log('\n');
        
} 
else {
    console.log('Inválido. Tente novamente!');
}
