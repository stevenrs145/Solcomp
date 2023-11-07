//Router es una clase proporcionada por el framework 
//Express que permite definir y organizar las rutas de 
//una aplicación web. Al utilizar la desestructuración ({Router}), 
//estamos extrayendo específicamente la clase Router del módulo express.
const {Router} = require('express');
const { 
    getClientes
    /* getmodeloById,
    postmodelo,
    putmodeloById,
    deletemodelo,  */

} = require('../controller/clientes');
//Aquí se crea una instancia de la clase Router 
const router = Router();

router.get('/allClients',getClientes);
/* router.get('/modelo/:id', getmodeloById);
router.post('/modelos', postmodelo);
router.put('/modelo/:id', putmodeloById);
router.delete('/modelo/:id', deletemodelo); */


module.exports = router;