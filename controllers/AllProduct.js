import { products } from "../models/Product";
export const AllProduct = async (req, res) => {
    try {
        if (products && products.length) {
            return res.status(200).json({
                message: "Lay san pham thanh cong !",
                data: products
            })
        }
        return res.status(500).json({
            message: "Khong tim thay san pham"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}

export const getDetailProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = products.find(item => item.id === id)
        if (product) {
            return res.status(200).json({
                message: "Lay san pham thanh cong !",
                data: product
            })
        }
        return res.status(405).json({
            message: "Khong tim thay san pham"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const product = products.filter(item => item.id !== id)
        if (product) {
            return res.status(200).json({
                message: "Xoa san pham thanh cong !",
                data: product
            })
        }
        return res.status(405).json({
            message: "Khong tim thay san pham"
        })
    } catch (error) {
        return res.status(500).json({
            message: "Loi server"
        })
    }
}
