import service from './service';

function adicionar(produtos){
    return new Promise((resolve, reject) => {
        service.post('/produtos', produtos)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}


function obter(){
    return new Promise((resolve, reject) => {
        service.get('/produtos')
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}


function atualizar(produtos){
    return new Promise((resolve, reject) => {
        service.put(`/produtos/${produtos.id}`, produtos)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}


function excluir(id){
    return new Promise((resolve, reject) => {
        service.delete(`/produtos/${id}`)
        .then(response => resolve(response))
        .catch(erro => reject(erro))
    });
}

export default {
    adicionar,
    obter,
    atualizar,
    excluir
}