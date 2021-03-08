let float_btn=document.querySelector(".float-act-btn");
let float_list=document.querySelector(".float-act-list");
let float_btn_val=0;

float_btn.addEventListener("click",floatClick);


function floatClick(e){
 if(float_btn_val===0)
 {float_list.style.display=`block`;
 float_btn.style.transform=`rotate(45deg)`;
float_btn_val=1; }

 else{float_list.style.display=`none`;
 float_btn.style.transform=`rotate(0deg)`;
 float_btn_val=0;}
}