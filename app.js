(async function () {
    const response = await fetch("./data.json");
    const movies = await response.json();
    
    const inputElem = document.getElementById("searchInput");
    const btnElem = document.getElementById("searchbtn");
    const movieResult = document.getElementById("Movieslist");
    const movieslist = document.getElementById("searchbtn");
    
    function movResult(movies){
        console.log(movies);
        movieResult.innerHTML = `
        <h2 class = "title">${movies.title}</h2>
        <ul>${movies.year.map(function(year){
            return"<li>" + movies + "</li>"
        }).join("")}</ul>`
    }


    function displayResult(results){
        listElem.innerHTML = "";
        results.forEach(function(movies){
            const li = document.createElement("li");
            const listItem = `
            <div class="title>${movies.result}<div/>
            <div class="year>${movies.year}<div/>
            `;
            li.innerHTML = movies.title;
            li.addEventListener("click", function(){
                movResult(movies);
            });
            listElem.appendChild(li);
        })
    }
    function search(){
        const query = inputElem.value;
       const result = movies.filter(function(movies)
       {
         return (movies.title.toLowerCase() .includes(query)||
          movies.genre.join("").toLowerCase() .includes(query));
       });
        console.log(query);
       }
    btnElem.addEventListener("click", search);
   
})();
