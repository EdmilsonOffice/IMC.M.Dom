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
        
    }
}

function OrganizarDados(dadosUsuario, valorImc, classificacaoImc) {

    const dataHoraAtual = Intl.DateTimeFormat('pt-BR', { timeStyle: 'long', dateStyle: 'short' }).format(Date.now());

    const dadosUsuarioCompleto = {
        ...dadosUsuario,
        imc: valorImc.toFixed(2),
        classificacaoImc: classificacaoImc,
        dataCadastro: dataHoraAtual
    }

    return dadosUsuarioCompleto;
}

function CadastrarUsuario(usuario) {
    //cria um array vazio para armazenar os valores do usuário 
    let listaUsuario = [];

    //verifica se dentro do localStorage eu tenho as informações do usuário
    if (localStorage.getItem("usuariosCadastrados")) {
        //se sim, eu guardo as informações dentro do array
        //parse => de JSON para object
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"));
    }

    //cadastrar usuário dentro do array
    listaUsuario.push(usuario)

    //casao contrário, eu crio um novo item no localStorage
    //stringfy => objeto para JSON
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuario))
}
function carregarUsuario(){
    let listaUsuario = []

    if(localStorage.getItem("usuariosCadastrados")){
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    if(listaUsuario.length == 0){
        let tabela = document.getElementById('corpo-tabela');

        tabela.innerHTML = `
        <tr class="Linha-mensagem">
        <td colspan='6' >Nenhum usuário cadastrado</td>
        </tr>
        `
    }else{
        montarTabela(listaUsuario)
    }
}

window.addEventListener('DOMContentLoaded', () => carregarUsuario ())


