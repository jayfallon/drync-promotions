(function(){
	var nav = document.getElementById('nav');

	navWrapper = document.createElement('div');
	navWrapper.setAttribute('class', 'nav-wrapper');

	nav01 = document.createElement('div');
	nav01.setAttribute('class', 'nav-item-01');
	nav01A = document.createElement('a');
	nav01A.setAttribute('href', "");
	nav01ATx = document.createTextNode("Dashboard");
	nav01A.appendChild(nav01ATx);
	nav01.appendChild(nav01A);
	navWrapper.appendChild(nav01);

	nav02 = document.createElement('div');
	nav02.setAttribute('class', 'nav-item-02');
	nav02A = document.createElement('a');
	nav02A.setAttribute('href', "");
	nav02ATx = document.createTextNode("Order Management");
	nav02A.appendChild(nav02ATx);
	nav02.appendChild(nav02A);
	navWrapper.appendChild(nav02);

	nav03 = document.createElement('div');
	nav03.setAttribute('class', 'nav-item-03');
	nav03A = document.createElement('a');
	nav03A.setAttribute('href', "");
	nav03ATx = document.createTextNode("Reporting");
	nav03A.appendChild(nav03ATx);
	nav03.appendChild(nav03A);
	navWrapper.appendChild(nav03);

	nav04 = document.createElement('div');
	nav04.setAttribute('class', 'nav-item-04');
	nav04A = document.createElement('a');
	nav04A.setAttribute('href', "");
	nav04ATx = document.createTextNode("Marketing");
	nav04A.appendChild(nav04ATx);
	nav04.appendChild(nav04A);
	navWrapper.appendChild(nav04);

	nav05 = document.createElement('div');
	nav05.setAttribute('class', 'nav-item-05 active');
	nav05A = document.createElement('a');
	nav05A.setAttribute('href', "/");
	nav05ATx = document.createTextNode("Promotions");
	nav05A.appendChild(nav05ATx);
	nav05.appendChild(nav05A);
	navWrapper.appendChild(nav05);

	nav06 = document.createElement('div');
	nav06.setAttribute('class', 'nav-item-06');
	nav06A = document.createElement('a');
	nav06A.setAttribute('href', "");
	nav06ATx = document.createTextNode("Store");
	nav06A.appendChild(nav06ATx);
	nav06.appendChild(nav06A);
	navWrapper.appendChild(nav06);

	nav07 = document.createElement('div');
	nav07.setAttribute('class', 'nav-item-07');
	nav07A = document.createElement('a');
	nav07A.setAttribute('href', "");
	nav07ATx = document.createTextNode("Help");
	nav07A.appendChild(nav07ATx);
	nav07.appendChild(nav07A);
	navWrapper.appendChild(nav07);

	nav.appendChild(navWrapper);
})();
