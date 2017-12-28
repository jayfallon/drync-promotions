(function(){

	var navItems = [
		{'value': 'dashboard', 'link': ''},
		{'value': 'order management', 'link': ''},
		{'value': 'reporting', 'link': ''},
		{'value': 'marketing', 'link': ''},
		{'value': 'promotions', 'link': '/', },
		{'value': 'store', 'link': ''},
		{'value': 'help', 'link': ''}
	]

	var navDisplay = document.getElementById('nav');
	var navWrapper = document.createElement('div');
	navWrapper.setAttribute('class', 'nav-wrapper');
	navDisplay.appendChild(navWrapper);

	function writeToNav(item, index) {
		nav = document.createElement('div');
		if (item.value == "promotions") {
			nav.setAttribute('class', ('active nav-item-0' + index));
		} else {
			nav.setAttribute('class', ('nav-item-0' + index));
		}
		navA = document.createElement('a');
		navA.setAttribute('href', item.link);
		navATx = document.createTextNode(item.value);
		navA.appendChild(navATx);
		nav.appendChild(navA);
		navWrapper.appendChild(nav);
	}

	function populateNav(navArray) {
		navArray.map(writeToNav);
	}

	populateNav(navItems);
})();
