import User from "../models/UserModel.js";

export const getAllUser = async (req, res) => {
    try{
        const user = await User.findAll();    
        res.status(200).json(user)
    } catch(error){
        res.status(500).json({error: error.message, message: "terjadi kesalahan saat getAllUser"})
    }
};

export const getUserById = async (req, res) => {
    try {
        const {id} = req.params; // Mengambil ID dari parameter URL
        const user = await User.findByPk(id); // Menggunakan findByPk untuk mencari berdasarkan primary key
        if (!user) {
            return res.status(404).json({ message: "User tidak ditemukan" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: "Terjadi kesalahan saat mengambil id", error: error.message });
    }
};


export const createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await User.create({ username, email, password });
        res.status(201).json({
            message: "User berhasil dibuat",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: "Gagal membuat User",
            error: error.message
        });
    }
};

export const updateUser = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const data = await User.update({ username, email, password }, {
            where: {
                id: req.params.id
            }
        })
        res.status(200).json("data berhasil terupdate");
    } catch (err) {
        res.status(500).json({err: err.message, message: "gagal mengupdate User"})
    }

}


export const deleteUser = async (req, res) => {
    try{
        const { id } = req.params;
        const deleted = await User.destroy({where: {id: id}});
        res.status(200).json(` User ke ${id} berhasil dihapus`)
    }catch(error){
        res.status(500).json({error: error.message, message: "gagal menghapus User"})
    }
}