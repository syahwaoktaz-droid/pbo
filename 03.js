class Mahasiswa {
  constructor(nama, nim, jurusan) {

  this.nama = nama;
  this.nim = nim;
  this.jurusan = jurusan;
}
belajar() {
  console.log(`${this.nama} sedang belajar.`);
 }
}
const mhs1= new Mahasiswa('syahwa', 342, 'manajement');
mhs1.belajar();

const mhs2= new Mahasiswa('deska', 342, 'manajement');
mhs2.belajar();

