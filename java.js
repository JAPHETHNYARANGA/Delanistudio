$(document).ready(function(){
    $(".main").click(function(){
        $(".hide").toggle();
        $(".show").toggle()
    })
    $(".main2").click(function(){
        $(".hide2").toggle();
        $(".show2").toggle();
    })
    $(".main3").click(function(){
        $(".hide3").toggle();
        $(".show3").toggle();
    })

   
});

$(document).ready(function(){
    $(".bg1").mouseover(function(){
      $(".po1").show();
    }).mouseout(function(){
      $(".po1").hide();
    });

    $(".bg2").mouseover(function(){
        $(".po2").show();
      }).mouseout(function(){
        $(".po2").hide();
      });

      $(".bg3").mouseover(function(){
        $(".po3").show();
      }).mouseout(function(){
        $(".po3").hide();
      });

      $(".bg4").mouseover(function(){
        $(".po4").show();
      }).mouseout(function(){
        $(".po4").hide();
      });

      $(".bg5").mouseover(function(){
        $(".po5").show();
      }).mouseout(function(){
        $(".po5").hide();
      });

      $(".bg6").mouseover(function(){
        $(".po6").show();
      }).mouseout(function(){
        $(".po6").hide();
      });

      $(".bg7").mouseover(function(){
        $(".po7").show();
      }).mouseout(function(){
        $(".po7").hide();
      });

      $(".bg8").mouseover(function(){
        $(".po8").show();
      }).mouseout(function(){
        $(".po8").hide();
      });
});


    

$(document).ready(function(){
    $('.btn').click(function () {
        var Name = $('#Input1').val();
        var Email = $('#Email1').val();
        var Message = $('#Textarea1');
        if (Name == '' || Email == '' || Message == '') {
            alert('Please fill all the fields');
        } else {
            alert(' Hello ' + Name + ' your message has been received, we will get intouch with you soon');
        }
  });
  
  });