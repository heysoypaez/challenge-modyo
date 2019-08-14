const render = (async () => {

	const fetchDataApi = async (url) => {

		try {
			const data = await fetch(url);
			response = await data.json();
			console.log(response);
			return response;
		}
		catch(error) {
			console.error(error);
		}
	}

	const users = await fetchDataApi("https://jsonplaceholder.typicode.com/users");
	const posts = await fetchDataApi("https://jsonplaceholder.typicode.com/posts");
	const avatars = [
			"./public/img/person_4.jpg",
			"./public/img/person_3.jpg",
			"./public/img/person_2.jpg",
			"./public/img/person_1.jpg"
	]

	function createTemplate(HTMLString) {
			
		const $html = document.implementation.createHTMLDocument();
		$html.body.innerHTML = HTMLString;
		return $html.body.children[0];
	}

	const testimonyTemplate = () => {

		const testimony = (i) => (`
		 <article class="testimonial">
					<figure class="testimonial__avatar">
						 <img src="${avatars[i]}" width="300" /> 
					</figure>
					<blockquoute class="testimonial__quote">
						"${posts[i].body}"
					</blockquoute>
					<h3 class="testimonial__name">${users[i].name}</h3>			 	
			</article>`
		);

		let testimonies = [];
		for(let i = 0; i < avatars.length; i++ ) {
			testimonies.push(testimony(i))
		}

		return (`
			<section class="testimonials__slider"> 
				${testimonies}
			</section>`)
	}

	const $container = document.getElementById('testimonialsContainer');
	const $testimony = createTemplate(testimonyTemplate())
	$container.append($testimony);
})();

