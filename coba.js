function cetakNama(nama) {
    return `Halo, nama saya ${nama}`;
}
const PI=3.14;
let mahasiswa={nama:"Budi",alamat:"Jakarta", cetakMhs(){
    return `Halo,saya ${this.nama} berasal dari  ${this.alamat}`;
}
};

module.exports.cetakNama = cetakNama;
module.exports.PI=PI;
module.exports.mahasiswa=mahasiswa;