// Kelas induk (superclass)
class Hewan {
  constructor(nama, jenis) {
    this.nama = nama;
    this.jenis = jenis;
  }
  suara() {
    return `${this.nama} bersuara...`;
  }
}

class Kucing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Kucing"); // Memanggil constructor superclass
    this.warna = warna;
  }
}

const milo = new Kucing("Milo", "Putih");
console.log(milo.nama);  
console.log(milo.jenis); 
console.log(milo.suara());

class Anjing extends Hewan {
  constructor(nama, warna) {
    super(nama, "Anjing");
    this.warna = warna;
  }
  suara() {
    return `${this.nama} menggonggong: Woof woof!`;
  }
}

const doge = new Anjing("Doge", "Coklat");
console.log(doge.suara());

class Serigala extends Hewan {
  constructor(nama, warna) {
    super(nama, "Serigala");
    this.warna = warna;
  }
  suara() {
    return super.suara() + " Auuuuu~";
  }
}

const alpha = new Serigala("Alpha", "Abu-abu");
console.log(alpha.suara());

class Burung extends Hewan {
  constructor(nama) {
    super(nama, "Burung");
  }
  suara() {
    return `${this.nama} berkicau: Cip cip!`;
  }
}

const hewanList = [
  new Kucing("Milo", "Putih"),
  new Anjing("Buddy", "Hitam"),
  new Burung("Tweety")
];

hewanList.forEach(hewan => console.log(hewan.suara()));
