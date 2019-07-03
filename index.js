let proxyUrl = 'https://cors-anywhere.herokuapp.com/';
let requestURL = 'https://don16obqbay2c.cloudfront.net/frontend-test-task/gallery-images.json';
fetch(proxyUrl + requestURL)
	.then(response => response.text())
	.then(function showImgs(jsonObj) {
		let imgs = JSON.parse(jsonObj);
		for (image in imgs.galleryImages) {
			let getGallery = document.getElementById('row');
			let img = new Image();
			img.src = imgs.galleryImages[image].url;
			getGallery.appendChild(img);			
		}
	})

function getImage() {
	event.preventDefault();
	let getGallery = document.getElementById('row');
	let img = new Image();
	img.src = document.getElementById('field').value;
	getGallery.appendChild(img);
	document.getElementById('field').value = ""	
}


