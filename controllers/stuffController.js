const Thing = require("../models/things");


const  getStuff = (req, res, next) =>
{
    Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({error}));
};


const createStuff = (req, res, next) =>
{
    delete req.body._id;
    const thing = new Thing({
        ...req.body
    });
    thing
        .save()
        .then(() => res.status(201).json({message: 'Object saved!'}))
        .catch(error => res.status(400).json({error}));
}

const getOneStuff = (req, res, next) =>
{
    Thing
        .findOne({_id: req.params.id})
        .then(thing => res.status(200).json(thing))
        .catch(error => res.status(404).json({error}));
}


const deleteStuff = (req, res, next) =>
{
    Thing
        .deleteOne({_id: req.params.id})
        .then(() => res.status(200).json({message: 'Object deleted!'}))
        .catch(error => res.status(400).json({error}));
}

const putStuff = (req, res, next) =>
{
    Thing.updateOne({_id: req.params
        .id}, {...
        req.body, _id: req.params.id})
        .then(() => res.status(200).json({message: 'Object updated!'}))
        .catch(error => res.status(400).json({error}));

}


module.exports = {
    getStuff,
    createStuff,
    getOneStuff,
    deleteStuff,
    putStuff
};
