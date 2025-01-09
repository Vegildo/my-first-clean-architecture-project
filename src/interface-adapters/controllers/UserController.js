const CreateUser = require('../../application/use-cases/CreateUser');
const FindAllUsers = require('../../application/use-cases/FindAllUsers');
const MongoUserRepository = require('../../infrastructure/repositories/MongoUserRepository');

class UserController {
    constructor(){
        this.mongoUserRepository = new MongoUserRepository();
        this.createUser = new CreateUser(this.mongoUserRepository);
        this.findAllUsers = new FindAllUsers(this.mongoUserRepository);
    }

    async create(req, res) {
        const user = req.body;
        const result = await this.createUser.execute(user);
        res.status(201).json(result);
    }

    async findAll(req, res) {
        const users =  await this.findAllUsers.execute();
        res.status(200).json(users);
    }
}

module.exports = UserController;

