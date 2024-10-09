# Penerapan Sequelize dalam Sistem Manajemen Penjualan Mobil 🚘

<br>

**Nama:** Alim Wijaya <br>
**Kelas:** XII PPLG <br>
<br>


# DESKRIPSI PROJECT : 

API Sistem Manajemen Penjualan Mobil adalah sebuah RESTful API yang dikembangkan menggunakan Express.js sebagai framework backend dan Sequelize sebagai ORM untuk mengelola database relasional. API ini dirancang untuk mengotomatisasi dan mempermudah pengelolaan penjualan mobil, mulai dari pencatatan pelanggan, manajemen stok kendaraan, hingga pemrosesan transaksi dan pembayaran.

# FITUR

# 1. CRUD Car (Mobil)
- Create: Tambahkan mobil baru ke dalam inventaris, termasuk atribut seperti id, brand, model, dan price.
- Read: Lihat informasi tentang mobil yang ada di dalam inventaris, seperti merek, model, dan harga.
- Update: Perbarui detail mobil, seperti perubahan merek, model, atau harga.
- Delete: Hapus mobil dari inventaris jika sudah tidak tersedia lagi atau telah terjual.
# 2. CRUD Order (Pesanan)
- Create: Buat pesanan baru yang berisi informasi seperti id, orderDate, serta relasi dengan CustomerId, CarId, dan SalesPersonId.
- Read: Ambil atau lihat daftar pesanan yang ada, bisa difilter berdasarkan pelanggan, mobil, atau penjual.
- Update: Perbarui detail pesanan, seperti tanggal pesanan atau mengganti mobil yang dipesan jika ada perubahan.
- Delete: Hapus pesanan jika transaksi dibatalkan atau terjadi kesalahan pada data pesanan.
# 3. CRUD Customer (Pelanggan)
- Create: Tambahkan pelanggan baru ke dalam sistem dengan atribut seperti id, name, email, dan phone.
- Read: Ambil atau lihat detail pelanggan, seperti nama, email, dan nomor telepon, serta riwayat pesanan yang mereka lakukan.
- Update: Perbarui informasi pelanggan, seperti perubahan email atau nomor kontak.
- Delete: Hapus data pelanggan dari sistem jika tidak lagi diperlukan atau mereka sudah tidak aktif.
# 4. CRUD SalesPerson (Sales/ Pegawai Penjual)
- Create: Tambahkan data pegawai penjual baru dengan atribut seperti id, name, email, dan phone.
- Read: Ambil informasi tentang penjual, termasuk nama, email, dan nomor telepon.
- Update: Perbarui informasi pegawai, seperti email atau nomor telepon.
- Delete: Hapus data pegawai jika mereka sudah tidak bekerja lagi atau tidak diperlukan.
# 5. CRUD Invoice (Faktur)
- Create: Tambahkan faktur baru untuk pesanan yang sudah dilakukan, dengan atribut seperti id, invoiceNumber, totalAmount, dan relasi ke OrderId.
- Read: Lihat daftar faktur yang ada atau detail faktur untuk pesanan tertentu.
- Update: Perbarui informasi faktur, seperti jumlah total atau nomor faktur jika ada perubahan.
- Delete: Hapus faktur jika terdapat kesalahan input atau faktur dibatalkan.

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

