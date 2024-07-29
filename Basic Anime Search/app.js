window.addEventListener("load",async()=>{

var animeData=JSON.parse(localStorage.getItem("anime"))

if(animeData){
    CreateCard(animeData);
}
else{
    const url = 'https://anime-manga-and-novels-api.p.rapidapi.com/anime?page=1&pageSize=20';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '4b9c090058msh4a9a563694587bcp150224jsn47f97dbb54be',
		'x-rapidapi-host': 'anime-manga-and-novels-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	localStorage.setItem('anime',JSON.stringify(result.items));
	CreateCard(result.items)
    
} catch (error) {
	console.error(error);
}

}
    
    
})

function CreateCard(data){
	const container=document.getElementsByClassName("grid-container")[0];
	const sectin=document.getElementsByClassName("section-container")[0];

	data.forEach((anime)=>{

		
	container.innerHTML += `<div class="w-[18rem] h-[25rem] px-2 py-2 rounded-md border border-yellow-200 flex flex-col gap-y-2 justify-start items-start">
	<div class="w-[17rem] h-[17rem] rounded-md overflow-hidden shadow-lg ">
	  <img src="https://e1.pxfuel.com/desktop-wallpaper/554/624/desktop-wallpaper-190-anime-scenery-ideas-in-2022-horizontal-anime-pc-thumbnail.jpg" class="w-full h-full object-cover"/>

	</div>
	<div class="flex flex-col items-start justify-start  gay-y-1">
	  <h1 class="text-lg font-bold text-white items-start justify-start">${anime.slug} </h1>
	  <p class="text-sm text-red-50 items-start justify-start">${anime.description}</p>

	</div>
	<div class="grid grid-cols-2 gap-2  ">
	  <span class="px-2 py-2 bg-indigo-400 border-indigo-400 text-white font-normal flex justify-center  items-center gap-2  rounded-md">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
		  <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5M13.991 3l.024.001a1.5 1.5 0 0 1 .538.143.76.76 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.5 1.5 0 0 1-.143.538.76.76 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.5 1.5 0 0 1-.538-.143.76.76 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.5 1.5 0 0 1 .143-.538.76.76 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2"/>
		</svg>
		${anime.episodes}
	  </span>


	  <span class="px-2 py-2 bg-red-400 border-red-400 text-white font-normal flex justify-center items-center gap-2  rounded-md">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
		  <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
		</svg>
	  ${anime.aired}
	  </span>
	  <span class="px-2 py-2 bg-green-400 border-green-400   text-white font-normal flex justify-center items-center gap-2 truncate rounded-md">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16">
		  <path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/>
		</svg>
		${anime.status}
	  </span>
	  <span class="px-2 py-2 bg-blue-400 border-blue-400 text-white font-normal flex justify-center items-center gap-2 truncate rounded-md">
		<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16">
		  <path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/>
		</svg>
		${anime.duration}
	  </span>

	  

	</div>
	<div class="mt-3 w-full">
	  <button class="w-full rounded-md bg-yellow-500 px-4 py-2 text-white font-bold"><a href="${anime.id}"></a></button>

	</div>
</div>`


            

	
	})
}

