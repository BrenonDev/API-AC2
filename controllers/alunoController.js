const AlunoModel = require('../models/alunos');

exports.getAllAlunos = async (req, res) => {
    try {
        const alunos = await AlunoModel.find();
        return res.status(200).json(alunos);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao obter alunos' });
    }
};

exports.createAluno = async (req, res) => {
    try {
        const dados = req.body;

        if (!Array.isArray(dados) && (!dados.ra || !dados.nome)) {
            return res.status(400).json({ error: 'Informe os dados do aluno' });
        }

        if (Array.isArray(dados)) {
            const alunos = await AlunoModel.insertMany(dados);
            return res.status(201).json(alunos);
        }

        const aluno = await AlunoModel.create(dados);
        return res.status(201).json(aluno);
    } catch (error) {
        return res.status(400).json({
            error: 'Erro ao criar aluno',
            details: error.message,
        });
    }
};

exports.getAlunoByRa = async (req, res) => {
    try {
        const aluno = await AlunoModel.findOne({ ra: req.params.ra });

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno nao encontrado' });
        }

        return res.status(200).json(aluno);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao buscar aluno' });
    }
};

exports.getDisciplinasByAlunoRa = async (req, res) => {
    try {
        const aluno = await AlunoModel.findOne({ ra: req.params.ra });

        if (!aluno) {
            return res.status(404).json({ error: 'Aluno nao encontrado' });
        }

        return res.status(200).json(aluno.disciplinas);
    } catch (error) {
        return res.status(500).json({ error: 'Erro ao listar disciplinas' });
    }
};

exports.updateAlunoByRa = async (req, res) => {
    try {
        const alunoAtualizado = await AlunoModel.findOneAndUpdate(
            { ra: req.params.ra },
            {
                ra: req.params.ra,
                nome: req.body.nome,
                disciplinas: req.body.disciplinas,
            },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!alunoAtualizado) {
            return res.status(404).json({ error: 'Aluno nao encontrado' });
        }

        return res.status(200).json(alunoAtualizado);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao atualizar aluno' });
    }
};
