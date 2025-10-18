// Kelas abstrak (tidak bisa diinstansiasi langsung)
class Kendaraan {
  constructor(merk) {
    this.merk = merk;
    if (this.constructor === Kendaraan) {
      throw new Error("Kelas abstrak 'Kendaraan' tidak bisa diinstansiasi langsung.");
    }
  }

  // Method abstrak — harus diimplementasikan oleh subclass
  maju() {
    throw new Error("Method 'maju()' harus diimplementasikan oleh subclass!");
  }
}

// Subclass yang mengimplementasikan method abstrak
class Mobil extends Kendaraan {
  maju() {
    return `${this.merk} melaju dengan kecepatan tinggi!`;
  }
}

const avanza = new Mobil("Toyota Avanza");
console.log(avanza.maju()); // ✅ Toyota Avanza melaju dengan kecepatan tinggi!

// const kendaraanBaru = new Kendaraan("Generic"); // ❌ Error: Kelas abstrak tidak bisa diinstansiasi

// Interface sebagai blueprint manual
const kendaraanInterface = {
  maju: function () {
    throw new Error("Method 'maju()' harus diimplementasikan!");
  }
};

// Kelas lain yang sesuai dengan 'interface'
class Sepeda {
  constructor(merk) {
    this.merk = merk;
  }

  maju() {
    return `${this.merk} melaju dengan tenaga manusia!`;
  }
}

const polygon = new Sepeda("Polygon");
console.log(polygon.maju()); // ✅ Polygon melaju dengan tenaga manusia!

// Validasi sederhana apakah Sepeda mengikuti 'interface'
if (typeof polygon.maju !== "function") {
  throw new Error("Class Sepeda harus mengimplementasikan 'maju()'!");
}

// ======================================================
// Kelas abstrak untuk sistem pembayaran
class Pembayaran {
  constructor(jumlah) {
    this.jumlah = jumlah;
    if (this.constructor === Pembayaran) {
      throw new Error("Kelas abstrak 'Pembayaran' tidak bisa diinstansiasi langsung.");
    }
  }

  prosesPembayaran() {
    throw new Error("Method 'prosesPembayaran()' harus diimplementasikan!");
  }
}

// Subclass KartuKredit
class KartuKredit extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran sebesar Rp${this.jumlah} melalui Kartu Kredit berhasil!`;
  }
}

// Subclass PayPal
class PayPal extends Pembayaran {
  prosesPembayaran() {
    return `Pembayaran sebesar Rp${this.jumlah} melalui PayPal berhasil!`;
  }
}

// Implementasi
const bayar1 = new KartuKredit(500000);
console.log(bayar1.prosesPembayaran()); // Pembayaran sebesar Rp500000 melalui Kartu Kredit berhasil!

const bayar2 = new PayPal(250000);
console.log(bayar2.prosesPembayaran()); // Pembayaran sebesar Rp250000 melalui PayPal berhasil!
