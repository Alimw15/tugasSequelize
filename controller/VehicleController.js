import Vehicle from "../models/VehicleModel.js";

export const getAllVehicle = async (req, res) => {
    try{
        const vehicle = await Vehicle.findAll();    
        res.status(200).json(vehicle)
    } catch(error){
        res.status(500).json({error: error.message, message: "terjadi kesalahan saat getAllPayment"})
    }
};

export const getVehicleById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const vehicle = await Vehicle.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!vehicle) {
            return res.status(404).json({ message: "Vehicle tidak ditemukan" });
        }
        res.status(200).json(vehicle);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createVehicle = async (req, res) => {
    try {
        const { brand, model, price } = req.body;
        const vehicle = await Vehicle.create({ brand, model, price });
        res.status(201).json({
            message: "Vehicle berhasil dibuat",
            data: customer
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat Vehicle",
            error: error.message
        });
    }
};

export const updateVehicle = async (req, res) => {
    try {
        const { brand, model, price } = req.body
        const data = await Vehicle.update({ brand, model, price }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Vehicle"})
    }

}


export const deleteVehicle = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Vehicle.destroy({where: {id: id}});
        res.status(200).json(` Vehicle ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Vehicle"})
    }
}