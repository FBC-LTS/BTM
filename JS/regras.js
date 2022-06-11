const jsData = [
    {
        "id": 1, 
        "nacao": "Hobbit", 
        "casa": "O condado", 
        "descricao": "Os hobbits pés-peludos são o tipo mais comum de hobbit. São morenos, preferem planícies e regiões banhadas por rios. Os cascalvas tem a pele e o cabelo mais claros, são mais altos e mais esguios que os outros tipos de hobbit, preferem bosques e florestas para morar além de serem descendentes de elfos.",  
        "personagens-saga":  ["Bilbo Bolseiro", "Frodo Bolseiro",  "Meriadoc Brandybuck",  "Peregrin Tûk", "Sméagol"], 
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Bilbo_Bols%C3%B3n.png/227px-Bilbo_Bols%C3%B3n.png"
    },
    {
        "id": 2, 
        "nacao": "Orc", 
        "casa": "Cirith Ungol", 
        "descricao": "Embora sejam estúpidos, são retratados como seres infelizes, que odeiam todos, incluindo a si mesmos e aos seus mestres, que servem por medo. São incapazes de fazer coisas belas como os Elfos, mas conseguem criar instrumentos para ferir e destruir.",  
        "personagens-saga":  ["Azog, o profanador",  "Bolg",  "Snaga-hai", "Lurtz"], 
        "imagem": "https://static.wikia.nocookie.net/okup/images/6/62/Snaga.png/revision/latest/scale-to-width-down/220?cb=20170126023809&path-prefix=da"
    },
    {
        "id": 3, 
        "nacao": "Uruk-hai", 
        "casa": "Portão Negro", 
        "descricao": "Mais altos, mais fortes e sem a aversão à luz do orc “normal”, os Uruk-hai surgiram durante a Guerra do Anel. Através de processos também desconhecidos, talvez através da hibridização com homens, os Uruk-hai foram criados para serem o pináculo do exército de Sauron.",  
        "personagens-saga":  ["Azog, o profanador",  "Bolg",  "Snaga-hai", "Lurtz"], 
        "imagem": "https://static.wikia.nocookie.net/okup/images/6/62/Snaga.png/revision/latest/scale-to-width-down/220?cb=20170126023809&path-prefix=da"
    },
    {
        "id": 4, 
        "nacao": "Cavaleiro de Rohan", 
        "casa": "Abismo de Helm", 
        "descricao": "Durante a XIII th  século de Terceira Idade (TA), os governantes de Gondor formaram uma aliança estreita com os habitantes do território do norte de Rhovanion , um pai de três pessoas Casas do Edain da Primeira Era . Estes homens foram dizimados pela Grande Peste de 1636 TA, e ainda mais pelas invasões dos carrinhos de Pessoas-de- no final do XX °  século. Após essas invasões, alguns desses homens, liderados por um certo Frumgar, migraram para o vale superior do Anduin em 1977 TA. No local, eles entraram em conflito com os Anões sobre o compartilhamento do tesouro do dragão Scatha, morto por Fram, filho de Frumgar.",  
        "personagens-saga":  ["Théoden",  "Théodred",  "Deorwine"], 
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Cavalier-rohan.jpg/220px-Cavalier-rohan.jpg"
    },
    {
        "id": 5, 
        "nacao": "Guerreiro de Gondor", 
        "casa": "Minas Tirith", 
        "descricao": "Gondor foi fundada pelos irmãos Isildur e Anárion , filhos de Elendil , exilados do reino submerso de Númenor e, junto com Arnor , o reino criado por Elendil ao norte, serviu como uma fortaleza para os Homens do Oeste . Após um período inicial de crescimento, Gondor declinou gradualmente ao longo da Terceira Era, continuamente enfraquecido por seus confrontos com os aliados de Sauron . O poder de Gondor não é restaurado até a derrota final de Sauron e a coroação de Aragorn .",  
        "personagens-saga":  ["Eärnur",  "Boromir",  "Faramir"], 
        "imagem": "https://static.wikia.nocookie.net/terramedia/images/4/43/Faramir.jpg/revision/latest/scale-to-width-down/250?cb=20200720154240"
    },
    {
        "id": 6, 
        "nacao": "Elfo da Floresta", 
        "casa": "Floresta das Trevas", 
        "descricao": "Os Elfos são descritos como altos e belos, parecidos com os Valar (espécie de anjos), só que menores em estatura e poder, e são imortais, pelos menos enquanto o Mundo, chamado Arda, existir. Não envelhecem nem adoecem, e se forem mortalmente feridos ou se sofrerem um grande desgosto seu corpo morre, mas seu espírito sobrevive sendo então enviado para as Mansões de Mandos onde permanece até poder reencarnar, em um corpo idêntico e com as mesmas lembranças. Um direito que os elfos têm é o de ir, se assim desejarem, para Valinor, no continente sagrado de Aman, destino esse vedado aos mortais.",  
        "personagens-saga":  ["Legolas",  "Thranduil"], 
        "imagem": "https://upload.wikimedia.org/wikipedia/en/thumb/2/2b/Legolas600ppx.jpg/220px-Legolas600ppx.jpg"
    },
    {
        "id": 7, 
        "nacao": "Elfo de Lothlórien", 
        "casa": "Caras Galadhon", 
        "descricao": "Os Elfos são descritos como altos e belos, parecidos com os Valar (espécie de anjos), só que menores em estatura e poder, e são imortais, pelos menos enquanto o Mundo, chamado Arda, existir. Não envelhecem nem adoecem, e se forem mortalmente feridos ou se sofrerem um grande desgosto seu corpo morre, mas seu espírito sobrevive sendo então enviado para as Mansões de Mandos onde permanece até poder reencarnar, em um corpo idêntico e com as mesmas lembranças. Um direito que os elfos têm é o de ir, se assim desejarem, para Valinor, no continente sagrado de Aman, destino esse vedado aos mortais.",  
        "personagens-saga":  ["Galadriel",  "Gil-galad"], 
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Araniart_-_Galadriel_and_Celeborn.jpg/200px-Araniart_-_Galadriel_and_Celeborn.jpg"
    },
    {
        "id": 8, 
        "nacao": "Anão", 
        "casa": "Colinas de Ferro", 
        "descricao": " Em O Silmarillion, os anões são descritos como mais baixos e atarracados que elfos e homens, capazes de suportar tanto calor e frio. Embora sejam mortais, têm uma vida média de 250 anos.[24] Em O Senhor dos Anéis, Tolkien escreveu que se reproduzem lentamente, já que não mais que um terço deles são do sexo feminino, e nem todos se casam; além disso, anões do sexo feminino se parecem e soam (e se vestem, se viajarem — o que é raro) tão iguais aos anões do sexo masculino que outros povos não pudiam distingui-los e, assim, outros acreditam erroneamente que anões crescem das pedras.",  
        "personagens-saga":  ["Balin",  "Dwalin",  "Bombur", "Durin"], 
        "imagem": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Dwarf_by_BrokenMachine86.jpg/200px-Dwarf_by_BrokenMachine86.jpg"
    }
];