// ==UserScript==
// @name         999dice auto free
// @version      1
// @description  Free 999dice
// @match        https://www.999dice.com/*
// @updateURL    https://raw.githubusercontent.com/btctesting/scriptsbtc/master/999dice.js
// ==/UserScript==

(function() {
    'use strict';
    var roll = {};

    roll.tirada = function(){
        //Activa el panel free roll
        if ($('#BetActionBoxSet').css('display') == 'block')
            setTimeout(function(){ $('#ShowFaucetBoxButton').click();}, (Math.floor(Math.random() * 3))*1000);

        //comprueba que el botón free faucet esta activo y clickea
        setTimeout(function () {
            if ($('#BetActionBoxSet').css('display') != 'block')
                $('.FaucetClaimTitle').click();
            else
                console.log('no activo');
        }, (4 + Math.floor(Math.random() * 3))*1000);

        //saca el captcha
        setTimeout(function() {
            var n = $('#SimpleCaptchaContainer > span').attr('data-pass');
            $(':input[type="number"]').click();
            $(':input[type="number"]').val(n);
        },(8 + Math.floor(Math.random() * 3))*1000);

        //valida el formulario
        setTimeout(function(){
            $('#SimpleCaptchaContainer > .TextButton').click();
        },(12 + Math.floor(Math.random() * 3))*1000);
    };


 setTimeout(roll.tirada,2000);
 setInterval(roll.tirada,122000);

})();

