// ==UserScript==
// @name         FREEBITCOIN.IO
// @version      2
// @match        https://freebitcoin.io/*
// @downloadURL  https://bitbucket.org/ivanstavenuiter/testbit/raw/403f4a7a8f353a208cf8ff5303e372f632d58988/FREEBITCOIN.IO.js
// @updateURL    https://bitbucket.org/ivanstavenuiter/testbit/raw/403f4a7a8f353a208cf8ff5303e372f632d58988/FREEBITCOIN.IO.js
// ==/UserScript==

(function() {
    'use strict';

    var time = {};
    time.check = function(){
     if($('.minutes div:first-child').text() == 0 && $('.seconds div:first-child')==0){
         console.log("preparado para clickear");
         if ($('.roll-wrapper').is(':visible')){
             setTimeout(function(){ $('.roll-wrapper button').click();}, (2 + Math.floor(Math.random() * 6))*1000);
             console.log("Clickeado");
         }
     }
    };

    setTimeout(time.check,1000);
    setInterval(time.check,60000);
})();
