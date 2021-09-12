//0. definir o array que vau guardar os filmes
const moviesArray = JSON.parse(localStorage.getItem('movies')) || [];

const movieForm = document.querySelector("#movieForm");

//7. criar funçao popular os filme
function showMovies(clearMovies = false) {
    //8. definir o movieContet para manipular o DOM
    const movieContent = document.querySelector(".content");

    //12. Limpar o conteudo da div sempre que um novo filme for adiciondo
    if (clearMovies) {
        movieContent.innerHTML = '';
    }
    //9. checar se o array existe e é maior que zero
    if (moviesArray.length > 0) {
        //aqui vamos a mapear os nossos filmes
        //11. utiliza o loop forEach para imprimir os filmes
        moviesArray.forEach((movie) => {
            movieContent.innerHTML = movieContent.innerHTML + `<div class="movie-card"><div class="movie-details">
            Titulo: ${movie.movieTitle} <br />
            Descrição: ${movie.description} <br />
            Atores: ${movie.actors} 
             </div>
             <img src="${movie.image}" alt="${movie.movieTitle}" /> <br />
             </div>`
        });
        } else {
        movieContent.innerHTML = 'Sem filmes disponíveis';
    }
}

//1. Criar função para mostrar o formulario
function showAddMoviesModal() {
    movieForm.style = 'display: flex';
}

//2. Adicionar evento para pegar dados do formulario
movieForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let movie = {};
    movie.movieTitle = document.getElementById('movieTitle').value;
    movie.description = document.getElementById('description').value;
    movie.actors = document.getElementById('actors').value;
    movie.image = document.getElementById('image').value;

    const alertMessage = document.querySelector(".alert")

    //3. checar se o form está vazío
    if (movieTitle === '' || movie.description === '' || movie.actors ==='' || movie.image === '') {
        //3.1 mostrar mensagens caso esteja vazío
        alertMessage.innerHTML = 'Por favor preencha todos os dados!!';
        alertMessage.style = 'display: block; color: red';
    } else {
        //4 adicionar informaçoes no nosso array e no localStorage
        moviesArray.push(movie);
        localStorage.setItem("movies", JSON.stringify(moviesArray));
        //chamamos a função de mostrar os filmes
        showMovies(true);
        //5. mostrar a mensagem de sucesso
        alertMessage.innerHTML = 'Filme adicionado com sucesso!';
        alertMessage.style = 'display: block; color: green';
        //6. remover essa mensagem e resetar os dados do formulario
        setTimeout(() => {
            //remover o conteudo de .alert
            alertMessage.innerHTML = '';
            //setar o formulario para desaparecer com display none
            movieForm.style = 'display: none';
            //resetear os valores do nosso formulario
            movieForm.reset();
        }, 2000)
    }
});

//10. chamar a função ao carregar a pagina
window.onload = function () {
    showMovies()
}