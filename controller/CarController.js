import Car from "../models/CarModel.js";

export const getAllCar = async (req, res) => {
    try{
        const car = await Car.findAll();    
        res.status(200).json(car)
    } catch(error){
        res.status(500).json({error: error.message, message: "terjadi kesalahan saat getAllCar"})
    }
};

export const getCarById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const car = await Car.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!car) {
            return res.status(404).json({ message: "Car tidak ditemukan" });
        }
        res.status(200).json(car);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createCar = async (req, res) => {
    try {
        const { brand, model, price } = req.body;
        const car = await Car.create({ brand, model, price });
        res.status(201).json({
            message: "Car berhasil dibuat",
            data: car
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat Car",
            error: error.message
        });
    }
};

export const updateCar = async (req, res) => {
    try {
        const { brand, model, price } = req.body
        const data = await Car.update({ brand, model, price }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate Car"})
    }

}


export const deleteCar = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await Car.destroy({where: {id: id}});
        res.status(200).json(` Car ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus Car"})
    }
}