# Penerapan Sequelize dalam Sistem Manajemen Penjualan Mobil 🚘

<br>

**Nama:** Alim Wijaya <br>
**Kelas:** XII PPLG <br>
<br>


# DESKRIPSI PROJECT : 

API Sistem Manajemen Penjualan Mobil adalah sebuah RESTful API yang dikembangkan menggunakan Express.js sebagai framework backend dan Sequelize sebagai ORM untuk mengelola database relasional. API ini dirancang untuk mengotomatisasi dan mempermudah pengelolaan penjualan mobil, mulai dari pencatatan pelanggan, manajemen stok kendaraan, hingga pemrosesan transaksi dan pembayaran.

# FITUR

# 1. CRUD Vehicle (Mobil)
- Create: Tambahkan mobil baru ke dalam inventaris, termasuk atribut seperti vehicleId, brand, model, dan vehicle (jenis kendaraan).
- Read: Lihat informasi tentang kendaraan yang ada di dalam inventaris, seperti merek, model, dan tipe kendaraan.
- Update: Perbarui detail kendaraan, seperti perubahan merek, model, atau jenis kendaraan.
- Delete: Hapus mobil dari inventaris jika sudah tidak tersedia lagi atau telah terjual.
# 2. CRUD Order (Pesanan)
- Create: Buat pesanan baru yang berisi informasi seperti orderId, orderDate, orderAmount, serta relasi dengan customerId, vehicleId, dan salesPersonId.
- Read: Ambil atau lihat daftar pesanan yang ada, bisa difilter berdasarkan pelanggan, kendaraan, atau penjual.
- Update: Perbarui detail pesanan, seperti jumlah pesanan atau mengganti kendaraan yang dipesan jika ada perubahan.
- Delete: Hapus pesanan jika transaksi dibatalkan atau terjadi kesalahan pada data pesanan.
# 3. CRUD Customer (Pelanggan)
- Create: Tambahkan pelanggan baru ke dalam sistem dengan atribut seperti customerId, name, email, dan address.
- Read: Ambil atau lihat detail pelanggan, seperti nama, alamat, dan email, serta riwayat pesanan yang mereka lakukan.
- Update: Perbarui informasi pelanggan, seperti perubahan alamat atau nomor kontak.
- Delete: Hapus data pelanggan dari sistem jika tidak lagi diperlukan atau mereka sudah tidak aktif.
# 4. CRUD SalesPerson (Sales/ Pegawai Penjual)
- Create: Tambahkan data pegawai penjual baru dengan atribut seperti salesPersonId, name, phoneNumber, dan commisionRate.
- Read: Ambil informasi tentang penjual, termasuk nama, nomor telepon, dan persentase komisi penjualan yang mereka terima.
- Update: Perbarui informasi pegawai, seperti nomor telepon atau tingkat komisi.
- Delete: Hapus data pegawai jika mereka sudah tidak bekerja lagi atau tidak diperlukan.
# 5. CRUD Payment (Pembayaran)
- Create: Tambahkan pembayaran baru untuk pesanan yang sudah dilakukan, dengan atribut seperti paymentId, paymentDate, paymentAmount, dan relasi ke orderId.
- Read: Lihat daftar pembayaran yang ada atau detail pembayaran untuk pesanan tertentu.
- Update: Perbarui informasi pembayaran, seperti jumlah yang dibayar atau tanggal pembayaran jika ada perubahan.
- Delete: Hapus pembayaran jika terdapat kesalahan input atau pembayaran dibatalkan.

## Dependencies / Teknologi yang digunakan

1. **express**

    Express JS sebagai framework Node.js untuk mengelola request dan response HTTP

    ```bash
   npm i express
    ```

2. **mysql2**

    package untuk melakukan koneksi ke database

    ```bash
    npm i mysql2
    ```

3. **dotenv**

    Dotenv untuk mengatur variabel lingkungan
    ```bash
    npm i dotenv
    ```

4. **cors**

    Untuk memberikan akses pada frontend

    ```bash
    npm i cors
    ```
5. **sequelize**

    Sebagai Orm yang dipakai

    ```bash
    npm i sequelize

6. **body parser**

    Berfungsi untuk membuat data dapat diakses melalui `req.body` .

    ```bash
    npm install body-parser
    ```


7. **nodemon**

    jalankan dengan mengetikan perintah ( nodemon index / npm run dev )

    ```bash
    npm install nodemon
    ```

    Perintah ini akan menjalankan server secara terus menerus

    Aplikasi akan berjalan pada port yang ditentukan di file `.env` .

    <br>


    ## Cara Penggunaan

1. Pastikan Node.js dan npm telah terinstall di komputer Anda.
2. Clone atau download projek ini ke direktori lokal Anda.
3. Jalankan `npm install` untuk menginstall dependensi yang diperlukan.
4. Buat file `env` dan beri variabel PORT dan DB_NAME (sesuai nama database).
5. Jalankan `node models/index.js` untuk membuat Table.
6. Untuk melakukan testing / mengisi contoh data jalankan `node seeders/seeders.js` (opsional).
6. Jika table database sudah dibuat jalankan aplikasi dengan command `node index.js` / `nodemon index.js`.
7. Aplikasi akan berjalan di `http://localhost:PORT`, dengan PORT adalah nomor port yang ditentukan dalam file `.env`.

<br>

- **Class Diagram**

<img src="./img/Screenshot 2024-09-13 232424.png" />

<br>

- **ERD (Entity Relationship Diagram)**

<img src="" />
<br>


- **Relasi Table**

<img src="./img/Screenshot 2024-09-16 170807.png" />

<br>

Terima Kasih

 
