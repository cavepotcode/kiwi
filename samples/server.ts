import { createKiwiServer, IKiwiOptions } from '../src/index';
import { TestController } from './test-controller';
import { TestController2 } from './test-controller2';
import { TestMiddleware } from './test-middlware';

function validateAuthentication(roles: Array<string>){
    console.log(roles);
    return true;
}

const options: IKiwiOptions = {
    controllers: [TestController, TestController2],
    authorization: validateAuthentication,
    middlewares: [TestMiddleware],
    cors: true,
    documentation: true,
    log: true,
    port: 8086
}
const server = createKiwiServer(options);