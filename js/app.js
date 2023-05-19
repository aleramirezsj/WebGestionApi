const movies = {
    render: () => {
      const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas';
      const container = document.querySelector('#contenedorPeliculas');
      let contentHTML = '';
  
      fetch(urlAPI,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-apikey': '6466d9870b60fc42f4e197bf'
        }
      })
        .then(res => res.json())
        .then((json) => {
          for (const peli of json.data.results) {
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
    }
  };
  movies.render();