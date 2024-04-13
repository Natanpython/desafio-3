var hero = {
    nome: "Natanael",
    idade: 27,
    tipo: "Guerreiro",
    ataque: "com a espada",
    guerreiro: function(){
        console.log("Nome: " + this.nome)
        console.log("Idade: " + this.idade)
        console.log("Tipo: " + this.tipo)
        console.log("Ataque: " + this.ataque)
    },
    movimentoGuerreiro: function() {
        console.log(`O ${this.tipo} ${this.nome} atacou ${this.ataque}`)
    }
}
hero.guerreiro();
hero.movimentoGuerreiro();