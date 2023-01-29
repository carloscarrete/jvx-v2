export const initialState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
}

export const authenticatedState = {
    status: 'authenticated',
    uid: 'KRT',
    email: 'carlos@gmail.com',
    displayName: 'Carlos',
    photoUrl: 'https://img.freepik.com/premium-photo/cute-anime-girl-relaxing-studying-cozy-room-with-open-window-forest_717588-108.jpg?w=1380',
    errorMessage: null,
}

export const notAuthenticatedState = {
    status: 'not-authenticated',
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMessage: null,
}

export const demoUser = {
    uid: 'KRT',
    email: 'carlos@gmail.com',
    displayName: 'Carlos',
    photoUrl: 'https://img.freepik.com/premium-photo/cute-anime-girl-relaxing-studying-cozy-room-with-open-window-forest_717588-108.jpg?w=1380',
}