const { tracksModel, usersModel, storageModel } = require("../models") 
const mongoose = require("mongoose");


// TODO | GET ALL
const getItems = async (req, res) => {
    const data = await tracksModel.find({});
    res.send({data});
}


// TODO | GET ONE
const getItem = async (req, res) => {
}


// TODO | POST ONE
const createItem = async (req, res) => {
    const { body } = req;
    const data = await tracksModel.create(body);
    res.send({data});
}


// TODO | PUT ONE
const updateItem = async (req, res) => {}


// TODO | DELETE ONE
const deleteItem = async (req, res) => {}


module.exports = { getItems , getItem, createItem, updateItem, deleteItem };