
const ElectronicModel = require('../models/ElectronicModel');

module.exports.list =  function list(req, res) {
    ElectronicModel.find({}).exec()
    .then(electronic => {
        return res.json(electronic);
    });

   }
module.exports.show =  function show(req, res) {
    ElectronicModel.findById(req.params.id).exec()
    .then(electronic => {
        return res.json(electronic);;
     });
    }

module.exports.create =  function create(req, res) {
    let newElectronics = new ElectronicModel({
      product: req.body.product,
      image: req.body.image,
      price: req.body.price
    })
    newElectronics.save()
    .then(electronic=>{
        res.json(electronic)
    })
   }
module.exports.update =  function update(req, res) {
    return res.json({theId: req.params.id});
   }
module.exports.remove =  function remove(req, res) {
    return res.json({});
   }