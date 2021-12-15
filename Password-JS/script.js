function myFunction() {
    let sifre = document.getElementById("pass");
    let open = document.getElementById("open");
    let close = document.getElementById("close");

if (sifre.type == "password") {
    sifre.type = "text";
    open.style.display = "none";
    close.style.display = "block";
}
else {
    sifre.type = "password";
    open.style.display = "block";
    close.style.display = "none";
}
}