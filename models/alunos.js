const mongoose = require('mongoose');

const disciplinaSchema = new mongoose.Schema(
    {
        codigo: {
            type: String,
            required: true,
        },
        nome: {
            type: String,
            required: true,
        },
        professor: {
            type: String,
            required: true,
        },
    },
    { _id: false }
);

const alunoSchema = new mongoose.Schema(
    {
        ra: {
            type: String,
            required: true,
            unique: true,
        },
        nome: {
            type: String,
            required: true,
        },
        disciplinas: {
            type: [disciplinaSchema],
            default: [],
        },
    },
    { collection: 'Alunos' }
);

module.exports = mongoose.model('Aluno', alunoSchema);
