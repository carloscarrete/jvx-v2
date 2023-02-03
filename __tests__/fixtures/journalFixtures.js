export const initialState = {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null
}

export const stateAddNewNote = {
        title: 'Titulo de prueba',
        body: 'Body text, this is an example',
        id: 'ODYowxKdsyBntqzHJTz6',
        date: new Date().getDate(),
        imageUrls: [
                'https://ramenparados.com/wp-content/uploads/2022/05/KonoSuba-Presentation-de-la-figure-estivale-de-Megumin.jpeg'
        ],
        active: null
}

export const stateSetActiveNote = {
        title: 'Titulo de prueba',
        body: 'Body text, this is an example',
        id: 'ODYowxKdsyBntqzHJTz6',
        date: new Date().getDate(),
        imageUrls: [
                'https://ramenparados.com/wp-content/uploads/2022/05/KonoSuba-Presentation-de-la-figure-estivale-de-Megumin.jpeg'
        ],
        active: [
                {
                        title: 'Titulo de prueba',
                        body: 'Body text, this is an example',
                        id: 'ODYowxKdsyBntqzHJTz6',
                        date: new Date().getDate(),
                        imageUrls: [
                                'https://ramenparados.com/wp-content/uploads/2022/05/KonoSuba-Presentation-de-la-figure-estivale-de-Megumin.jpeg'
                        ],
                }
        ]
}

export const exampleNote = {
        title: 'Titulo de prueba',
        body: 'Body text, this is an example',
        id: 'ODYowxKdsyBntqzHJTz6',
        date: new Date().getDate(),
        imageUrls: [
                'https://ramenparados.com/wp-content/uploads/2022/05/KonoSuba-Presentation-de-la-figure-estivale-de-Megumin.jpeg'
        ]
}
