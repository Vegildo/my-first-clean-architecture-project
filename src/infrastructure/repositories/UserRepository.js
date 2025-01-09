

class USerRepository {
    constructor() {
        this.users = [];
    }

    async save(user) {
        this.users.push(user);
        return user;
    }

    async findAll() {
        return this.users;
    }

    async finsById(id) {
        return this.users.find(user => user.id === id);
    }
}


module.exports = USerRepository;

