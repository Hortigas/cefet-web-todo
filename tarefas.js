class tarefa {
    constructor(name, categoria, realizada) {
        this.name = name;
        this.categoria = categoria;
        this.realizada = realizada;
    }
    adicionaNaPagina(containerEl) {
        const tarefaEl = document.createElement('li');
        tarefaEl.innerHTML = this.name;
        tarefaEl.classList.add(`item-tarefa`, `categoria-${this.categoria}`);
        if (this.realizada) tarefaEl.classList.add('marcado');
        containerEl.appendChild(tarefaEl);
    }
}

tarefas = [];

tarefas.push(new tarefa('prova Fisica I', 'estudos', false));
tarefas.push(new tarefa('Comprar leite', 'compras', false));
tarefas.push(new tarefa('Escutar chimbinha', 'lazer', true));

let listaTarefas = document.querySelector('ul#lista-tarefas');
listaTarefas.innerHTML = '';

tarefas.forEach((e) => {
    e.adicionaNaPagina(listaTarefas);
});
