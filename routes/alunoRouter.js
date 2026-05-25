const express = require('express');
const router = express.Router();
const alunoController = require('../controllers/alunoController');

router.get('/', alunoController.getAllAlunos);
router.post('/', alunoController.createAluno);
router.get('/:ra', alunoController.getAlunoByRa);
router.get('/:ra/disciplinas', alunoController.getDisciplinasByAlunoRa);
router.put('/:ra', alunoController.updateAlunoByRa);

module.exports = router;
