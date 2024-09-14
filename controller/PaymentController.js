import Payment from "../models/PaymentModel.js";

export const getAllPayment = async (req, res) => {
    try{
        const payment = await Payment.findAll();
        res.status(200).json(payment)
    } catch(error){
        res.status(500).json({error: error.massage, message: "terjadi kesalahan saat getAllPayment"})
    }
};

export const getPaymentById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const payment = await Payment.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!payment) {
            return res.status(404).json({ message: "payment tidak ditemukan" });
        }
        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createPayment = async (req, res) => {
    try {
        const { paymentdate, amountpaid } = req.body;
        const payment = await Payment.create({ paymentdate, amountpaid });
        res.status(201).json({
            message: "Payment berhasil dibuat",
            data: payment
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat Payment",
            error: error.message
        });
    }
};

export const updatePayment = async (req, res) => {
    try {
        const { paymentdate, amountpaid } = req.body
        const data = await Payment.update({ paymentdate, amountpaid }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Payment"})
    }

}


export const deletePayment = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Payment.destroy({where: {id: id}});
        res.status(200).json(` Payment ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Payment"})
    }
}