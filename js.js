const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/aula10’)
.then(() => {
app.listen(3000, () => {
console.log('Conectado ao mongoDB');
console.log('Servidor iniciado na porta 3000');
})
})
.catch((err) => {
console.log(err);
});