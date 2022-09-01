$(function(){



    
        let navbar = $(`nav`)

    $(window).scroll(function (){
       let scrTop = $(window).scrollTop ();

       if(scrTop > 300){
          navbar.addClass(`menuFixed`)
       }
       else{
        navbar.removeClass(`menuFixed`)
       }
    })

    let number = document.querySelector(`.number`);
    let counter = 0;
    setInterval(() => {
        if(counter == 70){
           clearInterval(); 
        }
        else{
        counter += 1;
        number.innerHTML = counter + "%"
        } 
    
    
    },30);

      $(window).ready(function(){
         let preloader = $(`.preloader`);
         preloader.delay(1500).fadeOut(300);
      });


});
