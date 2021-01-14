/*   ma version de code et la suite c'est la correction 
function colorer (){
    $(document).ready(function () {
        $("button").click(function () {
           $(".vert").css("color", "green");
           $(".rouge").css("color", "red");
           $(".orange").css("color", "orange");
       });
   });
};

function semantique() {
    $(document).ready(function () {
     $("button").click(function () {
         $(".italique").wrap("<i></i>");
         $(".barre").wrap("<del></del>");
         $(".souligne").wrap("<u></u>");
         $(".gras").wrap("<b></b>");;
        });
     });
 };

function mettreTitres(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu .titre1").wrap("<h1></h1>");
            $("#contenu .titre2").wrap("<h2></h2>");
           
         });
    });
};
    
function liensEnBoutons() {
    $(document).ready(function () {
        $('a').wrap('<button ></button>');
    });     
}  
      

function dupliquerTexte(){
    $(document).ready(function(){
        $("button").click(function(){
          $("p").clone().appendTo("#contenu");
        });
    });
}


function regrouperTitres(){
    $(document).ready(function () {
        $("button").click(function () {
            $("h1 ,h2").wrapAll("<div></div>");
        });
    });

}


function regrouperLiens(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu a").wrapAll("<div></div>");
        });
    });

}
   

function viderBoutons(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu button").empty();
         });
    });
}

function enleverLiens(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu a").remove();
         });
    });
}



function enleverGras(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu gras,#contenu b").remove();
         });
    });
}

function enleverItalique(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu i").remove();
         });
    });
}

function enleverDecor(){
    $(document).ready(function () {
        $("button").click(function () {
            $("#contenu *:not(html):Not(body):Not(p):not(span):Not(button):Not(a)").remove();
         });
    });
}


function voirCode(){
   $(document).ready(function (){
    $("button").click(function (){
     $('contenu p').text($('p').html());
    });
});
}*/

/// correction du tp
}  
Corrections :
function semantique() {
    $('#contenu .italique').wrap('<i></i>');
    $('#contenu .gras').wrap('<b></b>');
    $('#contenu .souligne').wrap('<u></u>');
    $('#contenu .barre').wrap('<del></del>');
  }
  function colorer() {
     $('#contenu .rouge').wrap('<span style="color:red"></span>');
     $('#contenu .vert').wrap('<span style="color:green"></span>');
     $('#contenu .orange').wrap('<span style="color:orange"></span>');
     $('#contenu .bleu').wrap('<span style="color:blue"></span>');
  }
  
  function mettreTitres() {
    $('#contenu .titre1').wrap('<h1></h1>');
    $('#contenu .titre2').wrap('<h2></h2>');
  }
  

  function liensEnBoutons() {
    $('#contenu a').wrap('<button></button>');
  }
  
  function dupliquerTexte() {
    $('#contenu').clone().appendTo('#contenu');
  }
  
  function regrouperTitres() {
    $('h1').wrapAll('<div></div>');
    $('h2').wrapAll('<div></div>');
  }
  
  function regrouperLiens() {
    $('#contenu a').wrapAll('<div></div>');
  }
  
  function viderBoutons() {
    $('button').empty();
  }
  
  function enleverLiens() {
    $('#contenu a').remove();
  }
  
  function enleverGras() {

    $('#contenu b').remove();
  }
  
  function enleverItalique() {
    $('#contenu i').remove();
  }
  
  function enleverDecor() {
    $('#contenu *:not(html):not(body):not(p):not(button)').remove();
  }
  
  function voirCode() {
    $('#contenu').text($('p').html());
  }