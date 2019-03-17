$('.carousel').carousel({
    interval: 5000
})
let searchIcon=$('#main-search button');
let searchField=$('#main-search input');
searchIcon.on('focusin',function () {
    searchField.css('display','inline-block');
});
$('.hamburger').on('click',function () {
    $('nav').slideToggle();
});
