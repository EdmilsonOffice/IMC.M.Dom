// //IMC
// //1 capturar valores: Ok
// //2 calcular imc: Ok
// //3 gerar classificação do imc: Ok
// //4 organizar as informações: Ok
// //5 salvar os dados na lista
// //6 ler a lista com os dados
// //7 rendenizar o conteudo do HTML(tabela)
// //8 Botão de limpar os registros(clear (localStorage))


function CalcularValores(event) {
    event.preventDefault();

    let dadosUsuarios = CapturarValores();

    let imc = CalcularImc(dadosUsuarios.altura, dadosUsuarios.peso);

    let classificacao = ClassificarImc(imc);

    let dadosUsuarioCompletos = OrganizarDados(dadosUsuarios, imc, classificacao);

    CadastrarUsuario(dadosUsuarioCompletos);

    window.location.reload();
}

function CapturarValores() {
    const name = document.getElementById('nome').value;
    const altura = document.getElementById('height').value;
    const peso = document.getElementById('weight').value
    const dadosUsuarios = {
        nome: name,
        altura: altura,
        peso: peso
    }

    return dadosUsuarios;
}
function CalcularImc(altura, peso) {
    const imc = peso / (altura * altura)
    return imc
}
function ClassificarImc(imc) {
    if (imc < 18.5) {

        return "abaixo do peso!"

    } else if (imc < 25) {

        return "peso normal"

    } else if (imc < 30) {

        return "sobrepeso"

    } else {

        return "obesidadde"
    }
}
function OrganizarDados(dadosUsuarios, valorImc, classificacaoImc) {
    const dataHoraAtual = Intl.DateTimeFormat('pt-BR', { timeSyle: 'long', dateStyle: 'short' }).format(Date.now());
    const dadosUsuarioCompletos = {
        ...dadosUsuarios,
        imc: valorImc.toFixed(2),
        classificacaoImc: classificacaoImc,
        dataCadastro: dataHoraAtual
    }
    
    return dadosUsuarioCompletos;
}

function CadastrarUsuario(usuario) {

    //Cria um array vazio para armazenar os valores do usuário
    let listaUsuario = [];

    //Verifica se dentro do localStorage eu tenho as informações do usuarios
    if (localStorage.getItem("usuariosCadastrados")) {

        //Se sim, eu guardo as informações dentro do array
        //O parse transforma de jSOM para object
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    //Cadastra usuários dentro do array
    listaUsuario.push(usuario)

    //Caso contrário, eu crio um novo item no localStorage
    localStorage.setItem("usuariosCadastrados", JSON.stringify(listaUsuario))
}

function carregarUsuario() {
    let listaUsuario = []

    if (localStorage.getItem("usuariosCadastrados")) {
        listaUsuario = JSON.parse(localStorage.getItem("usuariosCadastrados"))
    }
    if (listaUsuario.length == 0) {
        let tabela = document.getElementById('corpo-tabela');

        tabela.innerHTML = `
        <tr class="Linha-mensagem">
        <td colspan='6' >Nenhum usuário cadastrado</td>
        </tr>
        `
    } else {
        montarTabela(listaUsuario)
    }
}

// window.addEventListener('DOMContentLoaded', () => carregarUsuario());
document.addEventListener('DOMContentLoaded', () => carregarUsuario());

function montarTabela(listaUsuario) {

    let tabela = document.getElementById('corpo-tabela')

    let template = "";

    listaUsuario.forEach(pessoa => {
        template += `
        <tr> 
        <td data-cell="nome">${pessoa.nome}</td>
        <td data-cell="altura">${pessoa.altura}</td>
        <td data-cell="peso">${pessoa.peso}</td>
        <td data-cell="imc">${pessoa.imc}</td>
        <td data-cell="classificacao">${pessoa.classificacaoImc}</td>
        <td data-cell="dataCadastro">${pessoa.dataCadastro}</td>
        </tr>
        `
    });

    tabela.innerHTML = template;
}
function DeletarDadosUsuarioCompleto (dadosUsuarioCompletos){
    

}
function deletarRegistros() {

    localStorage.clear();
    
    window.location.reload();
}