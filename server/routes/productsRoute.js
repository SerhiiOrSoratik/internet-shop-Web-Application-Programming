const Router = require('express');
const productsRoute = require('../controllers/productsController');
const router = new Router();


router.get('/', (req, res) => {
    productsRoute.getProducts(req, res);
})

router.post('/', (req, res) => {
    productsRoute.createProduct(req, res);
});

router.put('/:id', (req, res) => {
    productsRoute.updateProduct(req, res);
})

router.delete('/:id', (req, res) => {
    productsRoute.deleteProduct(req, res);
})

module.exports = router;
