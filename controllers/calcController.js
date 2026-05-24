exports.somar = (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const resultado = n1 + n2;
    res.status(201).json({'resultado': resultado});
};

exports.subtrair = (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const resultado = n1 - n2;
    res.status(201).json({'resultado': resultado});
};

exports.multiplicar = (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    const resultado = n1 * n2;
    res.status(201).json({'resultado': resultado});
};

exports.dividir = (req, res) => {
    const n1 = parseFloat(req.body.n1);
    const n2 = parseFloat(req.body.n2);
    if (n2 === 0) {
        return res.status(400).json({'error': 'Divisão por zero não é permitida.'});
    }
    const resultado = n1 / n2;
    res.status(201).json({'resultado': resultado});
};