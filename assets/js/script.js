
//$(document).ready(function () {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });
$(function () {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });
});



$(function () {
    $("#but", "body").click(function () {
        //$("#container").text("<p>Hello</p>");
        //$("#container").html("<p>Hello</p>");
        $("div#container").prepend("<h1>hello</h1>");//debut avec div ou sans la meme chose
        $("div#container").append("<h1>Bye!</h1>");//fin
    });
});


$(function () {
    $("#but", "body").click(function () {
        $("div p:nth-child(1)").prepend("<p>test</p>")
    });
});




// Utilisation de la méthode .attr(nomAttribut) 
// qui permet de récupérer la valeur  
// de l'attribut passé en paramètre
// Affiche "blue"
$(function () {
    console.log($("p").attr("class"));
});



// Utilisation de la méthode .attr(nomAttribut) et
// de .each() qui permet de récupérer toutes 
// les valeurs de l'attribut passé  en paramètre
// Affiche "blue"
$(function () {
    $("p").each(function(){
        console.log($(this).attr("class"));
    });   
});



// Utilisation de la méthode .length
// qui permet de déterminer le nombre 
// d'éléments sélectionnés
// Affiche 3
$(function () {
    console.log($("p").length);
});



// Utilisation de la méthode .eq(i)
// qui permet de choisir l'élément 
// ayant l'indice passé en paramètre
// Affiche "blue"
$(function () {
    //console.log($("p").eq(0));
    console.log($("p:eq(0)"));
});
// Opérations 
// p:lt(i) : parag < indice i
// p:gt(i) : parag > indice i
// p:even : parag d'indice pair et p:odd d'indice impair
// p:first : premier parag et p:last : dernier parag
// input:text : On récupère les inputs de type text



// utilisation de la method removeAtt(nomAttribut)
// supriment l'attribut passe en paramétre, ici "class"
//puis , de" la méthod add qui est .attr(nomAttribut, nouvellevaleur)
// qui va permettre de modifier la valeur de l'attribut
//passe en paramétre
$(function () {
 // $("p").eq(0).removeAttr("class");
 // $("p").eq(0).attr("class", "red");
  $("p").even().removeClass("blue").addClass("red");//another method
   
});

// utilisation de method val() qui permet 
//de remplacer la valeur de l'attribut value
$(function () {
  $("#but").click(function(){
      console.log($("#nom").val());
  });
});

// utilisation de method val() qui nous permet
//de remplacer la valeur de l'attribut value par 
// la valeur passe en paramétre
$(function () {
    $("#but").click(function(){
        console.log($("#nom").val("john wick"));
    });
  });
  
  
//utilisation de le method .css(nomPropriete)
// qui nous permet de recupere la valeur 
//de la propriete css passe en parametre
  $(function () {
  
        console.log($("#p").eq(0).css("color"));
    });


      
//utilisation de le method .css(nomPropriete ,nouvellValeur)
// qui nous permet de modifier  la valeur 
//puis , de" la méthod add qui est .css(nomPropriete, nouvellevaleur)
// qui va permettre de modifier la valeur de propriete
//passe en paramétre
  $(function () {
  
    console.log($("#p").eq(0).css("color", "green"));
    console.log($("#p").eq(0).css({"color": "green", "background-color" : "red"}));
    $("#p").eq(0).css({"color": "green", "background-color" : "red"})//affich sans console.log
});




//Methodes .xClass()
//.addClass()  ajoute une class
//.removeClass()   supprime une class
// .hasClass()   tester l'existance d'une class
// .toggleClass   Retire ou ajoute une classe


/*
///exo 
// de rouge à bleu
$(function () {
    $("#red").each(function () {
        $(this).removeClass("red").addClass("blue");
    });
});
$(function () {
    $("#blue").each(function () {
        $(this).removeClass("blue").addClass("green");
    });
});
$(function () {
    $("#green").each(function () {
        $(this).removeClass("green").addClass("red");
    });
});
*/
 
//utilisation de la method wrap(balisehtml)
//nous permetton d'entoure le element selectione 
//ici les balise p par les balise passe en parametre 
//ici div 
//<p>bonjour</p>
//<p>bonsoir</p>
//</div>


$(function () {​​
    $("#but").click(function () {​​
        //$("p").wrap("<div></div>");
        $("p").wrapAll("<div></div>");
    }​​);
}​​);