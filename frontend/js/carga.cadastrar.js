const btn_cadastrar = document.getElementById('btn_cadastrar')
const resposta = document.getElementById('resposta')

btn_cadastrar.addEventListener('click', (e)=>{
    e.preventDefault()

    const descricao = document.getElementById('descricao').value
    const peso = Number(document.getElementById('peso').value)
    const volume = Number(document.getElementById('volume').value)
    const codRastreio = Number(document.getElementById('codRastreio').value)
    const idMotorista = Number(document.getElementById('idMotorista').value)

    const valores = {
        descricao: descricao,
        peso: peso,
        volume: volume,
        codRastreio: codRastreio,
        idMotorista: idMotorista,
    }

    fetch('http://localhost:3000/carga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
        .then(res => res.json())
        .then(dados => {
            resposta.innerHTML = `<p>${dados.message}</p>`
            document.querySelector('form').reset()
        })
        .catch(err => {
            console.error('Erro:', err)
            resposta.innerHTML = '<p>Erro ao tentar conectar com o servidor.</p>'
        })
})