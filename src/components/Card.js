export default function RoomCard(){
    const roomcard = document.createElement('div');
    roomcard.className = 'containerCard'
    roomcard.innerHTML = 
    `
    <div class="card" style="width: 20%">

        <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src="public/assets/img/fachada.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/img/hall.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/img/quarto.jpg" class="d-block w-100" alt="...">
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>

        <div class="card-body">
            <h5 class="card-title">Hotel</h5>
            <p class="card-text">Aproveite nosso hotel.</p>
            <a href="#" class="btn btn-primary">Reserve agora!</a>
        </div>

    </div>

     <div class="card" style="width: 20%">

        <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src="public/assets/img/fachada.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/img/hall.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/img/quarto.jpg" class="d-block w-100" alt="...">
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>

        <div class="card-body">
            <h5 class="card-title">Hotel</h5>
            <p class="card-text">Aproveite nosso hotel.</p>
            <a href="#" class="btn btn-primary">Reserve agora!</a>
        </div>

    </div>


     <div class="card" style="width: 20%">

        <div id="carouselExampleIndicators" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src="public/assets/img/fachada.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/img/hall.jpg" class="d-block w-100" alt="...">
                </div>

                <div class="carousel-item">
                    <img src="public/assets/img/quarto.jpg" class="d-block w-100" alt="...">
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>

        <div class="card-body">
            <h5 class="card-title">Hotel</h5>
            <p class="card-text">Aproveite nosso hotel.</p>
            <a href="#" class="btn btn-primary">Reserve agora!</a>
        </div>

    </div>
`
return roomcard;
}