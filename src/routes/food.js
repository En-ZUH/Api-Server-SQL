'use strict';


const express = require('express');
const router = express.Router();
const foodModel = require('../models/food');
const Food = require('../models/data-collection-class');

const foodData = new Food(foodModel, 'food');

const validator = require('../middleware/validator.js');



// http://localhost:4500/api/v1/food/ 

//_________________________________________________________________________



let createFood = async (request, response, next) => {

    try {
        let foodObj = request.body;
        const responseObj = await foodData.create(foodObj);
        response.status(201).json(responseObj.rows[0]);
    }
    catch (error) { next(error) };

}

//_________________________________________________________________________


// let getFood = async (request, response, next) => {
//     try {
//         const responseObj = await foodData.get();
//         if (responseObj.length === 0)
//             response.json('No data yet');
//         else
//             response.json(responseObj.rows);
//     }
//     catch (error) { next(error) };

// }
async function getFood(req, res, next) {
    try {
        const id = req.params.id;
        const responseObj = await foodData.get(id);
        response.json({ responseObj: responseObj.rows });
    } catch (e) {
        next(e);
    }
}

//_________________________________________________________________________


// let getCertainFood = async (request, response, next) => { //by id
//     let id = request.params.id;
//     try {
//         const responseObj = await foodData.get(id);
//         response.json(responseObj.rows[0]);
//     }
//     catch (error) { next(error) };
// }

//_________________________________________________________________________

let updateFood = async (request, response, next) => {
    let foodObj = request.body;
    try {
        let id = request.params.id;
        const responseObj = await foodData.update(id, foodObj);
        response.json(responseObj.rows[0]);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________


let deleteFood = async (request, response, next) => {
    try {
        let id = request.params.id;
        const responseObj = await foodData.delete(id);
        response.json(responseObj.rows[0]);
    }
    catch (error) { next(error) };
}

//_________________________________________________________________________
//: /food

router.get('/', getFood);
router.get('/:id', getFood);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id', deleteFood);

//_________________________________________________________________________


module.exports = router;
