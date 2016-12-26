$ (document).ready(function(){
        $('#Tamil').hide();
        $('#Kannada').hide();
        $('#Telugu').hide();
        $('#Hindi').hide();
        $('#Malayalam').hide();
        $('#English').hide();
       //localStorage.clear();
       var category2 =  localStorage.getItem("sessionCategroy");
      // console.log("cgdfg:"+category2);
       if(category2 == null) {
            var category = $('#language').val();
            $('#'+category).show();
  
        } else {
            $('#'+category2).show();
            $('#language').val(category2).change();
        }
     
        document.addEventListener('deviceready', onDeviceReady, false);
        });


 
    function onDeviceReady() {

    var config = {
        apiKey: "AIzaSyBVNCKpqYUll3SRS0zBS_58tGTeXv5iCNc",
        authDomain: "veggy-d0f13.firebaseapp.com",
        databaseURL: "https://veggy-d0f13.firebaseio.com",
        storageBucket: "veggy-d0f13.appspot.com",
        messagingSenderId: "313827198515"
    };
    firebase.initializeApp(config);
    


     var database = firebase.database();
    $("#open-popupArrow").click(function() {
            
             $(".menu_list").show();
            
         });
     
$("#logout").click(function() {
        
         var confirm1 = confirm('Are you sure? Do you want to exit');
          if (confirm1) {
          true;
           navigator.app.exitApp(); 
         } else{
           
            $(".menu_list").css("display", "none");
            
         }
         
      
     });

                 

            $.mobile.document.on( "click", "#open-popupArrow", function( evt ) {
                $( "#popupArrow" ).popup( "open", { x: evt.pageX, y: evt.pageY } );
                evt.preventDefault();
            });





database.ref('/languages').once('value').then(function(snapshot) {
    console.log(snapshot.val());
    var bulb = snapshot.val().BULB;
    var fennel = snapshot.val().FENNEL;
    var garlic = snapshot.val().GARLIC;
    var shallots = snapshot.val().SHALLOTS;
    var spring = snapshot.val().SPRING_ONION;
    var onion = snapshot.val().ONION;
    var flower = snapshot.val().FLOWER;
    var broccoli = snapshot.val().BROCCOLI;
    var cauliflower = snapshot.val().CAULIFLOWER;
    var fruits = snapshot.val().FRUITS;
    var ash = snapshot.val().ASHGOURD;
    var bitter = snapshot.val().BITTERGOURD;
    var capsicum = snapshot.val().CAPSICUM;
    var chilli = snapshot.val().CHILLI_PEPPERS;
    var cucumber = snapshot.val().CUCUMBER;
    var eggplant = snapshot.val().EGGPLANT;
    var melon = snapshot.val().MELONS;
    var okra = snapshot.val().OKRA;
    var pumpkin = snapshot.val().PUMPKIN;
    var tomato = snapshot.val().TOMATO;
    var fungi = snapshot.val().FUNGI; 
    var mushroom = snapshot.val().MUSHROOM; 
    var leafy = snapshot.val().LEAFY; 
    var amaranth = snapshot.val().AMARANTH; 
    var cabbage = snapshot.val().CABBAGE; 
    var celery = snapshot.val().CELERY; 
    var coriander = snapshot.val().CORIANDER; 
    var curry = snapshot.val().CURRY; 
    var drumstick = snapshot.val().DRUMSTICK;  
    var fenugreek = snapshot.val().FENUGREEK;
    var mint = snapshot.val().MINT;
    var mustard = snapshot.val().MUSTARD;
    var sorrel = snapshot.val().SORREL; 
    var spinach = snapshot.val().SPINACH;
    var rot = snapshot.val().ROT;
    var beetroot = snapshot.val().BEETROOT;
    var carrot = snapshot.val().CARROT;
    var potato = snapshot.val().POTATO;
    var sweet = snapshot.val().SWEET_POTATO;
    var tapioca = snapshot.val().TAPIOCA;
    var turnip = snapshot.val().TURNIP;
    var seeds = snapshot.val().SEEDS;
    var beans = snapshot.val().BEANS;
    var corn = snapshot.val().CORN;
    var peas = snapshot.val().PEAS;



    $('#English > .bulb > .title').html(bulb.ENGLISH);
    $('.English > .fennel > .title').html(fennel.ENGLISH);
    $('.English > .garlic > .title').html(garlic.ENGLISH);
    $('.English > .onion > .title').html(onion.ENGLISH);
    $('.English > .shallots > .title').html(shallots.ENGLISH);
    $('.English > .spring > .title').html(spring.ENGLISH);
    $(".fennel > a> img").attr("src", fennel.IMG);
    $(".garlic > a > img").attr("src", garlic.IMG);
    $(".onion > a > img").attr("src", onion.IMG);
    $(".shallots > a > img").attr("src", shallots.IMG);
    $(".spring > a > img").attr("src", spring.IMG);
    $('#English > .flower > .title').html(flower.ENGLISH);
    $('.English > .broccoli >  .title').html(broccoli.ENGLISH);
    $('.English > .cauliflower > .title').html(cauliflower.ENGLISH);
    $(".broccoli > a > img").attr("src", broccoli.IMG);
    $(".cauliflower > a > img").attr("src", cauliflower.IMG);
    $('#English > .fruits > .title').html(fruits.ENGLISH);
    $('.English > .ash >  .title').html(ash.ENGLISH);
    $('.English > .bitter > .title').html(bitter.ENGLISH);
    $('.English > .capsicum > .title').html(capsicum.ENGLISH);
    $('.English > .chilli > .title').html(chilli.ENGLISH);
    $('.English > .cucumber > .title').html(cucumber.ENGLISH);
    $('.English > .eggplant > .title').html(eggplant.ENGLISH);
    $('.English > .melon > .title').html(melon.ENGLISH);
    $('.English > .okra > .title').html(okra.ENGLISH);
    $('.English > .pumpkin > .title').html(pumpkin.ENGLISH);
    $('.English > .tomato > .title').html(tomato.ENGLISH);
    $(".ash > a > img").attr("src", ash.IMG);
    $(".bitter > a > img").attr("src", bitter.IMG);
    $(".capsicum > a > img").attr("src", capsicum.IMG);
    $(".chilli > a > img").attr("src", chilli.IMG);
    $(".cucumber > a > img").attr("src", cucumber.IMG);
    $(".eggplant > a > img").attr("src", eggplant.IMG);
    $(".melon > a > img").attr("src", melon.IMG);
    $(".okra > a > img").attr("src", okra.IMG);
    $(".pumpkin > a > img").attr("src", pumpkin.IMG);
    $(".tomato > a > img").attr("src", tomato.IMG);
    $('#English > .fungi > .title').html(fungi.ENGLISH);
    $('.English > .mushroom > .title').html(mushroom.ENGLISH);
    $(".mushroom > a > img").attr("src", mushroom.IMG);
    $('#English > .leafy > .title').html(leafy.ENGLISH);
    $('.English > .amaranth > .title').html(amaranth.ENGLISH);
    $('.English > .cabbage > .title').html(cabbage.ENGLISH);
    $('.English > .celery > .title').html(celery.ENGLISH);
    $('.English > .coriander > .title').html(coriander.ENGLISH);
    $('.English > .curry > .title').html(curry.ENGLISH);
    $('.English > .drumstick > .title').html(drumstick.ENGLISH);
    $('.English > .fenugreek > .title').html(fenugreek.ENGLISH);
    $('.English > .mint > .title').html(mint.ENGLISH);
    $('.English > .mustard > .title').html(mustard.ENGLISH);
    $('.English > .sorrel > .title').html(sorrel.ENGLISH);
    $('.English > .spinach > .title').html(spinach.ENGLISH);
    $(".amaranth > a > img").attr("src", amaranth.IMG);
    $(".cabbage > a > img").attr("src", cabbage.IMG);
    $(".celery > a > img").attr("src", celery.IMG);
    $(".coriander > a > img").attr("src", coriander.IMG);
    $(".curry > a > img").attr("src", curry.IMG);
    $(".drumstick > a > img").attr("src", drumstick.IMG);
    $(".fenugreek > a > img").attr("src", fenugreek.IMG);
    $(".mint > a > img").attr("src", mint.IMG);
    $(".mustard > a > img").attr("src", mustard.IMG);
    $(".sorrel > a > img").attr("src", sorrel.IMG);
    $(".spinach > a > img").attr("src", spinach.IMG);
    $('#English > .rot > .title').html(rot.ENGLISH);
    $('.English > .beetroot > .title').html(beetroot.ENGLISH);
    $('.English > .carrot > .title').html(carrot.ENGLISH);
    $('.English > .potato > .title').html(potato.ENGLISH);
    $('.English > .sweet > .title').html(sweet.ENGLISH);
    $('.English > .tapioca > .title').html(tapioca.ENGLISH);
    $('.English > .turnip > .title').html(turnip.ENGLISH);
    $(".beetroot > a > img").attr("src", beetroot.IMG);
    $(".carrot > a > img").attr("src", carrot.IMG);
    $(".potato > a > img").attr("src", potato.IMG);
    $(".sweet > a > img").attr("src", sweet.IMG);
    $(".tapioca > a > img").attr("src", tapioca.IMG);
    $(".turnip > a > img").attr("src", turnip.IMG);
    $('#English > .seeds > .title').html(seeds.ENGLISH);
    $('.English > .beans > .title').html(beans.ENGLISH);
    $('.English > .corn > .title').html(corn.ENGLISH);
    $('.English > .peas > .title').html(peas.ENGLISH);
    $(".beans > a > img").attr("src", beans.IMG);
    $(".corn > a > img").attr("src", corn.IMG);
    $(".peas > a > img").attr("src", peas.IMG);
    

    $('#Malayalam > .bulb > .title').html(bulb.MALAYALAM);
    $('.Malayalam > .fennel > .title').html(fennel.MALAYALAM);
    $('.Malayalam > .garlic > .title').html(garlic.MALAYALAM);
    $('.Malayalam > .onion > .title').html(onion.MALAYALAM);
    $('.Malayalam > .shallots > .title').html(shallots.MALAYALAM);
    $('.Malayalam > .spring > .title').html(spring.MALAYALAM);
    $('#Malayalam > .flower > .title').html(flower.MALAYALAM);
    $('.Malayalam > .broccoli > .title').html(broccoli.MALAYALAM);
    $('.Malayalam > .cauliflower > .title').html(cauliflower.MALAYALAM);
    $('#Malayalam > .fruits > .title').html(fruits.MALAYALAM);
    $('.Malayalam > .ash >  .title').html(ash.MALAYALAM);
    $('.Malayalam > .bitter > .title').html(bitter.MALAYALAM);
    $('.Malayalam > .capsicum > .title').html(capsicum.MALAYALAM);
    $('.Malayalam > .chilli > .title').html(chilli.MALAYALAM);
    $('.Malayalam > .cucumber > .title').html(cucumber.MALAYALAM);
    $('.Malayalam > .eggplant > .title').html(eggplant.MALAYALAM);
    $('.Malayalam > .melon > .title').html(melon.MALAYALAM);
    $('.Malayalam > .okra > .title').html(okra.MALAYALAM);
    $('.Malayalam > .pumpkin > .title').html(pumpkin.MALAYALAM);
    $('.Malayalam > .tomato > .title').html(tomato.MALAYALAM);
    $('#Malayalam > .fungi > .title').html(fungi.MALAYALAM);
    $('.Malayalam > .mushroom > .title').html(mushroom.MALAYALAM);
    $('#Malayalam > .leafy > .title').html(leafy.MALAYALAM);
    $('.Malayalam > .amaranth > .title').html(amaranth.MALAYALAM);
    $('.Malayalam > .cabbage > .title').html(cabbage.MALAYALAM);
    $('.Malayalam > .celery > .title').html(celery.MALAYALAM);
    $('.Malayalam > .coriander > .title').html(coriander.MALAYALAM);
    $('.Malayalam > .curry > .title').html(curry.MALAYALAM);
    $('.Malayalam > .drumstick > .title').html(drumstick.MALAYALAM);
    $('.Malayalam > .fenugreek > .title').html(fenugreek.MALAYALAM);
    $('.Malayalam > .mint > .title').html(mint.MALAYALAM);
    $('.Malayalam > .mustard > .title').html(mustard.MALAYALAM);
    $('.Malayalam > .sorrel > .title').html(sorrel.MALAYALAM);
    $('.Malayalam > .spinach > .title').html(spinach.MALAYALAM);
    $('#Malayalam > .rot > .title').html(rot.MALAYALAM);
    $('.Malayalam > .beetroot > .title').html(beetroot.MALAYALAM);
    $('.Malayalam > .carrot > .title').html(carrot.MALAYALAM);
    $('.Malayalam > .potato > .title').html(potato.MALAYALAM);
    $('.Malayalam > .sweet > .title').html(sweet.MALAYALAM);
    $('.Malayalam > .tapioca > .title').html(tapioca.MALAYALAM);
    $('.Malayalam > .turnip > .title').html(turnip.MALAYALAM);
    $('#Malayalam > .seeds > .title').html(seeds.MALAYALAM);
    $('.Malayalam > .beans > .title').html(beans.MALAYALAM);
    $('.Malayalam > .corn > .title').html(corn.MALAYALAM);
    $('.Malayalam > .peas > .title').html(peas.MALAYALAM);

    $('#Tamil > .bulb > .title').html(bulb.TAMIL);
    $('.Tamil > .fennel > .title').html(fennel.TAMIL);
    $('.Tamil > .garlic > .title').html(garlic.TAMIL);
    $('.Tamil > .onion > .title').html(onion.TAMIL);
    $('.Tamil > .shallots > .title').html(shallots.TAMIL);
    $('.Tamil > .spring > .title').html(spring.TAMIL);
    $('#Tamil > .flower > .title').html(flower.TAMIL);
    $('.Tamil > .broccoli > .title').html(broccoli.TAMIL);
    $('.Tamil > .cauliflower > .title').html(cauliflower.TAMIL);
    $('#Tamil > .fruits > .title').html(fruits.TAMIL);
    $('.Tamil > .ash >  .title').html(ash.TAMIL);
    $('.Tamil > .bitter > .title').html(bitter.TAMIL);
    $('.Tamil > .capsicum > .title').html(capsicum.TAMIL);
    $('.Tamil > .chilli > .title').html(chilli.TAMIL);
    $('.Tamil > .cucumber > .title').html(cucumber.TAMIL);
    $('.Tamil > .eggplant > .title').html(eggplant.TAMIL);
    $('.Tamil > .melon > .title').html(melon.TAMIL);
    $('.Tamil > .okra > .title').html(okra.MALAYALAM);
    $('.Tamil > .pumpkin > .title').html(pumpkin.TAMIL);
    $('.Tamil > .tomato > .title').html(tomato.TAMIL);
    $('#Tamil > .fungi > .title').html(fungi.TAMIL);
    $('.Tamil > .mushroom > .title').html(mushroom.TAMIL);
    $('#Tamil > .leafy > .title').html(leafy.TAMIL);
    $('.Tamil > .amaranth > .title').html(amaranth.TAMIL);
    $('.Tamil > .cabbage > .title').html(cabbage.TAMIL);
    $('.Tamil > .celery > .title').html(celery.TAMIL);
    $('.Tamil > .coriander > .title').html(coriander.TAMIL);
    $('.Tamil > .curry > .title').html(curry.TAMIL);
    $('.Tamil > .drumstick > .title').html(drumstick.TAMIL);
    $('.Tamil > .fenugreek > .title').html(fenugreek.TAMIL);
    $('.Tamil > .mint > .title').html(mint.TAMIL);
    $('.Tamil > .mustard > .title').html(mustard.TAMIL);
    $('.Tamil > .sorrel > .title').html(sorrel.TAMIL);
    $('.Tamil > .spinach > .title').html(spinach.TAMIL);
    $('#Tamil > .rot > .title').html(rot.TAMIL);
    $('.Tamil > .beetroot > .title').html(beetroot.TAMIL);
    $('.Tamil > .carrot > .title').html(carrot.TAMIL);
    $('.Tamil > .potato > .title').html(potato.TAMIL);
    $('.Tamil > .sweet > .title').html(sweet.TAMIL);
    $('.Tamil > .tapioca > .title').html(tapioca.TAMIL);
    $('.Tamil > .turnip > .title').html(turnip.TAMIL);
    $('#Tamil > .seeds > .title').html(seeds.TAMIL);
    $('.Tamil > .beans > .title').html(beans.TAMIL);
    $('.Tamil > .corn > .title').html(corn.TAMIL);
    $('.Tamil > .peas > .title').html(peas.TAMIL);

    $('#Hindi > .bulb > .title').html(bulb.HINDI);
    $('.Hindi > .fennel > .title').html(fennel.HINDI);
    $('.Hindi > .garlic > .title').html(garlic.HINDI);
    $('.Hindi > .onion > .title').html(onion.HINDI);
    $('.Hindi > .shallots > .title').html(shallots.HINDI);
    $('.Hindi > .spring > .title').html(spring.HINDI);
    $('#Hindi > .flower > .title').html(flower.HINDI);
    $('.Hindi > .broccoli > .title').html(broccoli.HINDI);
    $('.Hindi > .cauliflower > .title').html(cauliflower.HINDI);
    $('#Hindi > .fruits > .title').html(fruits.HINDI);
    $('.Hindi > .ash >  .title').html(ash.HINDI);
    $('.Hindi > .bitter > .title').html(bitter.HINDI);
    $('.Hindi > .capsicum > .title').html(capsicum.HINDI);
    $('.Hindi > .chilli > .title').html(chilli.HINDI);
    $('.Hindi > .cucumber > .title').html(cucumber.HINDI);
    $('.Hindi > .eggplant > .title').html(eggplant.HINDI);
    $('.Hindi > .melon > .title').html(melon.HINDI);
    $('.Hindi > .okra > .title').html(okra.HINDI);
    $('.Hindi > .pumpkin > .title').html(pumpkin.HINDI);
    $('.Hindi > .tomato > .title').html(tomato.HINDI);
    $('#Hindi > .fungi > .title').html(fungi.HINDI);
    $('.Hindi > .mushroom > .title').html(mushroom.HINDI);
    $('#Hindi > .leafy > .title').html(leafy.HINDI);
    $('.Hindi > .amaranth > .title').html(amaranth.HINDI);
    $('.Hindi > .cabbage > .title').html(cabbage.HINDI);
    $('.Hindi > .celery > .title').html(celery.HINDI);
    $('.Hindi > .coriander > .title').html(coriander.HINDI);
    $('.Hindi > .curry > .title').html(curry.HINDI);
    $('.Hindi > .drumstick > .title').html(drumstick.HINDI);
    $('.Hindi > .fenugreek > .title').html(fenugreek.HINDI);
    $('.Hindi > .mint > .title').html(mint.HINDI);
    $('.Hindi > .mustard > .title').html(mustard.HINDI);
    $('.Hindi > .sorrel > .title').html(sorrel.HINDI);
    $('.Hindi > .spinach > .title').html(spinach.HINDI);
    $('#Hindi > .rot > .title').html(rot.HINDI);
    $('.Hindi > .beetroot > .title').html(beetroot.HINDI);
    $('.Hindi > .carrot > .title').html(carrot.HINDI);
    $('.Hindi > .potato > .title').html(potato.HINDI);
    $('.Hindi > .sweet > .title').html(sweet.HINDI);
    $('.Hindi > .tapioca > .title').html(tapioca.HINDI);
    $('.Hindi > .turnip > .title').html(turnip.HINDI);
    $('#Hindi > .seeds > .title').html(seeds.HINDI);
    $('.Hindi > .beans > .title').html(beans.HINDI);
    $('.Hindi > .corn > .title').html(corn.HINDI);
    $('.Hindi > .peas > .title').html(peas.HINDI);

    $('#Kannada > .bulb > .title').html(bulb.KANNADA);
    $('.Kannada > .fennel > .title').html(fennel.KANNADA);
    $('.Kannada > .garlic > .title').html(garlic.KANNADA);
    $('.Kannada > .onion > .title').html(onion.KANNADA);
    $('.Kannada > .shallots > .title').html(shallots.KANNADA);
    $('.Kannada > .spring > .title').html(spring.KANNADA);
    $('#Kannada > .flower > .title').html(flower.KANNADA);
    $('.Kannada > .broccoli > .title').html(broccoli.KANNADA);
    $('.Kannada > .cauliflower > .title').html(cauliflower.KANNADA);
    $('#Kannada > .fruits > .title').html(fruits.KANNADA);
    $('.Kannada > .ash >  .title').html(ash.KANNADA);
    $('.Kannada > .bitter > .title').html(bitter.KANNADA);
    $('.Kannada > .capsicum > .title').html(capsicum.KANNADA);
    $('.Kannada > .chilli > .title').html(chilli.KANNADA);
    $('.Kannada > .cucumber > .title').html(cucumber.KANNADA);
    $('.Kannada > .eggplant > .title').html(eggplant.KANNADA);
    $('.Kannada > .melon > .title').html(melon.KANNADA);
    $('.Kannada > .okra > .title').html(okra.KANNADA);
    $('.Kannada > .pumpkin > .title').html(pumpkin.KANNADA);
    $('.Kannada > .tomato > .title').html(tomato.KANNADA);
    $('#Kannada > .fungi > .title').html(fungi.KANNADA);
    $('.Kannada > .mushroom > .title').html(mushroom.KANNADA);
    $('#Kannada > .leafy > .title').html(leafy.KANNADA);
    $('.Kannada > .amaranth > .title').html(amaranth.KANNADA);
    $('.Kannada > .cabbage > .title').html(cabbage.KANNADA);
    $('.Kannada > .celery > .title').html(celery.KANNADA);
    $('.Kannada > .coriander > .title').html(coriander.KANNADA);
    $('.Kannada > .curry > .title').html(curry.KANNADA);
    $('.Kannada > .drumstick > .title').html(drumstick.KANNADA);
    $('.Kannada > .fenugreek > .title').html(fenugreek.KANNADA);
    $('.Kannada > .mint > .title').html(mint.KANNADA);
    $('.Kannada > .mustard > .title').html(mustard.KANNADA);
    $('.Kannada > .sorrel > .title').html(sorrel.KANNADA);
    $('.Kannada > .spinach > .title').html(spinach.KANNADA);
    $('#Kannada > .rot > .title').html(rot.KANNADA);
    $('.Kannada > .beetroot > .title').html(beetroot.KANNADA);
    $('.Kannada > .carrot > .title').html(carrot.KANNADA);
    $('.Kannada > .potato > .title').html(potato.KANNADA);
    $('.Kannada > .sweet> .title').html(sweet.KANNADA);
    $('.Kannada > .tapioca > .title').html(tapioca.KANNADA);
    $('.Kannada > .turnip > .title').html(turnip.KANNADA);
    $('#Kannada > .seeds > .title').html(seeds.KANNADA);
    $('.Kannada > .beans > .title').html(beans.KANNADA);
    $('.Kannada > .corn > .title').html(corn.KANNADA);
    $('.Kannada > .peas > .title').html(peas.KANNADA);

    $('#Telugu > .bulb > .title').html(bulb.TELUGU);
    $('.Telugu > .fennel > .title').html(fennel.TELUGU);
    $('.Telugu > .garlic > .title').html(garlic.TELUGU);
    $('.Telugu > .onion > .title').html(onion.TELUGU);
    $('.Telugu > .shallots > .title').html(shallots.TELUGU);
    $('.Telugu > .spring > .title').html(spring.TELUGU);
    $('#Telugu > .flower > .title').html(flower.TELUGU);
    $('.Telugu > .broccoli > .title').html(broccoli.TELUGU);
    $('.Telugu > .cauliflower > .title').html(cauliflower.TELUGU);
    $('#Telugu > .fruits > .title').html(fruits.TELUGU);
    $('.Telugu > .ash >  .title').html(ash.TELUGU);
    $('.Telugu > .bitter > .title').html(bitter.TELUGU);
    $('.Telugu > .capsicum > .title').html(capsicum.TELUGU);
    $('.Telugu > .chilli > .title').html(chilli.TELUGU);
    $('.Telugu > .cucumber > .title').html(cucumber.TELUGU);
    $('.Telugu > .eggplant > .title').html(eggplant.TELUGU);
    $('.Telugu > .melon > .title').html(melon.TELUGU);
    $('.Telugu > .okra > .title').html(okra.TELUGU);
    $('.Telugu > .pumpkin > .title').html(pumpkin.TELUGU);
    $('.Telugu > .tomato > .title').html(tomato.TELUGU);
    $('#Telugu > .fungi > .title').html(fungi.TELUGU);
    $('.Telugu > .mushroom > .title').html(mushroom.TELUGU);
    $('#Telugu > .leafy > .title').html(leafy.TELUGU);
    $('.Telugu > .amaranth > .title').html(amaranth.TELUGU);
    $('.Telugu > .cabbage > .title').html(cabbage.TELUGU);
    $('.Telugu > .celery > .title').html(celery.TELUGU);
    $('.Telugu > .coriander > .title').html(coriander.TELUGU);
    $('.Telugu > .curry > .title').html(curry.TELUGU);
    $('.Telugu > .drumstick > .title').html(drumstick.TELUGU);
    $('.Telugu > .fenugreek > .title').html(fenugreek.TELUGU);
    $('.Telugu > .mint > .title').html(mint.TELUGU);
    $('.Telugu > .mustard > .title').html(mustard.TELUGU);
    $('.Telugu > .sorrel > .title').html(sorrel.TELUGU);
    $('.Telugu > .spinach > .title').html(spinach.TELUGU);
    $('#Telugu > .rot > .title').html(rot.TELUGU);
    $('.Telugu > .beetroot > .title').html(beetroot.TELUGU);
    $('.Telugu > .carrot > .title').html(carrot.TELUGU);
    $('.Telugu > .potato > .title').html(potato.TELUGU);
    $('.Telugu > .sweet > .title').html(sweet.TELUGU);
    $('.Telugu > .tapioca > .title').html(tapioca.TELUGU);
    $('.Telugu > .turnip > .title').html(turnip.TELUGU);
    $('#Telugu > .seeds > .title').html(seeds.TELUGU);
    $('.Telugu > .beans > .title').html(beans.TELUGU);
    $('.Telugu > .corn > .title').html(corn.TELUGU);
    $('.Telugu > .peas > .title').html(peas.TELUGU);

});

$('#language').change(function() {
   // localStorage.clear();
    var category = $('#language').val();
    localStorage.setItem("sessionCategroy", category);

    if (category == 'English') {
        $('#Tamil').hide();
        $('#Kannada').hide();
        $('#Telugu').hide();
        $('#Hindi').hide();
        $('#Malayalam').hide();
        $('#English').show();
    } else if (category == 'Malayalam') {

        $('#Tamil').hide();
        $('#Kannada').hide();
        $('#Telugu').hide();
        $('#Hindi').hide();
        $('#English').hide();
        $('#Malayalam').show();

    } else
    if (category == 'Tamil') {
        $('#Kannada').hide();
        $('#Telugu').hide();
        $('#Hindi').hide();
        $('#English').hide();
        $('#Malayalam').hide();
        $('#Tamil').show();
    } else
    if (category == 'Hindi') {
        $('#Kannada').hide();
        $('#Telugu').hide();
        $('#Hindi').show();
        $('#English').hide();
        $('#Malayalam').hide();
        $('#Tamil').hide();
    } else
    if (category == 'Kannada') {
        $('#Kannada').show();
        $('#Telugu').hide();
        $('#Hindi').hide();
        $('#English').hide();
        $('#Malayalam').hide();
        $('#Tamil').hide();
    } else if (category == 'Telugu') {
        $('#Kannada').hide();
        $('#Telugu').show();
        $('#Hindi').hide();
        $('#English').hide();
        $('#Malayalam').hide();
        $('#Tamil').hide();
    }
    

});
}

 // document.addEventListener("backbutton", function () { 
 //         navigator.notification.confirm(
 //             'Do you want to quit', 
 //             onConfirmQuit, 
 //             'QUIT TITLE', 
 //             'OK,Cancel'  
 //         );
 //     }, true); 


 //    function onConfirmQuit(button){
 //        if(button == "1"){
 //            navigator.app.exitApp(); 
 //        }
 //    }

    
     