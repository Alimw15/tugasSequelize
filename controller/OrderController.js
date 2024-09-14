import Order from "../models/OrderModel.js";

export const getAllOrder = async (req, res) => {
    try{
        const order = await Order.findAll();
        res.status(200).json(order)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllOrder"})
    }
};

export const getOrderById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const order = await Order.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!order) {
            return res.status(404).json({ message: "Order tidak ditemukan" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createOrder = async (req, res) => {
    try {
        const { orderdate, orderamount } = req.body;
        const order = await Order.create({ orderdate, orderamount });
        res.status(201).json({
            message: "Order berhasil dibuat",
            data: order
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat customer",
            error: error.message
        });
    }
};

export const updateOrder = async (req, res) => {
    try {
        const { orderdate, orderamount } = req.body
        const data = await Order.update({ orderdate, orderamount }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Order"})
    }

}


export const deleteOrder = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Order.destroy({where: {id: id}});
        res.status(200).json(` Order ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Order"})
    }
}