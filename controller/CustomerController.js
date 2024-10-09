import Customer from "../models/CustomerModel.js";

export const getAllCustomer = async (req, res) => {
    try{
        const customer = await Customer.findAll();
        res.status(200).json(customer)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllCustomer"})
    }
};

export const getCustomerById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const customer = await Customer.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!customer) {
            return res.status(404).json({ message: "Customer tidak ditemukan" });
        }
        res.status(200).json(customer);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const customer = await Customer.create({ name, email, phone });
        res.status(201).json({
            message: "Customer berhasil dibuat",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat customer",
            error: error.message
        });
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const { name, email, phone } = req.body
        const data = await Customer.update({ name, email, phone }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Customer"})
    }

}


export const deleteCustomer = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Customer.destroy({where: {id: id}});
        res.status(200).json(` Customer ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Customer"})
    }
}