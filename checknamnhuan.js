let nam=parseInt(prompt("Nhap nam"));
let laNamNhuan=false;
if(nam%4==0){
    if(nam%100==0){
        if(nam%400==0){
            laNamNhuan=true;
        }
    }else {
        laNamNhuan=true;
    }
}

if(laNamNhuan){
    alert(nam+ " la nam nhuan");
}else {
    alert(nam+ " khong phai nam nhuan");
}