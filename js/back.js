
function back(){
	
	
	document.getElementById('forback').remove();
	
	    try{
      var planet=[];
      var mass=[]

const app = document.getElementById('root');
      
const container = document.createElement('div');
container.setAttribute('class', 'row isotope-grid');
container.setAttribute('id','cards');
    var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_name,pl_bmassj&format=json', true);
var i = 0;
//document.getElementById('load').remove();
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
    
    
data.forEach(game => {
if(i<=16*(window.nextcount-1)){
	i=i+1;
}
var j=0;
if(i>(16*(window.nextcount-1)) && i<(16*(window.nextcount)+1)){
  i=i+1;
  
planet.push(game.pl_name);
mass.push(game.pl_bmassj);
console.log(mass[i-1]);
const card = document.createElement('div');

card.setAttribute('class', 'col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item women');
  const card1 = document.createElement('div');
  card1.setAttribute('class','block2');
    const card2 = document.createElement('div');
    card2.setAttribute('class','block2-pic hov-img0');
    const img = document.createElement('img');
    card2.appendChild(img);
	if(((i-1)%16)!=0)
    img.src='images/product-'+((i-1)%16)+'.jpg';
	else
	img.src='images/product-16.jpg';
    //console.log('product-'+(i-17)+'.jpg');
    const link = document.createElement('A');
    link.href='#';
    if(((i-1)%16)!=0)
    link.setAttribute('id',((i-1)%16));
	else
     link.setAttribute('id','16'); 
     link.onclick=function(){
         var lines='<head>\
	<title>Game Warrior Template</title>\
	<meta charset="UTF-8">\
	<meta name="description" content="Game Warrior Template">\
	<meta name="keywords" content="warrior, game, creative, html">\
	<meta name="viewport" content="width=device-width, initial-scale=1.0">\
	<!-- Favicon -->   \
	<link href="img/favicon.ico" rel="shortcut icon"/>\
\
	<!-- Google Fonts -->\
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,500,500i,700,700i" rel="stylesheet">\
\
	<!-- Stylesheets -->\
	<link rel="stylesheet" href="css/bootstrap.min.css"/>\
	<link rel="stylesheet" href="css/font-awesome.min.css"/>\
	<link rel="stylesheet" href="css/owl.carousel.css"/>\
	<link rel="stylesheet" href="css/style.css"/>\
	<link rel="stylesheet" href="css/animate.css"/>\
</head>\
         <body>\
         <header class="header-section">\
		<div class="container">\
			<!-- logo -->\
			<a class="site-logo" href="index.html">\
				<img src="img/logo.png" alt="">\
			</a>\
			<!-- <div class="user-panel">\
				<a href="#">Login</a>  /  <a href="#">Register</a>\
			</div> -->\
			<!-- responsive -->\
			<div class="nav-switch">\
				<i class="fa fa-bars"></i>\
			</div>\
			<!-- site menu -->\
			<nav class="main-menu">\
				<ul>\
					<li><a href="index.html">Home</a></li>\
					<li><a href="product.html">Exoplanets</a></li>\
					<li><a href="categories.html">Blog</a></li>\
					<li><a href="community.html">Forums</a></li>\
				</ul>\
			</nav>\
		</div>\
	</header>\
<br>\
         <div align=center style="background-image:url(img/latest-blog/1.jpg)"><img src="images/product-'+this.id+'.jpg"></div>\
<section class="feature-section spad" style="background-image:url(img/review-bg.jpg)">\
		<div class="container" >\
<div class="row">\
				<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/1.jpg")>\
						<span class="cata new">Name</span>\
						<div class="fi-content text-white">\
							<p> '+planet[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/2.jpg")>\
						<span class="cata strategy">Mass</span>\
						<div class="fi-content text-white">\
							<p> '+mass[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/3.jpg")>\
						<span class="cata new">Radius</span>\
						<div class="fi-content text-white">\
							<p> '+radius[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/4.jpg")>\
						<span class="cata racing">Period</span>\
						<div class="fi-content text-white">\
							<p> '+period[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
</div>\
<div class="row">\
				<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/1.jpg")>\
						<span class="cata new">Axis</span>\
						<div class="fi-content text-white">\
							<p> '+axis[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/2.jpg")>\
						<span class="cata strategy">Eccentricity</span>\
						<div class="fi-content text-white">\
							<p> '+eccentricity[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/3.jpg")>\
						<span class="cata new">Longitude</span>\
						<div class="fi-content text-white">\
							<p> '+longitude[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/4.jpg")>\
						<span class="cata racing">Inclination</span>\
						<div class="fi-content text-white">\
							<p> '+inclination[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
</div>\
<div class="row">\
				<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/1.jpg")>\
						<span class="cata new">Temperature</span>\
						<div class="fi-content text-white">\
							<p> '+temperature[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/2.jpg")>\
						<span class="cata strategy">Age</span>\
						<div class="fi-content text-white">\
							<p> '+age[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/3.jpg")>\
						<span class="cata new">Method</span>\
						<div class="fi-content text-white">\
							<p> '+mehthod[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/4.jpg")>\
						<span class="cata racing">Year Of Discovery</span>\
						<div class="fi-content text-white">\
							<p> '+yod[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
</div>\
<div class="row">\
				<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/1.jpg")>\
						<span class="cata new">Right Ascension</span>\
						<div class="fi-content text-white">\
							<p> '+RA[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/2.jpg")>\
						<span class="cata strategy">Declination</span>\
						<div class="fi-content text-white">\
							<p> '+DEC[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/3.jpg")>\
						<span class="cata new">Distance</span>\
						<div class="fi-content text-white">\
							<p> '+distance[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
<div class="col-lg-3 col-md-6 p-0">\
					<div class="feature-item set-bg" style=background-image:url("img/features/4.jpg")>\
						<span class="cata racing">Metallicity</span>\
						<div class="fi-content text-white">\
							<p> '+metallicity[this.id]+' </p>\
						</div>\
					</div>\
				</div>\
</div>\
</div>\
</section>\
             </body>\
         '
		 document.getElementById('view');
	document.write(lines);
    }
    link.setAttribute('class','block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1');
      const h3 = document.createElement('p');
      h3.textContent="Quick View";
      link.appendChild(h3);
    card2.appendChild(link);
    card1.appendChild(card2);
  const card3=document.createElement('div');
  card3.setAttribute('class','block2-txt flex-w flex-t p-t-14');
    const card4=document.createElement('div');
    card4.setAttribute('class','block2-txt-child1 flex-col-l ');
    const link1=document.createElement('A');
    link1.setAttribute('class','stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6')
    link1.href='product-detail.html';

    const h2=document.createElement('p');
    h2.textContent=game.pl_name;
    link1.appendChild(h2);
    card4.appendChild(link1);
    card3.appendChild(card4);
  card1.appendChild(card3);
  card.appendChild(card1);
container.appendChild(card);
}
else
  return false;
});


  }

app.appendChild(container);
// Send request
request.send();

  
}
  catch(error){
    console.log(error);
}

  


}