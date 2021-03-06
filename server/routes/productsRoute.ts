import {Router} from 'express'
import {Products} from '../controllers/productsController';
const productsRoute = new Products();

const router = Router();


router.get('/', (req, res) => {
    productsRoute.getProducts(req, res);
})

router.get('/:id', (req, res) => {
    productsRoute.getProductById(req, res);
})

router.get('/search/:searchValue', (req, res) => {
    productsRoute.search(req, res);
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

export default router;
