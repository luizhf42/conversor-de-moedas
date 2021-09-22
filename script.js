function converter() {
    // Pega os valores das options e do input
    var campoDaMoedaUm = document.getElementById('opcao-1');
    var campoDaMoedaDois = document.getElementById('opcao-2');
    var moedaUm = campoDaMoedaUm.options[campoDaMoedaUm.selectedIndex].value;    
    var moedaDois = campoDaMoedaDois.options[campoDaMoedaDois.selectedIndex].value;   
    var valor = document.getElementById('valor').value;

    var conversaoValor;

    // Checa se a conversão é válida, caso sim, a executa dependendo das moedas selecionadas.
    if (valor <= 0) {
        document.getElementById('valor-convertido').innerHTML = "Por favor, insira um valor válido."
    } else if (moedaUm == moedaDois) {
        document.getElementById('valor-convertido').innerHTML = "Por favor, insira duas unidades de moeda diferentes."
    } else if (moedaUm == 'real') {
        switch (moedaDois) {
            case 'dolar':
            conversaoValor = (valor / 5).toFixed(2);
            document.getElementById('valor-convertido').innerHTML = `R$${valor}, na cotação atual, equivale a, aproximadamente, U$${conversaoValor}`;
            break;

            case 'euro':
            conversaoValor = (valor / 6).toFixed(2);
            document.getElementById('valor-convertido').innerHTML = `R$${valor}, na cotação atual, equivale a, aproximadamente, &euro;${conversaoValor}`;
            break;
        }
    } else if (moedaUm == 'dolar') {
        switch (moedaDois) {
            case 'real':
            conversaoValor = (valor * 5).toFixed(2);
            document.getElementById('valor-convertido').innerHTML = `U$${valor}, na cotação atual, equivale a, aproximadamente, R$${conversaoValor}`;
            break;

            case 'euro':
            conversaoValor = (valor / 1.2).toFixed(2);
            document.getElementById('valor-convertido').innerHTML = `U$${valor}, na cotação atual, equivale a, aproximadamente, &euro;${conversaoValor}`;
            break;
        }
    } else if (moedaUm == 'euro') {
        switch (moedaDois) {
            case 'real':
            conversaoValor = (valor * 6).toFixed(2);
            document.getElementById('valor-convertido').innerHTML = `&euro;${valor}, na cotação atual, equivale a, aproximadamente, R$${conversaoValor}`;
            break;
            
            case 'dolar':
            conversaoValor = (valor / 0.8).toFixed(2);
            document.getElementById('valor-convertido').innerHTML = `&euro;${valor}, na cotação atual, equivale a, aproximadamente, U$${conversaoValor}`;
            break;
        }
    }
}