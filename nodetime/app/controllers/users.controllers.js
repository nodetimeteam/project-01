const userServices = require('../services/users.service')

module.exports = {
    readAll: _readAll,
    readById: _readById,
    create: _create,
    update: _update,
    delete: _delete
}


function _readAll(req, res) {
    userServices.readAll()
        .then(users => {
            res.json(users)
        })
        .catch(err => res.send(err))
}

function _readById(req, res) {

}

function _create(req , res) {
    userServices.create(req.body)
        .then(() => res.sendStatus(201))
        .catch(err => res.send(err))
}

function _update(req, res) {

}

function _delete(req, res) {

}