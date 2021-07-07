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

    it(('test empty clothes'), async () => {
        const response = await request.get('/api/v1/clothes');
        console.log('response empty array', response.body);
        expect(response.status).toEqual(200);
        expect(response.body).toEqual('No data yet');
    });

    it(('test creat clothes'), async () => {
        const data = { category: 'men', type: 'shirt' };

        const response = await request.post('/api/v1/clothes').send(data);
        console.log('response creat', response.body);
        expect(response.status).toEqual(201);
        expect(response.body.type).toEqual('shirt');
    });

    it(('test creat clothes'), async () => {
        const response = await request.post('/api/v1/clothes').send({
            category: 'men',
            type: 'shirt',
        });
        id = response.body._id;
        console.log('rsponse creat', response.body, 'ID=', id);
        expect(response.status).toEqual(201);
        expect(response.body.category).toEqual('men');
    });

    it(('get by ID'), async () => {
        console.log('ID', id);

        const response = await request.get(`/api/v1/clothes/${id}`);
        console.log('response id', response.body);
        expect(response.status).toEqual(200);
        expect(response.body.type).toEqual('shirt');
    });

    it(('test update clothes'), async () => {
        const response = await request.put(`/api/v1/clothes/${id}`).send({
            category: 'men',
            type: 'shirt55555',
        });

        expect(response.status).toEqual(200);
        expect(response.body.type).toEqual('shirt55555');
    });

    it(('test update clothes'), async () => {
        const response = await request.delete(`/api/v1/clothes/${id}`);


        expect(response.status).toEqual(200);

    });
    it(('get by ID'), async () => {
        console.log('ID', id);

        const response = await request.get(`/api/v1/clothes/${id}`);
        console.log('response id', response.body);
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
    //     console.log('response empty array', response.body);
    //     expect(response.status).toEqual(200);
    //     expect(response.body).toEqual('No data yet');
    // });

    it(('test creat food'), async () => {
        const data = { category: 'sweets', type: 'cake' };

        const response = await request.post('/api/v1/food').send(data);
        console.log('response creat', response.body);
        expect(response.status).toEqual(201);
        expect(response.body.type).toEqual('cake');
    });

    it(('test creat food'), async () => {
        const response = await request.post('/api/v1/food').send({
            category: 'sweets',
            type: 'cake',
        });
        id = response.body._id;
        console.log('response creat', response.body, 'id=======', id);
        expect(response.status).toEqual(201);
        expect(response.body.category).toEqual('sweets');
    });

    it(('get by ID'), async () => {
        console.log('ID', id);

        const response = await request.get(`/api/v1/food/${id}`);
        console.log('response id', response.body);
        expect(response.status).toEqual(200);
        // expect(response.body.type).toEqual('cake');
    });

    it(('test update food'), async () => {
        const response = await request.put(`/api/v1/food/${id}`).send({
            category: 'sweets',
            type: 'chocolate',
        });

        expect(response.status).toEqual(200);
        expect(response.body.type).toEqual('chocolate');
    });

    it(('test delete food'), async () => {
        const response = await request.delete(`/api/v1/food/${id}`);


        // expect(response.status).toEqual(200);

    });
    it(('get by ID'), async () => {
        console.log('ID', id);

        const response = await request.get(`/api/v1/food/${id}`);
        console.log('rsponse id', response.body);
        expect(response.status).toEqual(200);

    });

});