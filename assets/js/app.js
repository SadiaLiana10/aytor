let crossBtn = document.querySelector('.cross-btn');
let searchBtn = document.querySelector('.search_btn');
let searchBox = document.querySelector('.search-box');
let inputTest = document.querySelector('.input-test');

searchBox.addEventListener('click',function(e){
    e.preventDefault();
    if(e.target.classList.contains('active_search')){
        searchBox.classList.remove('active_search');
    }
});

searchBtn.addEventListener('click', function(e){
    e.preventDefault();
    searchBox.classList.add('active_search');
    if(searchBox.classList.contains('active_search')){
        inputTest.classList.add('active_input');
        }else{
        inputTest.classList.remove('active_input');
        }
        });
        
        crossBtn.addEventListener('click', function(e){
            e.preventDefault();
            searchBox.classList.remove('active_search');
            inputTest.classList.remove('active_input');
    
});

$(function(){
    // $('.bannerSlider').slick({
    //     arrows:false,
    //     dots:true,
    //     dotsClass:'bannerDots container',
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // })
    // $('.smallBannerSlider').slick({
    //     arrows:false,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    // })

    $('.main_slider').slick({
        arrows:false,
        dots:true,
        dotsClass:'bannerDots container',
        autoplay: true,
        autoplaySpeed: 1800,
    });






    //* ARRIVALS JS 
    $('.arrivals').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });
    //* ARRIVALS JS END

   
      

    $('.latest').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      // autoplay: true,  
      // autoplaySpeed: 2000,
      arrows:false,
      dots:true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
       
      ]
    });
   

})



