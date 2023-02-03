import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
import 'setimmediate';
import { getEnviroments } from './src/helpers/getEnviroment';


require('dotenv').config({
    path: '.env.test'
})

jest.mock('./src/helpers/getEnviroment', ()=>({
    getEnviroments: () => ( {...process.env} )
}))