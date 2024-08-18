import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/context/contracts/infrastructure/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let contractId: Number;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/contracts (GET)', () => {
    return request(app.getHttpServer())
      .get('/contracts')
      .expect(200)
  });


  it('/contracts (POST)', () => {
    return request(app.getHttpServer())
      .post('/contracts')
      .send({
        clientname: "test",
        email: "foo@bar.com",
        accountNumber: 777,
        amount: 10,
        currency: 'CLP'
      })
      .expect(201)
      .then(response => {
        expect(response.body.clientname).toEqual('test');
        expect(response.body.email).toEqual('foo@bar.com');
        expect(response.body.accountNumber).toEqual(777);
        expect(response.body.amount).toEqual(10);
        expect(response.body.currency).toEqual("CLP");
        contractId = response.body.id;
     })
  });


  it('/contracts/${id} (GET)', () => {
    return request(app.getHttpServer())
      .get(`/contracts/${contractId}`)
      .expect(200)
  });

  it('/contracts/${id} (GET)', () => {
    return request(app.getHttpServer())
      .get(`/contracts/99`)
      .expect(404)
  });

});
