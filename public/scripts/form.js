const options = {
    'residencial': [
        'Apartamento',
        'Casa',
        'Casa em condomínio',
        'Chácara',
        'Cobertura',
        'Flat',
        'Kitnet',
        'Lote',
        'Sobrado',
        'Fazenda/Sítio/Chácara'
    ],
    'comercial': [
        'Consultório',
        'Galpão/Depósito/Armazém',
        'Imóvel comercial',
        'Lote/Terreno',
        'Ponto comercial/loja/box',
        'Sala/Conjunto',
        'Prédio/Ed. Inteiro'
    ]
}

function setForm() {
    const categoriaImovel = document.querySelector('#categoriaImovel').value

    const tipoImovel = document.querySelector('#tipoImovel').children[0]

    if (categoriaImovel != null) {
        options[categoriaImovel].forEach(e => {
            tipoImovel.innerHTML += `<option value="">${e}</option>`
        })
    }
}
setForm()