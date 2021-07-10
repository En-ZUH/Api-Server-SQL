'use strict';

const express = require('express');
const router = express.Router();

const ClothesModel = require('../models/clothes');
const Clothes = require('../models/data-collection-class');

const clothesData = new Clothes(ClothesModel, 'clothes');


const validator = require('../middleware/validator.js');


// http://localhost:4500/api/v1/clothes/ 

//_________________________________________________________________________


let createClothes = async (request, response, next) => {

    try {
        let clothesObj = request.body;
        const responseObj = await clothesData.create(clothesObj);
        response.status(201).json(responseObj.rows[0]);
    }
    catch (error) {
        next(error)
    };

}

//_________________________________________________________________________


let getClothes = async (request, response, next) => {
    try {
        const responseObj = await clothesData.get();
        if (responseObj.length === 0)
            response.json('No data yet');
        else
            response.json({ responseObj: responseObj.rows });
    }
    catch (error) { next(error) };

}

//_________________________________________________________________________


let getCertainClothes = async (request, response, next) => { //by id
    let id = request.params.id;
    try {
        const responseObj = await clothesData.get(id);
        response.json({ responseObj: responseObj.rows[0] });
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________

let updateClothes = async (request, response, next) => {
    let clothesObj = request.body;
    try {
        let id = request.params.id;
        const responseObj = await clothesData.update(id, clothesObj);
        response.json(responseObj.rows[0]);
    }
    catch (error) {
        next(error)
    };
}

//_________________________________________________________________________


let deleteClothes = async (request, response, next) => {
    try {
        let id = request.params.id;
        const responseObj = await clothesData.delete(id);
        response.json(responseObj.rows[0]);
    }
    catch (error) {
        next(error)
    };
};

//_________________________________________________________________________

router.get('/', getClothes);
router.get('/:id', getCertainClothes);
router.post('/', createClothes);
router.put('/:id', updateClothes);
router.delete('/:id', deleteClothes);

//_________________________________________________________________________


module.exports = router;
