const movies = {
    //definimos la función que obtiene todas las peliculas
    obtenerTodos: () => {
      //creamos una constante que tiene la URL de nuestra API
      const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
      //Creamos una constante que tendrá una referencia directa con el DIV "contenedorPeliculas" y nos permitirá cargarle contenido
      const divContenedorPeliculas = document.querySelector('#contenedorPeliculas');
      //cremos una variable vacía que contendrá todo el código HTML que vamos a insertar
      let contenidoHTML = '';
      //obtenemos las películas en formato Json
      fetch(urlAPI
      ).then(res => res.json())
        .then(datos => {
          //enviamos a la consola de javascript lo obtenido
          console.log(datos);
          //recorremos la colección de películas obtenidas, obteniendo una referencia para cada una con la constante "peli", por cada iteración
          for (const peli of datos) {
            contenidoHTML += `
              <div class="col-md-4">
                  <a href="${peli.trailer_url}" target="_blank">
                    <img src="${peli.portada_url}" alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${peli.nombre}</h3>
                  <a href="#" onclick="movies.eliminarPelicula('${peli._id}');" >Eliminar</a>
              </div>`;
          }
          divContenedorPeliculas.innerHTML = contenidoHTML;
        })
    },
    agregarNuevaPelicula:() => {
      const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
      const nuevaPeli = {"nombre":"Matrix","genero":"Ciencia Ficción/Acción","duracion":136,"trailer_url":"https://www.youtube.com/watch?v=OM0tSTEQCQA","sinopsis":"The Matrix (conocida como Matrix en Hispanoamérica) es una película de acción y ciencia ficción de 1999 escrita y dirigida por las hermanas Wachowski y protagonizada por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving. Representa un futuro distópico en el que la humanidad está atrapada sin saberlo dentro de una realidad simulada llamada Matrix, que las máquinas inteligentes han creado para distraer a los humanos mientras usan sus cuerpos como fuente de energía en campos de cultivo","portada_url":"https://pics.filmaffinity.com/Matrix-374933715-large.jpg"};
      fetch(urlAPI, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaPeli)
      })  
      .then(response => {
        console.log(response);
        return movies.obtenerTodos();
      });
    },
    eliminarPelicula:(idPeliculaBorrar)=>{
      alert("Borrando la película:");
      const urlAPI = `https://practprof2023-2855.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6466d9870b60fc42f4e197bf`
      fetch(urlAPI, {
        method: 'DELETE'
        })
        .then(response => {
          console.log(response);
          return movies.obtenerTodos();
        }); 
    }
  };
  movies.obtenerTodos();