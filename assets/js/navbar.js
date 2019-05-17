(function() {
	window.onload = function() {
		// Search ShowOff
		var searchDivs = document.querySelectorAll('.searchByNav');
		// console.log(searchDivs);

		searchDivs.forEach(function(data, index) {
			data.onclick = function() {
				var lower = document.querySelector('nav.custom-nav-bar .lower');

				var getAttr = lower.getAttribute('class');
				// console.log(getAttr.split(" "));

				var ifActive = getAttr.split(' ').filter(function(data) {
					return data === 'active';
				});

				ifActive.length === 1
					? lower.setAttribute('class', 'lower')
					: lower.setAttribute('class', 'lower active');
				ifActive.length === 1 ? '' : document.querySelector('div.lower.active input').focus();
			};
		});

		var closeSearch = document.querySelectorAll('.close-search');

		closeSearch.forEach(function(data, index) {
			// Close SearchBox
			data.onclick = function() {
				document.querySelector('div.lower.active input').value = '';
				document.querySelector('nav.custom-nav-bar .lower').setAttribute('class', 'lower');
			};
		});

		// Search ShowOff End
	};
})();
