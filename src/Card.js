export default function Card() {
    return (
    <div class="d-flex flex-row justify-content-evenly">
        <div class="card text-bg-primary mb-3" style = {{maxWidth: "18rem"}}>
            <div class="card-header"><h5 class="card-title">Card 01</h5></div>
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-bg-danger mb-3" style = {{maxWidth: "18rem"}}>
            <div class="card-header"><h5 class="card-title">Card 02</h5></div>
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
        <div class="card text-bg-success mb-3" style = {{maxWidth: "18rem"}}>
            <div class="card-header"><h5 class="card-title">Card 03</h5></div>
                <div class="card-body">
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    );
}