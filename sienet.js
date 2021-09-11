function sienet() {
  var polku = "./sienikuvat/",
    kuvat = [
      "harmaakirjovahakas_hygrophorus_olivaceoalbus.jpg",
      "kartiohuhtasieni_morchella_conica.jpg",
      "sikurirousku_lactarius_camphoratus.jpg",
      "suppilovahvero_cantharellus_tubaeformis.jpg",
    ],
    kuvatekstit = [
      "Harmaakirjovahakas (Hygrophorus olivaceoalbus)",
      "Kartiohuhtasieni (Morchella conica)",
      "Sikurirousku (Lactarius camphoratus)",
      "Suppilovahvero (Cantharellus tubaeformis)",
    ],
    i = Math.floor(Math.random() * kuvat.length);
  document.getElementById("sienikuva").innerHTML =
    "<img src='" +
    polku +
    kuvat[i] +
    '\' width="440" height="440"> ' +
    kuvatekstit[i] +
    "";
}
