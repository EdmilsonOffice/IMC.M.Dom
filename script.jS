//IMC
//1 capturar valores: Ok
//2 calcular imc: Ok
//3 gerar classificação do imc: Ok
//4 organizar as informações: Ok
//5 salvar os dados na lista
//6 ler a lista com os dados
//7 rendenizar o conteudo do HTML(tabela)
//8 Botão de limpar os registros(clear (localStorage))


function CapturarValores(){
    const name = document.getElementById('name').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value
    const dadosUsuarios ={
        nome: name,
        altura: altura,
        peso: peso
    }
    function CalcularImc(altura, peso){
        const imc = peso / (altura * altura)
        return imc
    }
    function ClassificarImc(imc){
    if (imc < 18.5){

        return "abaixo do peso!"

    }else if (imc < 25) {

        return"peso normal"

    } else if (imc < 30) {

    return "sobrepeso"

    }else {

    return"obesidadde"
    }

function OrganizarDados(dadosUsuarios, valorImc, classificacaoImc){
    const dataHoraAtual = intl.DateTimeFormat('pt-BR', {timeSyle: 'long', dateStyle: 'short'}).format(Date.now());
    const dadosCompletos = {
        imc: valorImc.toFixed(2),
        classificacaoImc: classificacaoImc,
        dataCadastro: dataHoraAtual
    }
    return dadosCompletos;
}
        
    }
}

