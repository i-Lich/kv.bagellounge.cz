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
    $(".happy-hour-more").click(function () {
        $('.lsp-block-hh-product-title').toggleClass('open');
        $('.lsp-block-hh-product-image').toggleClass('open');
        $('.lsp-block-hh-product-desc').toggleClass('open');
        $('.lsp-block-hh-product-prices').toggleClass('open');
        $('.lsp-block-hh-countdown-title').toggleClass('open');
        $('.lsp-block-hh-countdown-time').toggleClass('open');
        $('.lsp-block-hh-add-to-cart').toggleClass('open');
        $('.lsp-block-hh-inner').toggleClass('open');
    });
    $(".lsp-block-gift-more").click(function () {
        $('.lsp-block-js-gift-items').toggleClass('open');
        $('.lsp-block-gift-accept').toggleClass('open');
    });
    $(".cart-more").click(function () {
        $('#lsp-block-cart').toggleClass('open');
    });
});

$(function() {
    function cartHeight(){
        if(document.getElementById('lsp-block-cart--header').classList.contains('open')) {

            let clientWindowHeight = document.documentElement.clientHeight;
            let cartBlockTopPosition = document.getElementById('lsp-block-cart--header').getBoundingClientRect().top;
            let contentHeight = document.querySelector('body').offsetHeight - cartBlockTopPosition;
            let cartBlockHeight = document.getElementById('lsp-block-cart--header').offsetHeight + cartBlockTopPosition;
            let maxCartBlockHeight = 0;
            if (contentHeight > clientWindowHeight) {
                maxCartBlockHeight =  clientWindowHeight - cartBlockTopPosition -15 ;
            } else{
                maxCartBlockHeight =  contentHeight -15;
            }
            document.getElementById('lsp-block-cart--header').style.maxHeight = maxCartBlockHeight + 'px';
        }
    }
    function menuHeight(){
        let clientWindowHeight = document.documentElement.clientHeight;
        let menuBlockTopPosition = 50;
        let contentHeight = document.querySelector('body').offsetHeight - menuBlockTopPosition; //450
        let menuBlockHeight = document.querySelector('.dropdown-menu-burger-content--popup').offsetHeight + menuBlockTopPosition;
        let maxMenuBlockHeight = 0;
        if (contentHeight > clientWindowHeight) {
            maxMenuBlockHeight =  clientWindowHeight - menuBlockTopPosition - 15 ;
        } else{
            maxMenuBlockHeight =  contentHeight - 15;
        }
        // maxMenuBlockHeight = 200;
        document.querySelector('.dropdown-menu-burger-content--popup').style.maxHeight = maxMenuBlockHeight + 'px';
        // }
    }

    $(".show-menu-burger").click(function () {
        $('.jstore-block-search').removeClass('open');
        $('#lsp-block-userinfo').removeClass('open');
        $('.dropdown-cart').removeClass('open');
        $('.dropdown-menu-burger-content--popup').toggleClass('open-flex');
        $('.show-menu-burger').toggleClass('active');
        menuHeight();
    });

    $(".icon-search").click(function () {
        $('.jstore-header-menu').removeClass('open');
        $('.show-menu-burger').removeClass('active');
        $('.dropdown-menu-burger-content--popup').removeClass('open-flex');
        $('#lsp-block-userinfo').removeClass('open');
        $('.dropdown-cart').removeClass('open');
        $('.jstore-block-search').toggleClass('open');
    });

    $(".icon-signin").click(function () {
        $('.jstore-header-menu').removeClass('open');
        $('.show-menu-burger').removeClass('active');
        $('.dropdown-menu-burger-content--popup').removeClass('open-flex');
        $('.jstore-block-search').removeClass('open');
        $('.dropdown-cart').removeClass('open');
        $('#lsp-block-userinfo').toggleClass('open');
    });



    $(".icon-cart").click(function () {
        $('.jstore-header-menu').removeClass('open');
        $('.show-menu-burger').removeClass('active');
        $('.dropdown-menu-burger-content--popup').removeClass('open-flex');

        $('.jstore-block-search').removeClass('open');
        $('#lsp-block-userinfo').removeClass('open');
        $('.dropdown-cart').toggleClass('open');
        cartHeight();

    });

    window.onresize = function resizeHeightBlocks() {
        if (document.getElementById('lsp-block-cart--header').classList.contains('open')) {
            cartHeight();
        }
        if ($('.dropdown-menu-burger-content--popup').hasClass('open-flex')) {
            menuHeight();
        }
    };
    //scroll к контенту при клике на кнопку "оформить заказ"

    window.jStoreEvents = window.jStoreEvents ? window.jStoreEvents : [];
    jStoreEvents.push(['ready', null, function (data) {
        const buttonsToOrder = document.querySelectorAll('.lsp-block-cart-order-button-cont a');
        buttonsToOrder.forEach(function(elem) {
            elem.addEventListener("click", function() {
                $('.dropdown-cart').removeClass('open');
                $([document.documentElement, document.body]).animate({
                                scrollTop: $("#lsp-block-content").offset().top
                            }, 1000);
            });
        });
    }]);
});


window.jStoreEvents = window.jStoreEvents ? window.jStoreEvents : [];
jStoreEvents.push(['pageChanged', null, function (data) {
    $('.jstore-block-search').removeClass('open');
    $('.show-menu-burger').removeClass('active');
    $('.dropdown-menu-burger-content--popup').removeClass('open-flex');
    $('.lsp-block-terminalinfo').removeClass('open');
    $('#lsp-block-userinfo').removeClass('open');
    $('#lsp-block-tree--header').removeClass('open');
    $('#lsp-block-cart--header').removeClass('open');
    $('.lsp-block-cart').removeClass('open');
    $('.lsp-info-message-bottom').removeClass('open');
    $('#lsp-block-gift').removeClass('open');
    $('#lsp-block-happy-hour').removeClass('open');
    $('#lsp-block-recommendation').removeClass('open');
}]);


