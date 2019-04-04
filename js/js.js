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
liSections.on("click", flyBat);

function flyBat(){
	//conosole.log(liSections);
	$(".sections li span").css("background-image", "url(css/ui-img/but180.gif)");
	$(".sections li span").css("animation", "flyBat 5s backwards");
	sectionPerson.addClass("entrar");
}


icoArrow.on("click", scrollearHero);

function scrollearHero(){
	//$(".hero .logoIntro").css("top","120%");
	$("#logo path").css("fill","white");
	$(".hero h1:nth-of-type(2)").css("opacity","0");
	$(".hero h1:nth-of-type(1)").css("top","20%");
	$(".hero h1:nth-of-type(1)").css("transform","translate(-50%,-50%) scale(.5)");
	$(".hero .nolan").css("top","120%");
	$(".hero .nolan").css("transform","translate(-50%,-50%) scale(.5)");
	aLogoPage.addClass("aLogoPage");
	console.log($(".mainHeader .mainNav").height());
	var altBegins = $(".batmanBegins").offset().top - $(".mainHeader .mainNav").height();
	console.log(altBegins);
	$("html,body").animate({scrollTop:altBegins},1500);
	//mainNav.css("position", "fixed");
	//aLogoPage.addClass("logo");
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




function scrolleando(){

	var n = document.getElementsByClassName("Reveal_item").length ;
	var time = 100 ;
	for (var i = 0; i < n; i++) {
		window.setTimeout("efects("+i+")",time)
		time += 100 ;
	}
}

function efects(n){
	spans.eq(n).addClass("Reveal_animate")
}


/* EFECTO LLUVIA*/
/*
var nbDrop = 858; 


function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}


function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,1600);
	var dropTop = randRange(-1000,1400);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}

createRain();
*/