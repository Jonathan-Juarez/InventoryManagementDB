#API básica en Node.js con Express y MongoDB

##Funcionamiento
El funcionamiento de este trabajo se conforma por una estructura específica para una compresión eficiente del código de la API. La estructura se encuentra con el config que conecta al servidor local mongoDB, los modelos que poseen la estructura del documento de dica colección, los controladores que contienen las funciones del CRUD y se exporta para que el enrutador proporcione rutas que utilizará el servidor que permitirá usar el API. Para agregar documentos se realiza por medio de Thunder Client.

##Tecnologías empleadas
Se utiliza Node.js es un entorno de ejecución de JavaScript.
Se consulta a diversas páginas web para conocer sobre los códigos de estado HTTP, la estructura que requiere un README y algunos páquetes que se pueden implementar, pero no se toman en cuenta por más falta de investigación. A continuacion las fuentes:
Códigos de estado HTTP
https://www.dotcom-monitor.com/wiki/es/knowledge-base/http-status-codes/
Crear un README
https://www.corecode.school/blog/como-crear-un-buen-readme
morgan: Simplifica el proceso de registro de solicitudes HTTP en una aplicación Node.js al generar automáticamente registros para las solicitudes entrantes. 
https://www.geeksforgeeks.org/what-is-morgan-in-node-js/
mongoose: Gestiona las relaciones entre los datos, proporciona validación de esquemas y se utiliza para traducir entre objetos en código y la representación de esos objetos en MongoDB.
https://www.freecodecamp.org/news/introduction-to-mongoose-for-mongodb-d2a7aa593c57/ 

##Imágenes Thunder Client
Conectar con el servidor
![ConnectServer](/assets/ConnectServer.png)
Crear una categoría.
![CreateCategory](/assets/CreateCategory.png)
Resultados de crear una categoría vista en mongoDB Compass.
![CreateCategoryMongoDBCompass](/assets/CreateCategoryMongoDBCompass.png)
Crear un producto.
![CreateProduct](/assets/CreateProduct.png)
Crear un proveedor.
![CreateProvider](/assets/CreateProvider.png)
Crear un miembro del personal.
![CreateStaff](/assets/CreateStaff.png)
Crear un registro de una transacción.
![CreateTransactionLog](/assets/CreateTransactionLog.png)
Eliminar una categoría por ID.
![DeleteCategory](/assets/DeleteCategory.png)
Resultados de eliminar una categoría vista en mongoDB Compass.
![DeleteCategoryMongoDBCompass](/assets/DeleteCategoryMongoDBCompass.png)
Error al buscar una categoría por ID.
![ErrorFindCategoryID](/assets/ErrorFindCategoryID.png)
Buscar todas las categorías.
![FindCategory](/assets/FindCategory.png)
Buscar una categoría por ID.
![FindCategoryID](/assets/FindCategoryID.png)
Actualizar una categoría por ID.
![UpdateCategoryID](/assets/UpdateCategoryID.png)
Resultados de actualizar una categoría vista en mongoDB Compass.
![UpdateCategoryMongoDBCompass](/assets/UpdateCategoryMongoDBCompass.png)


##Manual de instalación 
```npm  init —yes```  Para inicializar. El —yes es para que todo lo que pregunte al ejecutarlo, automáticamente seleccione “yes”.

```npm i nodemon -D``` Para actualizar automáticamente.

```npm install express mongodb dotenv cors``` express permite manejar rutas y peticiones en el servidor. mongodb permite conectarse a una DB MongoDB. dotenv permite usar variables de entorno desde un archivo .env. cors permite que la API sea accesible desde otros dominios.

```npm run dev``` Para conectarse al servidor.