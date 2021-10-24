import express from 'express';
import productData from './data.js';

const app = express();

app.get('/api/products/:slug', (req, res) => {
    const product = productData.getProductBySlug(req.params.slug);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product Not Found' });
    }
});

app.get('/api/products', (req, res) => {
    res.send(productData.getAllProducts());
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
});