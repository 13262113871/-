function show1(){
   $('.r_main1').show();
   $('.r_main2').hide();  
}
function show2(){
   $('.r_main2').show();
   $('.r_main1').hide(); 
}
$('.hz').on('click',function(){
   show1(); 
});
$('.mf').on('click',function(){
    show2()
 })

 $('#md1').on('click',function(){
  show1()
 });
$('#md2').on('click',function(){
   show2()
  });
   
