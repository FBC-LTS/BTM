const forms = ["j1", "j2", "j3", "j4", "j5", "j6", "j7", "j8" ];
const formsTitles = ['Jogador 1', 'Jogador 2', 'Jogador 3', 'Jogador 4', 'Jogador 5', 'Jogador 6', 'Jogador 7', 'Jogador 8'];
const raceID = ["anao" , "hobbit", "cavaleiro", "guerreiro", "elfo-f", "elfo-l", "orc", "uruk"];
const raceName = ["Anão", "Hobbit", "Cavaleiro de Rohan", "Guerreiro de Gondor", "Elfo da Floresta", "Elfo de Lothlórien", "Orc", "Uruk-hai"];
const hablID = ["forca", "precisao", "velocidade", "armadura", "recuperacao"];
const hablName = ["Força: ", "Precisão: ", "Velocidade:  ", "Armadura: ", "Recuperação: "];

const btnProx = document.getElementById("prox");
const btnBack = document.getElementById("ante");

var jogadorAtual = 0;
var jogadorProx = 0;

btnProx.addEventListener("click", proximoJogador);
btnBack.addEventListener("click", voltarJogador);

function criarNovoForm(jogadorCriar){

    // Criando o formulario
    var novoForm = document.createElement("form");
    novoForm.classList.add("jogadores");
    novoForm.classList.add("inv");
    novoForm.setAttribute('ID', forms[jogadorCriar]);
    // Box principal do formulario
    var boxForm = document.createElement("div");
    boxForm.classList.add("box-form");
    // Header do form
    var headerForm = document.createElement("div");
    headerForm.classList.add("form-header");
    // Conteudo do headerForm
    var title = document.createElement("h1");
    title.classList.add("title");
    var conteudotitle = document.createTextNode(formsTitles[jogadorCriar
    ]);
    // Adiciona os elementos do headerF dentro do headerF e dentro da box principal
    title.appendChild(conteudotitle);
    headerForm.appendChild(title);
    boxForm.appendChild(headerForm);
    // Box com o input do nome do personagem
    var boxNome = document.createElement("div");
    boxNome.classList.add("box-name");
    // Conteudo boxNome
    var labelNome = document.createElement("label");
    labelNome.classList.add("label-name");
    labelNome.setAttribute("for", "nome");
    var label = document.createTextNode("Nome do Personagem:");
    var inputNome = document.createElement("input");
    inputNome.classList.add("input-name");
    inputNome.setAttribute("id", "nome");
    inputNome.setAttribute("type", "text");
    inputNome.setAttribute("name", formsTitles[jogadorCriar
    ].replace(/ /g, ""));
    inputNome.setAttribute("placeholder", "Digite o nome do jogador.");
    // Add na boxNome
    labelNome.appendChild(label);
    boxNome.appendChild(labelNome);
    boxNome.appendChild(inputNome);
    boxForm.appendChild(boxNome);
    // Nação
        // Titulo
    var h3SubTitle = document.createElement("h3");
    h3SubTitle.classList.add("subtitle");
    conteudotitle = null;
    conteudotitle = document.createTextNode("Nação: ");
    h3SubTitle.appendChild(conteudotitle);
    boxForm.appendChild(h3SubTitle);
        // Box race
    var boxRace = document.createElement("div");
    boxRace.classList.add("box-race");

    for (i in raceID) {
        var inputRace = document.createElement("div");
        var inp = document.createElement("input");
        var lab = document.createElement("label");
        inputRace.classList.add("input-race");
        inp.setAttribute("type", "radio");
        inp.setAttribute("id", raceID[i]);
        inp.setAttribute("name", raceID[i]);
        lab.setAttribute("for", raceID[i]);
        var cont = document.createTextNode(raceName[i]);
        inputRace.appendChild(inp);
        lab.append(cont);
        inputRace.appendChild(lab);

        boxRace.appendChild(inputRace);
    }
    boxForm.appendChild(boxRace);

    // Habilidades
        //titulo
    var h3SubTitleH = document.createElement("h3");
    h3SubTitleH.classList.add("subtitle");
    conteudotitle = null;
    conteudotitle = document.createTextNode("Habilidades do personagem: ");
    h3SubTitleH.appendChild(conteudotitle);
    boxForm.appendChild(h3SubTitleH);
        // box habilidades
    var boxHabl = document.createElement("div");
    boxHabl.classList.add("box-habl");

        // loop
    for (i in hablID) {
        var inputHabl = document.createElement("div");
        var inp = document.createElement("input");
        var lab = document.createElement("label");
        inputHabl.classList.add("input-habl");
        inp.setAttribute("type", "number");
        inp.setAttribute("id", hablID[i]);
        inp.setAttribute("name", hablID[i]);
        lab.setAttribute("for", hablID[i]);
        var cont = document.createTextNode(hablName[i]);
        
        lab.append(cont);
        inputHabl.appendChild(lab);
        inputHabl.appendChild(inp);

        boxHabl.appendChild(inputHabl);
    }
    boxForm.appendChild(boxHabl);

    // Pega a posiçao para inserir na tela
    var posiForm = document.getElementById("forms");
    // Adiciona a box principal dentro do form
    novoForm.appendChild(boxForm);
    // Escreve o HTML gerado
    posiForm.insertBefore(novoForm, null);
    console.log("personagem criado com sucesso!");
}

function inverteVisivel(invisivel, visivel){
    if (visivel != null){
        let setInvisivel = document.getElementById(visivel);
        setInvisivel.classList.remove("visivel");
        setInvisivel.classList.add("inv");
        console.log(setInvisivel);
    }
    
    if (invisivel != null){
        let setVisivel = document.getElementById(invisivel);
        setVisivel.classList.remove("inv");
        setVisivel.classList.add("visivel");
        console.log(setVisivel);
    }


}

function proximoJogador(){
    if (jogadorProx < 7){
        jogadorProx += 1;
    }

    let jogadorExiste = !!document.getElementById(forms[jogadorProx]);
    if (jogadorExiste == true){
        inverteVisivel(forms[jogadorProx], forms[jogadorAtual]);
    } else{
        criarNovoForm(jogadorProx);
        inverteVisivel(forms[jogadorProx], forms[jogadorAtual]);
    
    }
    if (jogadorAtual < 7){
        jogadorAtual += 1;
    }
    console.log("foi");
    if (jogadorProx == 1){
        inverteVisivel("ante", null);
    } else if (jogadorProx == 7){
        inverteVisivel(null, "prox");
    }

}

function voltarJogador(){
    
    if (jogadorProx > 0){
        jogadorProx -= 1;
    }

    inverteVisivel(forms[jogadorProx], forms[jogadorAtual]);
    if (jogadorAtual > 0){
        jogadorAtual -= 1;
    }
    if (jogadorProx == 6){
        inverteVisivel("prox", null);
    } else if (jogadorProx == 0){
        inverteVisivel(null, "ante");
    }


    console.log("voltou");
}
