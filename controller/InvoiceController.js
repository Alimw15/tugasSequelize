import Invoice from "../models/InvoiceModel.js";

export const getAllInvoice = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.status(200).json(invoices);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil semua Invoice", error: error.message });
    }
};

export const getInvoiceById = async (req, res) => {
    try {
        const { id } = req.params;
        const invoice = await Invoice.findByPk(id);
        if (!invoice) {
            return res.status(404).json({ message: "Invoice tidak ditemukan" });
        }
        res.status(200).json(invoice);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil Invoice", error: error.message });
    }
};

export const createInvoice = async (req, res) => {
    try {
        const { invoiceNumber, totalAmount } = req.body;
        const invoice = await Invoice.create({ invoiceNumber, totalAmount });
        res.status(201).json({
            message: "Invoice berhasil dibuat",
            data: invoice
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat Invoice",
            error: error.message
        });
    }
};

export const updateInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const { invoiceNumber, totalAmount } = req.body;
        const [updated] = await Invoice.update(
            { invoiceNumber, totalAmount },
            { where: { id } }
        );
        if (updated) {
            const updatedInvoice = await Invoice.findByPk(id);
            res.status(200).json({ message: "Invoice berhasil diperbarui", data: updatedInvoice });
        } else {
            res.status(404).json({ message: "Invoice tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({ message: "Gagal memperbarui Invoice", error: error.message });
    }
};

export const deleteInvoice = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Invoice.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: `Invoice dengan ID ${id} berhasil dihapus` });
        } else {
            res.status(404).json({ message: "Invoice tidak ditemukan" });
        }
    } catch (error) {
        res.status(500).json({ message: "Gagal menghapus Invoice", error: error.message });
    }
};