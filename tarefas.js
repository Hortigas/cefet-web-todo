class tarefa {
    constructor(name, categoria, realizada) {
        this.name = name;
        this.categoria = categoria;
        this.realizada = realizada;
    }
}

tarefas = [];

tarefas.push(new tarefa('prova Fisica I', 'estudos', false));
tarefas.push(new tarefa('Comprar leite', 'compras', false));
tarefas.push(new tarefa('Escutar chimbinha', 'lazer', true));
