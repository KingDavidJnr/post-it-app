const Users = require('../models/users.model');

class UsersService {
    async createUser(user) {
        return await Users.create(user)
    }

    async updateUser(id, data) {
        return await Users.findByIdAndUpdate({_id: id}, data, {new: true})
    }

    async getUser(filter) {
        return await Users.findOne(filter).populate('user')
    }

    async getUsers(filter) {
        return await Users.find(filter).populate('user')
    }

    async deleteUser(id) {
        return await Users.findByIdAndDelete({_id: id})
    }
}

module.exports = new UsersService();