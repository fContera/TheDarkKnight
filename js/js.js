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


$(window).on("scroll", scrolleando);
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


var spans = $(".Reveal_row .Reveal_item").toArray();
var primeraVez = true ;
function scrolleando(){
	if($(window).scrollTop() > 0 && primeraVez){
		scrollearHero();
		primeraVez = false ;
	}
	var time = 20 ;
	for ( var i = 0; i < spans.length; i++ ) {
		if($(window).scrollTop()*1.9 > $(spans[i]).offset().top){
				$(spans[i]).addClass("Reveal_animate")
		}
    	
    }
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


