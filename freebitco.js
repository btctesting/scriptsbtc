// ==UserScript==
// @name         Freebitco Auto Faucet
// @version      1
// @match        https://freebitco.in/*
// @updateURL    https://github.com/btctesting/scriptsbtc/blob/master/freebitco.js
// ==/UserScript==

(function() {
    'use strict';
//obtiene el codigo fuente de <body></body>
var body = $('body');

var points = {};

    //clickea en el boton de free roll
    if ($('#free_play_form_button').is(':visible'))
        setTimeout(function(){ $('#free_play_form_button').click();}, (2 + Math.floor(Math.random() * 6))*1000);

    //oculta el mensaje emergente
    if ($('#myModal22').is(':visible'))
        setTimeout(function(){ $('.close-reveal-modal').click(); },(5 + Math.floor(Math.random() * 6))*1000);

    //array reward
    var reward = {};
    reward.select = function() {
        reward.points = parseInt($('.user_reward_points').text().replace(',',""));

        //array para tiempo restante
        reward.bonustime = {};
        if ($("#bonus_container_free_points").length != 0) {
            reward.bonustime.text = $('#bonus_span_free_points').text();
            reward.bonustime.hour = parseInt(reward.bonustime.text.split(":")[0]);
            reward.bonustime.min = parseInt(reward.bonustime.text.split(":")[1]);
            reward.bonustime.sec = parseInt(reward.bonustime.text.split(":")[2]);
            reward.bonustime.current = reward.bonustime.hour * 3600 + reward.bonustime.min * 60 + reward.bonustime.sec;
        } else
            reward.bonustime.current = 0;
        //muestra en consola el tiempo restante
        //console.log(reward.bonustime.current);
        if (reward.bonustime.current !== 0) {
            console.log(reward.bonustime.current);
        } else {
            if (reward.points < 12) {
                console.log("No hay puntos suficientes.");
            }
            else if (reward.points < 120) {
                    console.log("Todavía no se puede comprar el pack de 10 RP");
                    RedeemRPProduct('free_points_1');
                }
            else if (reward.points < 600) {
                    console.log("Todavía no se puede comprar el pack de 50 RP");
                    RedeemRPProduct('free_points_10');
                }
            else if (reward.points < 1200) {
                    console.log("Todavía no se puede comprar el pack de 100 RP");
                    RedeemRPProduct('free_points_50');
                }
            else {
                console.log("¡¡Pack de 100 adquirido!!");
                RedeemRPProduct('free_points_100');
            }
            if ($('#bonus_span_fp_bonus').length === 0)
                if (reward.points >= 4400){
                    RedeemRPProduct('fp_bonus_1000');
                    console.log("¡¡Pack de 1000% Free roll adquirido!!");
                } else{
                    console.log("¡¡Pack de 100 adquirido!!");
                }
        }
    };

    setTimeout(reward.select,1000);
    setInterval(reward.select,60000);
})();
