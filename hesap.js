const guncelle = (x) => (document.getElementById("giris").value += x);
const hesapla = () => {document.getElementById("giris").value = eval(document.getElementById("giris").value);};
const sifirla = ()=> {document.getElementById("giris").value = "";}
const eksilt = ()=>{document.getElementById("giris").value = document.getElementById("giris").value.substring(0, document.getElementById("giris").value.length - 1);}
