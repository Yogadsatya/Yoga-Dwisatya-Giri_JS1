//if, else, nested if

var nilai = 90;

if (nilai >= 80) {
  console.log("Nilai yang anda peroleh adalah A");
} else if (nilai >= 70) {
  console.log("Nilai yang anda peroleh adalah B");
} else {
  console.log("Nilai yang anda peroleh adalah C");

}



//Switch Case
var hari = "Minggu";

switch (hari) {
  case "Senin":
    console.log("Hari ini adalah hari Senin.");
    break;
  case "Selasa":
    console.log("Hari ini adalah hari Selasa.");
    break;
  case "Rabu":
    console.log("Hari ini adalah hari Rabu.");
    break;
  case "Kamis":
    console.log("Hari ini adalah hari Kamis.");
    break;
  case "Jumat":
    console.log("Hari ini adalah hari Jumat.");
    break;
  case "Sabtu":
    console.log("Hari ini adalah hari Sabtu.");
    break;
  case "Minggu":
    console.log("Hari ini adalah hari Minggu.");
    break;
  default:
    console.log("Hari tidak valid.");
}

//Fot Statement
for (var y = 1; y <= 5; y++) {
    console.log("Perulangan yang ke-" + y);
  }
//while, do while
var y = 0;

do {
  console.log("Nilai j: " + y);
  j++;
} while (y < 5);

//function
var name = function(nama) {
    console.log("Hai Apa kabar, " + nama + "!");
  };
  
  name("Akbar");
  
