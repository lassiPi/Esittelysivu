function kommentointi() {
  document.getElementById("kommentit").value +=
    document.getElementById("kommentti").value + "\n";

  document.getElementById("kommentti").value = "";
}
