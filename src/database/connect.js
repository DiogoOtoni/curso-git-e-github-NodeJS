const mongoose = require("mongoose");

const connectToDatabase = async () => {
    await mongoose.connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicas1.itfbaqb.mongodb.net/database?retryWrites=true&w=majority`, 
    (error) => {
        if(error) {
            return console.log("ocorreu um erro ao se conectar no BD", error);
        }
        return console.log("Conexao com bd realizada com SUCESSO!");
    });
};

module.exports = connectToDatabase;




