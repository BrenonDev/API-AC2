const UserModel = require('../models/users');

exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find();
    try {
        return res.status(200).json(users);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao obter usuários' });
    }
};

exports.createUser = async (req, res) => {
    const user = req.body;
    try {
        const newUser = await UserModel.create(user);
        return res.status(201).json(newUser);
    } catch (error) {
        return res.status(400).json({ error: 'Erro ao criar usuário' });
    }
};