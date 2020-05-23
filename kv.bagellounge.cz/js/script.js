// // проверка браузера на поддержку webp
// function testWebP(callback) {
//     var webP = new Image();
//     webP.onload = webP.onerror = function () {
//         callback(webP.height == 2);
//     };
//     webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
// }
// testWebP(function (support) {
//     if (support == true) {
//         document.querySelector('body').classList.add('webp');
//     }
// });
// // end проверка браузера на поддержку webp
//
// //ibg
// function ibg(){
//
//     let ibg=document.querySelectorAll(".lsp-block-item-image-link");
//     console.log(ibg);
//     for (var i = 0; i < ibg.length; i++) {
//         if(ibg[i].querySelector('img')){
//             ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
//         }
//     }
// }
//
// ibg();
// //end ibg

$(function(){
    $(".menu-more").click(function () {
        $('#lsp-block-tree').toggleClass('open');
    });
    $(".recommendation-more").click(function () {
        $('.lsp-js-recommendation-items').toggleClass('open');
    });
    $(".cart-more").click(function () {
        $('.lsp-cart-items-list').toggleClass('open');
        $('.lsp-info-message-bottom').toggleClass('open');
    });
});

window.jStoreEvents = window.jStoreEvents ? window.jStoreEvents : [];
jStoreEvents.push(['pageChanged', null, function (data) {
    $('#show-nav').removeClass('active');
    $('.jstore-block-search').removeClass('open');
    $('.lsp-block-terminalinfo').removeClass('open');
    $('#lsp-block-userinfo').removeClass('open');
    // $('.nav-menu').removeClass('open');
    $('div.lsp-cart-items-list').removeClass('open');
    $('.lsp-info-message-bottom').removeClass('open');
    $('#lsp-block-gift').removeClass('open');
    $('#lsp-block-happy-hour').removeClass('open');
    $('#lsp-block-recommendation').removeClass('open');
}]);

