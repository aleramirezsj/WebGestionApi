const movies = {
    render: () => {
      const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
      const container = document.querySelector('#contenedorPeliculas');
      let contentHTML = '';
      fetch(urlAPI
      ).then(res => res.json())
        .then(datos => {
          console.log(datos[0]);
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
    addNewMovie:() => {
      const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
      const nuevaPeli = {"nombre":"Interestelar","genero":"Ciencia Ficción","duracion":169,"trailer_url":"https://www.youtube.com/watch?v=UoSSbmD9vqc","sinopsis":"Gracias a un descubrimiento, un grupo de científicos y exploradores, encabezados por Cooper, se embarcan en un viaje espacial para encontrar un lugar con las condiciones necesarias para reemplazar a la Tierra y comenzar una nueva vida allí.","portada_url":"https://es.web.img2.acsta.net/c_310_420/pictures/14/10/02/11/07/341344.jpg"};
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