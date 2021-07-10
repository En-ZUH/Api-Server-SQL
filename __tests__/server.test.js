'use strict';
require('dotenv').config();

const server = require('../src/server');

const supergoose = require('@code-fellows/supergoose');
const request = supergoose(server.server);
let id;

describe('api server', () => {

    it(('Test home page'), async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Welcome to home page 4');

    });


    it(('test clothes'), async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });


});

//____________________________________________________________________

describe('Testing Clothes', () => {

    // it(('test empty clothes'), async () => {
    //     const response = await request.get('/api/v1/clothes');
    //     console.log('response empty array', response.body.responseObj);
    //     expect(response.status).toEqual(200);
    //     expect(response.body.responseObj).toEqual('No data yet');
    // });

    it(('test create clothes'), async () => {
        const data = { name: 'men', price: 'shirt' };

        const response = await request.post('/api/v1/clothes').send(data);
        // console.log('response create7777777777777777', response.body.id);
        // id = response.body.responseObj.id;

        expect(response.status).toEqual(201);
        expect(response.body.price).toEqual('shirt');
    });

    it(('test create clothes'), async () => {
        const response = await request.post('/api/v1/clothes').send({
            name: 'men',
            price: 'shirt',
        });
        id = response.body.id;
        console.log('IIIIIIIIIIIIIIIIIIIId', id);
        //console.log('rsponse create', response.body.responseObj, 'ID=', response.body);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('men');
    });

    it(('get by ID'), async () => {
        //  console.log('ID', id);

        const response = await request.get(`/api/v1/clothes/${id}`);
        // id = response.body.id;
        //  console.log('response id', response.body.responseObj);
        //console.log('IIIIIIIIIIIIIIIIIIIId', id);
        // console.log('boooooooooooooooody', response.body);
        expect(response.status).toEqual(200);
        expect(response.body.responseObj.price).toEqual('shirt');
    });

    it(('test update clothes'), async () => {
        const response = await request.put(`/api/v1/clothes/${id}`).send({
            name: 'men',
            price: 'shirt55555'
        });
        console.log('boooooooooooooooody', response.body);
        expect(response.status).toEqual(200);
        expect(response.body.price).toEqual('shirt55555');
    });

    it(('test update clothes'), async () => {
        const response = await request.delete(`/api/v1/clothes/${id}`);


        expect(response.status).toEqual(200);

    });
    it(('get by ID'), async () => {
        //console.log('ID', id);

        const response = await request.get(`/api/v1/clothes/${id}`);
        // console.log('response id', response.body.responseObj);
        expect(response.status).toEqual(200);

    });

});


describe('api server', () => {

    it(('Test home page'), async () => {
        const response = await request.get('/');
        expect(response.status).toEqual(200);
        expect(response.text).toEqual('Welcome to home page 4');

    });


    it(('test food'), async () => {
        const response = await request.get('/foo');
        expect(response.status).toEqual(404);
    });



});

//____________________________________________________________________

describe('Testing food', () => {

    // it(('test empty food'), async () => {
    //     const response = await request.get('/api/v1/food');
    //     console.log('response empty array', response.body.responseObj);
    //     expect(response.status).toEqual(200);
    //     expect(response.body.responseObj).toEqual('No data yet');
    // });

    it(('test create food'), async () => {
        const data = { name: 'sweets', price: 'cake' };

        const response = await request.post('/api/v1/food').send(data);
        //console.log('response create', response.body.responseObj);
        expect(response.status).toEqual(201);
        expect(response.body.price).toEqual('cake');
    });

    it(('test create food'), async () => {
        const response = await request.post('/api/v1/food').send({
            name: 'sweets',
            price: 'cake',
        });
        id = response.body.id;
        // console.log('response create', response.body.responseObj, 'id=======', id);
        expect(response.status).toEqual(201);
        expect(response.body.name).toEqual('sweets');
    });

    // it(('get by ID'), async () => {
    //     //console.log('ID', id);

    //     const response = await request.get(`/api/v1/food/${id}`);
    //     id = request.body.id;
    //     console.log('IDDDDDDDDDDDDDDDDDDDDDDDDDD', id)
    //     // console.log('response id', response.body.responseObj);
    //     expect(response.status).toEqual(200);
    //     // expect(response.body.responseObj.price).toEqual('cake');
    // });

    it(('test update food'), async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({
            name: 'sweets',
            price: 'chocolate',
        });

        expect(response.status).toEqual(200);
        expect(response.body.price).toEqual('chocolate');
    });

    it(('test update food'), async () => {
        const response = await request.delete(`/api/v1/food/${id}`);
        // expect(response.status).toEqual(200);

    });


});