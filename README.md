
# Journal Notebook | JVX2

Journal Notebook | JVX2 es una aplicación web que te permite llevar un diario personal en línea. Con esta aplicación, puedes crear, editar y eliminar notas, así como subir imágenes para enriquecer tus entradas. La aplicación está construida con React, Redux, Firebase y Material-UI.

## Características

- **Autenticación de usuarios**: Inicio de sesión y registro con correo electrónico y contraseña, o mediante Google.
- **Creación de notas**: Crea nuevas notas con un título y un cuerpo.
- **Edición de notas**: Edita tus notas existentes en cualquier momento.
- **Eliminación de notas**: Elimina las notas que ya no necesites.
- **Subida de imágenes**: Añade imágenes a tus notas para hacerlas más visuales.
- **Interfaz intuitiva**: Diseño limpio y fácil de usar basado en Material-UI.

## Tecnologías utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Redux**: Gestión del estado de la aplicación.
- **Firebase**: Autenticación y base de datos en tiempo real.
- **Material-UI**: Componentes de UI para un diseño moderno y responsive.
- **Vite**: Herramienta de construcción rápida para aplicaciones web modernas.

## Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/carloscarrete/jvx-v2.git
2.  Navega al directorio del proyecto:

	    cd jvx-v2
    
3.  Instala las dependencias:

	    npm install
    
4.  Crea un archivo  `.env`  en la raíz del proyecto y añade tus credenciales de Firebase:
    
	    VITE_APIKEY=tu_api_key
	    VITE_AUTHDOMAIN=tu_auth_domain
	    VITE_PROJECTID=tu_project_id
	    VITE_STORAGEBUCKET=tu_storage_bucket
	    VITE_MESSAGINGSENDERID=tu_messaging_sender_id
	    VITE_APPID=tu_app_id
    
5.  Inicia el servidor de desarrollo:

	    npm run dev
    
7.  Abre tu navegador y visita  `http://localhost:3000`  para ver la aplicación en funcionamiento.
    

## Estructura del proyecto

    carloscarrete-jvx-v2/
	├── index.html
	├── package.json
	├── vite.config.js
	├── .env-example
	├── public/
	│   └── _redirects
	└── src/
	    ├── JournalApp.jsx
	    ├── main.jsx
	    ├── styles.css
	    ├── auth/
	    │   ├── layouts/
	    │   │   └── AuthLayout.jsx
	    │   ├── pages/
	    │   │   ├── LoginPage.jsx
	    │   │   ├── RegisterPage.jsx
	    │   │   └── index.js
	    │   └── routes/
	    │       └── AuthRoutes.jsx
	    ├── firebase/
	    │   ├── config.js
	    │   └── providers.js
	    ├── helpers/
	    │   ├── fileUpload.js
	    │   ├── index.js
	    │   └── loadNotes.js
	    ├── hooks/
	    │   ├── index.js
	    │   ├── useCheckAuth.js
	    │   └── useForm.js
	    ├── journal/
	    │   ├── components/
	    │   │   ├── ImageGallery.jsx
	    │   │   ├── Navbar.jsx
	    │   │   ├── Sidebar.jsx
	    │   │   ├── SidebarItem.jsx
	    │   │   └── index.js
	    │   ├── layout/
	    │   │   └── JournalLayout.jsx
	    │   ├── pages/
	    │   │   └── JournalPage.jsx
	    │   ├── routes/
	    │   │   └── JournalRoute.jsx
	    │   └── views/
	    │       ├── NoteView.jsx
	    │       ├── NothingSelected.jsx
	    │       └── index.js
	    ├── router/
	    │   └── AppRouter.jsx
	    ├── store/
	    │   ├── index.js
	    │   ├── store.js
	    │   ├── auth/
	    │   │   ├── authSlice.js
	    │   │   ├── index.js
	    │   │   └── thunks.js
	    │   └── journal/
	    │       ├── index.js
	    │       ├── journalSlice.js
	    │       └── thunks.js
	    ├── theme/
	    │   ├── AppTheme.jsx
	    │   ├── index.js
	    │   └── purpleTheme.js
	    └── ui/
	        ├── index.js
	        └── components/
	            └── CheckAuth.jsx

## Capturas
### Pantalla inicial para agregar o visualizar nota
![Pantalla inicial](https://raw.githubusercontent.com/carloscarrete/jvx-v2/refs/heads/main/captures/nota1.png)


### Editar o agregar nota
![Editar nota](https://github.com/carloscarrete/jvx-v2/blob/main/captures/nota2.png?raw=true)

### Nota agregada
![Nota agregada](https://github.com/carloscarrete/jvx-v2/blob/main/captures/nota3.png?raw=true)

## Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:
1.  Haz un fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`).
3.  Realiza tus cambios y haz commit (`git commit -am 'Añade nueva funcionalidad'`).    
4.  Haz push a la rama (`git push origin feature/nueva-funcionalidad`).   
5.  Abre un Pull Request.
## Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo  [LICENSE](https://license/)  para más detalles.