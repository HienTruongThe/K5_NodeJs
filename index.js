import express from 'express';
import axios from 'axios';
const app = express();
const port = 8000;
app.use(express.json());

const products = [
    {
        id: 1,
        name: "Product 1",
        price: 1000
    },
    {
        id: 2,
        name: "Product 2",
        price: 2000
    },
    {
        id: 3,
        name: "Product 3",
        price: 3000
    },
]

app.get("/products", (req, res) => {
    res.send({
        message: "Lay san pham thanh cong !",
        data: products,
    });
});

app.post("/products", (req, res) => {
    const body = req.body;
    products.push(body);
    res.send({
        message: "Them san pham thanh cong !",
        data: products,
    });
});

app.put("/products/:id", (req, res) => {
    const id = req.params.id;
    const body = req.body;
    console.log({ id, body });
    res.send({
        message: "Them san pham thanh cong !",
        data: products,
    });
});

app.delete("/products/:id", (req, res) => {
    const id = req.params.id;
    const newProduct = products.filter((item) => item.id !== +id);
    res.send({
        message: "Xoa san pham thanh cong !",
        data: newProduct,
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})