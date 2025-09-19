const fs = require('fs');
const readln=require('readline');
const rl=readln.createInterface({
    input:process.stdin,
    output:process.stdout,
});
const datapath='./data/contact.json';
if (!fs.existsSync(datapath)){
    fs.writeFileSync(datapath,'[]','utf-8');
}

rl.question ('Masukan Nama Anda: ', (nama)=>{
    rl.question ('Masukan Umur Anda: ', (umur)=>{
        rl.question ('Masukan Alamat Anda: ', (alamat)=>{
            rl.question ('Masukan Golongan Darah Anda: ', (goldar)=>{
        console.log(`Terima Kasih, Saudara ${nama} yang berumur ${umur} tahun,`)
        console.log(`dengan Golongan Darah ${goldar}, dan berasal dari ${alamat}`);
        const kontak={nama:nama, umur:umur, alamat:alamat, goldar:goldar};
        const file=fs.readFileSync('data/contact.json', 'utf-8');
        const kontaks=JSON.parse(file);
        kontaks.push(kontak);
        fs.writeFileSync('data/contact.json',JSON.stringify(kontaks, null, 2));
    rl.close()
})})})});