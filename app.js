$('.accordion-item_text').hide();
$('.accordion-item_label').click(function(x) {
var toggleClass = $(this).hasClass('active') ? true : false;
$('.accordion-item_label').removeClass('active');    
if(!toggleClass)
  $(this).toggleClass('active');         
var toggle = $(this).nextUntil('.accordion-item_label');
toggle.slideToggle();
$('.accordion-item_text').not(toggle).slideUp();
x.preventDefault();
});

let phone = $('.phone').val(); 
let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
if(!regex.test(phone)){
  console.log('Не соответствует');
} else{
console.log('Соответствует');
};

var swiper = new Swiper(".windowreviws", {
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});

// $('.swiper-scrollbar swiper-scrollbar-horizontal').css('opacity', '');
// $('.swiper-scrollbar-horizontal').removeAttribute('opacity', '0');
// document.getElementById(".swiper").style.display = null;


// const swiper = new Swiper('.swiper', {
//   autoplay: {
//     delay: 2000,
//   },
//  });

// $('.swiper-scrollbar-horizontal').style('opacity','1');




