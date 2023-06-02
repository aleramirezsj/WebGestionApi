const movies = {
    render: () => {
      const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
      const container = document.querySelector('#contenedorPeliculas');
      let contentHTML = '';
      fetch(urlAPI
      ).then(res => res.json())
        .then(datos => {
          //console.log(datos[0]);
          for (const peli of datos) {
            let trailerUrl = peli.trailer_url;
            contentHTML += `
              <div class="col-md-4">
                  <a href="${trailerUrl}" target="_blank">
                    <img src="${peli.portada_url}" alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                  <h3 class="title">${peli.nombre}</h3>
              </div>`;
          }
          container.innerHTML = contentHTML;
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
        return movies.render();
      });
    }
  };
  movies.render();