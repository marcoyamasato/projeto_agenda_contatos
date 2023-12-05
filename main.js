const input_nome = document.getElementById('input_nome')
const input_telefone = document.getElementById('input_telefone')
const referencia = document.getElementById('dropdown_referencias')
const campo_qnt_total = document.getElementById('total_contratos')

const body_table = document.querySelector('tbody')


lista_nomes = []
lista_telefones = []


lista_linhas = []


addEventListener('submit', function(e){
    e.preventDefault();

    adiciona_linha();

    atualiza_qt_total();
})



function adiciona_linha(){

    if(lista_nomes.includes(input_nome.value) | lista_telefones.includes(input_telefone.value)){

        alert('O nome ou telefone já está cadastrado')
    }

    else{

        var linha = `'<tr> <td> ${input_nome.value} </td> <td> ${input_telefone.value} </td> <td> ${determina_emoji()} </td> </tr>'`
    
        lista_linhas.push(linha)
        lista_nomes.push(input_nome.value)
        lista_telefones.push(input_telefone.value)
        body_table.innerHTML = lista_linhas
        
    }


}

function determina_emoji(){
    var imagem = ''
    if(referencia.value == 'Familia'){
        imagem = '<img src="familia.jpg" alt="emoji familia"/>'
    }
    else if(referencia.value == 'Trabalho'){
        imagem = '<img src="trabalho.jpg" alt="emoji trabalho"/>'
    }
    else{
        imagem = '<img src="amigos.jpg" alt="emoji amigos"/>'
    }
    
    return imagem
}


function atualiza_qt_total(){

    var qt_total = lista_linhas.length
    campo_qnt_total.innerHTML = qt_total

    
}

