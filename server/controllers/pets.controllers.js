const Pet = require('../models/pets.models');
//export different functions that perform the basic CRUD operations using our Pet model
const mongoose = require('mongoose');
// function get all pets
module.exports.findAllpets = (req, res) => {
    Pet.find()
        .sort("{name} ASC")
        .then(allpets => res.json(allpets))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}

// function create pet

module.exports.createNewPet = (req, res) => {
    Pet.create(req.body)
        .then(newlyPet => res.json({ pet: newlyPet }))
        .catch(err => res.status(400).json(err));
}


// find one pet

module.exports.findOnePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(pet => res.json(pet))
        .catch(err => res.json({ message: 'Something went wrong on reading one product', error: err }));

}

// update one pet
module.exports.updatePet = (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then(updatedPet => res.json({ pet: updatedPet }))
        .catch(err => res.status(400).json({ message: 'Something went wrong on updating one product', error: err }));
}

// delete a pet

module.exports.deletePet = (req, res) => {
    Pet.findOneAndDelete({ _id: req.params.id })
        .then(deletedPet => res.json({ pet: deletedPet }))
        .catch(err => res.json({ message: 'Something went wrong on deleting one product', error: err }));
}
