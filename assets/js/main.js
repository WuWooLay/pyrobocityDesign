(function() {
	window.onload = function() {
		// Search ShowOff
		var searchDivs = document.querySelectorAll('.searchByNav');
		// console.log(searchDivs);

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
			// console.log('Drawer Opener');
			var drawerOverlay = document.querySelector('.drawer-overlay');
			drawerOverlay.setAttribute('class', 'custom-overlay drawer-closer drawer-overlay active');

			var drawer = document.querySelector('.custom-drawer');
			drawer.setAttribute('class', 'custom-drawer active');
		};

		// Close Drawer
		var drawerCloser = document.querySelectorAll('.drawer-closer');

		drawerCloser.forEach(function(data, index) {
			data.onclick = function() {
				var drawerOverlay = document.querySelector('.drawer-overlay');
				drawerOverlay.setAttribute('class', 'custom-overlay drawer-closer drawer-overlay ');

				var drawer = document.querySelector('.custom-drawer');
				drawer.setAttribute('class', 'custom-drawer ');
			};
		});

		// 

		// Nav Bar Sticky Func
		var pageY_Navbar = window.pageY_NavbarOffset;

		function stickyNavBar() {
			// console.log('pageY_Navbar', pageY_Navbar);
			var upperLowerContainer = document.querySelector('.upperlower-container');
			if (pageY_Navbar < window.pageYOffset) {
				// console.log('On Scroll Add Remove Class');
				if (!upperLowerContainer.classList.contains('hide')) upperLowerContainer.classList.add('hide');
				var lower = document.querySelector('nav.custom-nav-bar .lower');
				if (lower.classList.contains('active')) {
					lower.classList.remove('active');
					document.querySelector('div.lower input').blur();
				}
			} else {
				// console.log('Remove Class and Show Nav Bar');
				if (upperLowerContainer.classList.contains('hide')) upperLowerContainer.classList.remove('hide');
			}
			pageY_Navbar = window.pageYOffset;
			// console.log('New pageY', pageY);
		}

		// Related Articles Func
		function showRelatedArticles() {
			//  relatedArticleContainer Div
			var relatedArticleContainer = document.querySelector('.related-article-container');
			if (!relatedArticleContainer) {
				return;
			}
			// console.dir(relatedArticleContainer.offsetTop);
			// console.log(window.pageYOffset);
			// console.log(window.innerHeight);
			var window_PageYOffest = window.pageYOffset;
			var window_innerHeight = window.innerHeight;
			var total_Height = window_PageYOffest + window_innerHeight;
			var stickty = document.querySelector('.relative-article-show-container');

			if (total_Height > relatedArticleContainer.offsetTop) {
				// console.log('No');
				if (stickty.classList.contains('fixed')) stickty.classList.remove('fixed');
			} else {
				// console.log('Sticky');
				// console.log(stickty);
				if (!stickty.classList.contains('fixed')) stickty.classList.add('fixed');
				
			}
			// console.log(total_Height);
		}

		function relatedArticleClickListener() {
			var clickDiv = document.querySelector('.show-articles');
			if(!clickDiv) return;
			var stickty = document.querySelector('.related-article-container');
			clickDiv.onclick = function () {
				window.scrollTo({
					top: stickty.offsetTop,
					behavior: 'smooth'
				});
			}
		}
		
		// Initial Sticky Start
		showRelatedArticles();
		relatedArticleClickListener();
		// Scroll Sticky
		window.onscroll = function() {
			stickyNavBar();
			showRelatedArticles();
		};
	};
})();
