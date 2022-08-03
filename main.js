let API = "https://gist.githubusercontent.com/spacecowb0y/f2be54763087f741f6d458ca7cd40855/raw/0be99b657c9d0c99f2ee4016d985f01ec0381db0/productos.json";

fetch(API)
.then(response => response.json())
.then(data =>{


let rows = data.rows;    
let values = rows.map (el => el.value);
// console.log(values);

let filtros = values.filter (element => element.marca == 'REXONA')
     console.log(filtros);
                    
let cards = document.querySelector ('#cards');

     filtros.forEach(element => {
         let div = document.createElement('div');
         div.classList.add('col-12', 'col-md-3', 'mb-3');
          div.innerHTML=`
              <div class="col-12 container-fluid justify-content my-5 py-5">
                     <div class="card" style="width: 18rem;">
                             <div class="card-body">
                                 <h5 id="card-title">${element.marca}</h5>
                                 <p class="">${element.nombre}</p>
                                 <div>
                                 <i class="bi bi-star"></i>
                                 <i class="bi bi-star"></i>
                                 <i class="bi bi-star"></i>
                                 <i class="bi bi-star"></i>
                                 <i class="bi bi-star"></i>
                                 </div>
                                 <a href="#" class="btn btn-success">¡Obtener ya!</a>
                              </div>
                     </div>
              </div>
 `
         cards.appendChild(div);
                     });
});

let stars = document.querySelectorAll('.bi');
stars.forEach(element => {
    add.addEventListener('click', ()=>{
        for (let i = 0; i <= stars.length; i++) {
            let selectedStar = stars[i];
            selectedStar.classList.add('bi-star-fill','text-warning');
            selectedStar.classList.remove('bi-star');
        }
    });
})

