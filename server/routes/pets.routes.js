const Pet = require('../controllers/pets.controllers');
module.exports = (app) => {
    app.get('/api/pets', Pet.findAllpets);
    app.post('/api/pets/new', Pet.createNewPet);
    app.get('/api/pets/:id', Pet.findOnePet);
    app.put('/api/pets/:id', Pet.updatePet);
    app.delete('/api/pets/:id', Pet.deletePet);


}