(function() {
	window.onload = function() {
		var youtube_frame = document.querySelectorAll('.youtube-frame > iframe');
		// console.log(youtube_frame);

		youtube_frame.forEach(function(data, index) {
			var removeData = [ 'width', 'height' ];
			data.setAttribute('data-aspect-ratio', data.clientHeight / data.clientWidth);
			removeData.forEach(function(removeAttr) {
				data.removeAttribute(removeAttr);
			});
			// data.removeAttribute('height').removeAttribute('width');
			// console.dir(data);
		});

		window.onresize = function() {
			var content_width = document.querySelector('.content-side');

			youtube_frame.forEach(function(data, index) {
				data.setAttribute('width', content_width.clientWidth);
				data.setAttribute('height', content_width.clientWidth * data.dataset.aspectRatio);

				// console.log(content_width.clientWidth);
				// console.log(content_width.clientWidth * data.dataset.aspectRatio);
			});
		};
	};
})();
