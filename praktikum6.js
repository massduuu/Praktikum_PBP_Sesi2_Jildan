const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Masukkan nama mahsiswa: ", function (nama_mahasiswa) {
rl.question("Masukkan nilai tugas: ", function (nilai_tugas) {
  nilai_tugas = parseInt(nilai_tugas);

rl.question("Masukkan nilai UTS: ", function (nilai_UTS) {
  nilai_UTS = parseInt(nilai_UTS);

rl.question("Masukkan nilai UAS: ", function (nilai_UAS) {
  nilai_UAS = parseInt(nilai_UAS);



const nilai_akhir = ((nilai_tugas * 0.3) + (nilai_UTS * 0.3) + (nilai_UAS * 0.4));

console.log("nilai akhir Anda :", nilai_akhir);

rl.close(); }); }); }); });
