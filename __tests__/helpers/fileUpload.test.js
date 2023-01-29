import { v2 as cloudinary } from 'cloudinary'

import { fileUpload } from "../../src/helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dhvzckunv', 
    api_key: '938272328469324', 
    api_secret: '5Wy7AR4PWxZXYlc1hXMT_9UsiBA',
    secure: true
  });

describe('Pruebas en el archivo fileUpload', () => {

    test('Subida de imágen a Cloudinary', async () => {

        const imageUrl = 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1465&q=80';
        const resp = await fetch(imageUrl);
        const imageBlob = await resp.blob();
        const file = new File([imageBlob], 'image.jpg');

        const url = await fileUpload(file);
        expect(url).toEqual(expect.any(String));

        const splittedImage = url.split('/');
        const idImage = splittedImage[splittedImage.length-1].replace('.jpg','');

        const imageDeleteRes = await cloudinary.api.delete_resources(['react-rtx/'+idImage]);

    })

    test('Retorna un valor de null', async () => {
        const file = new File([], 'image.jpg');
        const url = await fileUpload(file);
        expect(url).toBe(null);
    })
});