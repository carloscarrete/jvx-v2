
export const fileUpload = async  (file) => {

    const urlCloud = 'https://api.cloudinary.com/v1_1/dhvzckunv/upload';

    if(!file) throw new Error('No se ha seleccionado ninguna imágen');

    const formData = new FormData();
    formData.append('upload_preset', 'react-rtx');
    formData.append('file', file);

    try{

        const res = await fetch(urlCloud, {
            method: 'POST',
            body: formData
        })

        if(!res.ok) throw new Error('No se ha podido subir la imágen');

        const imageResponse = await res.json();
        return imageResponse.secure_url;

    }catch(error){
        console.log(error)
        throw new Error(error.message);
    }

}