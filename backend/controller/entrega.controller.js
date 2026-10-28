const Entrega = require('../models/Entrega')
const Carga = require('../models/Carga')

const STATUS = ['ENTREGUE', 'TRANSITO']

const cadastrar = async (req, res) => {
    const valores = req.body

    if (!valores.cidadeDestino || !valores.status || !valores.data || !valores.hora || !valores.idCarga) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios!' })
    }

    try {
        await Entrega.create(valores)
        return res.status(201).json({ message: 'Entrega cadastrada com sucesso!' })
    } catch (err) {
        return res.status(500).json({ message: 'Erro ao cadastrar entrega!' })
    }
}


module.exports = cadastrar