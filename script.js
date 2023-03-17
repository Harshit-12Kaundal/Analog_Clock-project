let hr=document.getElementById('hour');
let min=document.getElementById('min');
let sec=document.getElementById('sec');

function displaytime(){
    let date= new Date();

    // getting hour, min ,sec;

    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hrotations=30*hh+mm/2;
    let mrotations=6*mm;
    let srotations=6*ss;


    hr.style.transform=`rotate(${hrotations}deg)`;
    min.style.transform=`rotate(${mrotations}deg)`;
    sec.style.transform=`rotate(${srotations}deg)`;

}

setInterval(displaytime,1000);