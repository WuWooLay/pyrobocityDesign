(function() {
	window.onload = function() {

        // Search ShowOff
		var searchDivs = document.querySelectorAll('.searchByNav');
		console.log(searchDivs);

		searchDivs.forEach(function(data, index) {
			data.onclick = function() {
				// console.log("Click");
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

        // Drawer Start

		// Insides Links Of Drawers
		var drawerDropDown = document.querySelectorAll('.drawer-dropdown ');
		// console.log(drawerDropDown);

		drawerDropDown.forEach(function(data, index) {
			data.onclick = function() {
				// console.dir(data);

				var getAttr = data.getAttribute('class');
				// console.log(getAttr.split(" "));

				var ifActive = getAttr.split(' ').filter(function(data) {
					return data === 'active';
				});

				ifActive.length === 1
					? data.setAttribute('class', 'drawer-dropdown ')
					: data.setAttribute('class', 'drawer-dropdown  active');
			};
		});

        // Open Drawer
		var drawerOpener = document.querySelector('.drawer-opener');

		drawerOpener.onclick = function() {
			console.log('Drawer Opener');
			var drawerOverlay = document.querySelector('.drawer-overlay');
			drawerOverlay.setAttribute('class', 'custom-overlay drawer-closer drawer-overlay active');

			var drawer = document.querySelector('.custom-drawer');
			drawer.setAttribute('class', 'custom-drawer active');
		};

        // Close Drawer
        var drawerCloser = document.querySelectorAll('.drawer-closer');

		drawerCloser.forEach( function (data, index) {
            data.onclick = function () {
                var drawerOverlay = document.querySelector('.drawer-overlay');
                drawerOverlay.setAttribute('class', 'custom-overlay drawer-closer drawer-overlay ');

                var drawer = document.querySelector('.custom-drawer');
                drawer.setAttribute('class', 'custom-drawer ');
            }
        });
	};
})();
