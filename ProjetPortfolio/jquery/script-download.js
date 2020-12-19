//$('.download-btn').click(function(){
//    window.location.assign('download/cv.pdf');
//});
var openCv = document.querySelector(".download-btn");
var p = " ";

openCv.addEventListener('click', frequest);

function frequest(){
    p = window.open("download/cv.pdf", "_blank");
};