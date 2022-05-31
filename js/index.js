
// Back to top

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if ( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        document.getElementById("backToTopBtn").style.display = "block";
    } else {
        document.getElementById("backToTopBtn").style.display = "none";
    }
}

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

//Progress Bar

function move() {
  
	var html5 = document.getElementById( "progressBar-html5" );
	var css = document.getElementById( "progressBar-css" );
	var js = document.getElementById( "progressBar-js" );
	var php = document.getElementById( "progressBar-php" ); 
	var java = document.getElementById( "progressBar-java" );  
	
	var htmlWidth = 1;
	var cssWidth = 1;
	var jsWidth = 1;
	var phpWidth = 1;
	var javaWidth = 1;
	
	var htmlId = setInterval( progressBarHtml, 10 );
	var cssId = setInterval( progressBarCss, 10 );
	var jsId = setInterval( progressBarJs, 10 );
	var phpId = setInterval( progressBarPhp, 10 );
	var javaId = setInterval( progressBarJava, 10 ); 

	function progressBarHtml() {
		if (htmlWidth >= 90) {
			clearInterval( htmlId );
		} else {
			htmlWidth++; 
			html5.style.width = htmlWidth + '%'; 
		}
	}

	function progressBarCss() {
		if (cssWidth >= 80) {
			clearInterval( cssId );
		} else {
			cssWidth++; 
			css.style.width = cssWidth + '%'; 
		}
	}

	function progressBarJs() {
		if (jsWidth >= 70) {
			clearInterval( jsId );
		} else {
			jsWidth++; 
			js.style.width = jsWidth + '%'; 
		}
	}

	function progressBarPhp() {
		if (phpWidth >= 60) {
			clearInterval( phpId );
		} else {
			phpWidth++; 
			php.style.width = phpWidth + '%'; 
		}
	}

	function progressBarJava() {
		if (javaWidth >= 50) {
			clearInterval( javaId );
		} else {
			javaWidth++; 
			java.style.width = javaWidth + '%'; 
		}
	}

}