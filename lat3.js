const readln=require('readline');
const rl=readln.createInterface({
    input:process.stdin,
    output:process.stdout,
});

rl.question ('Masukan Nama Anda: ', (nama)=>{
    rl.question ('Masukan Umur Anda: ', (umur)=>{
        rl.question ('Masukan Alamat Anda: ', (alamat)=>{
            rl.question ('Masukan Golongan Darah Anda: ', (goldar)=>{
    console.log(`Terima Kasih, Saudara ${nama} yang berumur ${umur} tahun,`)
        console.log(`dengan Golongan Darah ${goldar}, dan berasal dari ${alamat}`);
    rl.close()
})})})});