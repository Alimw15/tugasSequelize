import SalesPerson from "../models/SalesPersonModel.js";

export const getAllSalesPerson = async (req, res) => {
    try{
        const salesperson = await SalesPerson.findAll();
        res.status(200).json(salesperson)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllSalesPerson"})
    }
};

export const getSalesPersonById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const salesperson = await SalesPerson.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!salesperson) {
            return res.status(404).json({ message: "SalesPerson tidak ditemukan" });
        }
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createSalesPerson = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const salesperson = await SalesPerson.create({ name, email, phone });
        res.status(201).json({
            message: "SalesPerson berhasil dibuat",
            data: salesperson
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat salesperson",
            error: error.message
        });
    }
};

export const updateSalesPerson = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const data = await SalesPerson.update({ name, email, phone }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate SalesPerson"})
    }

}


export const deleteSalesPerson = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await SalesPerson.destroy({where: {id: id}});
        res.status(200).json(` SalesPerson ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus SalesPerson"})
    }
}