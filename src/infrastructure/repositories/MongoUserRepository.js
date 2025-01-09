const mongoose = require('../gateways/database/mongoose'); //Lembrar de importar nosso mongoose do arquivo de gateways, e não do mongoose nativo.

const User = require('../../domain/entities/User');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String
});

const UserModel = mongoose.model('User', UserSchema);

class MongoUserRepository {
    async save(user) {
        const userModel = new UserModel(user);
        return userModel.save();
    }

    async findAll() {
        const users = await UserModel.find();
        return users.map(user => new User(user._id, user.name, user.email));
    }

    async findById(id) {
        const user = await UserModel.findById(id);
        if (user) {
            return new User(user._id, user.name, user.email);
        }
        return null;
    }    
}

module.exports = MongoUserRepository;

