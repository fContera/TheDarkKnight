var mainNav = $(".mainNav"),
	icoArrow = $(".hero .arrow"),
	aLogoPage = $(".logoIntro"),
	spans = $(".Reveal_row span"),
	menu = $(".mainHeader ul"),
	menuBurguer = $(".mainHeader .burger"),
	icoBurger = $(".burger use"),
	menuOpen = true,
	liSections = $(".sections li"),
	sectionPerson = $(".personajes");



icoArrow.on("click", scrollearHero);

function scrollearHero(){
	$("#logo path").css("fill","white");
	$(".batmanBegins").css("display", "block");
	$(".darkNight").css("display", "block");
	$(".darkNightRises").css("display", "block");
	aLogoPage.addClass("aLogoPage");
	var altBegins = $(".batmanBegins").offset().top - $(".mainHeader .mainNav").height()-10;
	$("html,body").animate({scrollTop:altBegins},1500);
	$(".hero h1:nth-of-type(2)").css("top", "57%");
	$(".hero h1:nth-of-type(1)").css("top", "52%");
	$(".arrow").css("display", "none");
	$(".hero div").css("display", "block").css("opacity", "1");
	window.setTimeout("efects()",900)
}
	
function efects(){
	$(".aLogoPage").css("transition", "none");
	$(".aLogoPage").css("position", "absolute");
	$(".aLogoPage").css("top", "60%");
	$(".aLogoPage").css("left", "30px");
	$(".aLogoPage").css("transform", "translateY(-50%)")
	$(".mainHeader .mainNav").css("z-index", "5")

}

liSections.on("click", flyBat);

function flyBat(){
	//conosole.log(liSections);
	$(".sections li span").css("background-image", "url(css/ui-img/but180.gif)");
	$(".sections li span").css("animation", "flyBat 5s backwards");
	sectionPerson.addClass("entrar");
}



menuBurguer.on("click", desplegarMenu);

console.log(menuBurguer);
function desplegarMenu(){
	
	if(menuOpen){
		icoBurger.attr("xlink:href","#close");
		menu.toggleClass("desplegar");
		menuOpen = false ;
	}
	else{
		icoBurger.attr("xlink:href","#burger");
		menu.toggleClass("desplegar");
		menuOpen = true ;
	}

}

$(window).on("scroll", scrolleando);
var spans = $(".Reveal_row .Reveal_item").toArray();
var spansBegins = $(".batmanBegins .Reveal_row .Reveal_item").toArray();
var primeraVez = true ;
/*function scrolleando(){
	if($(window).scrollTop() > 0 && primeraVez){
		scrollearHero();
		primeraVez = false ;
		if($(window).scrollTop()*1.9 > $(spans[i]).offset().top){
			$(spans[i]).addClass("Reveal_animate")
		}
	}
	var time = 20 ;
	for ( var i = 0; i < spans.length; i++ ) {
		if($(window).scrollTop()*1.7 > $(spans[i]).offset().top){
				$(spans[i]).addClass("Reveal_animate")
		}
    	
    }
}*/

var spansBegins = $(".batmanBegins .Reveal_row .Reveal_item"),
	filas = $(".Reveal_row").toArray(), 
	mitadAlturaVentana =  $(window).height()/2;
function scrolleando(){
	console.log("entra funcion scrolleando");
	if($(window).scrollTop() > 0 && primeraVez){
		console.log("entra la primera vez");
		$("#logo path").css("fill","white");
		aLogoPage.addClass("aLogoPage");
		window.setTimeout("efects()",900);
		$(".hero h1:nth-of-type(2)").css("top", "57%");
		$(".hero h1:nth-of-type(1)").css("top", "52%");
		/*scrollearHero();*/
		primeraVez = false ;

		/*var num = $(".batmanBegins .Reveal_row .Reveal_item").length;
		//console.log(num);
		var time = 20 ;

		for (var i = 0; i < num; i++) {
			window.setTimeout("efects("+i+")",time)
			time += 20 ;
		}*/
		
	}
	else{
		for(i = 0 ; i< filas.length; i++){
			//console.log("fila que entra: " + $(filas[i]).children().text());
			if($(window).scrollTop() + mitadAlturaVentana > $(filas[i]).offset().top){	
				//console.log("fila que entran al if: " + $(filas[i]).children().text());
				var time = 5 ;
				//$(filas[fila]).children().length ;
				var numhijos = $(filas[i]).children().length;
				for (var j = 0; j < numhijos; j++) {
					window.setTimeout("efects("+j+","+i+")",time)
					time += 5 ;
				}

			}
		}
	}
}
	
function efects(i, row){
	//console.log(i + " " +row);
	$(filas[row]).children().eq(i).addClass("Reveal_animate")
}	

/*function scrolleando(){
	var prueba = $(window).scrollTop() + 150 ;
	if(prueba >= $(".batmanBegins").offset().top && prueba < $(".darkNight").offset().top){
	var num = $(".batmanBegins .Reveal_row .Reveal_item").length;
	console.log(num);
	var time = 20 ;

		for (var i = 0; i < num; i++) {
			window.setTimeout("efects("+i+")",time)
			time += 20 ;
		}
	}
	else if(prueba >= $(".darkNight").offset().top ){

	var num = $(".darkNight .Reveal_row .Reveal_item").length;
	console.log(num);
	var time = 20 ;

		for (var i = 0; i < num; i++) {
			window.setTimeout("efects("+i+")",time)
			time += 20 ;
		}
	}

}

function efects(n){
	spans.eq(n).addClass("Reveal_animate")
}*/


