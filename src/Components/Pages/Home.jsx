export default function Home() {
  return (
    <div className="container mt-5 mb-5">
      <div className="banner mx-auto">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                width={"100%"}
                height={400}
                src="https://images.pexels.com/photos/12704642/pexels-photo-12704642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                width={"100%"}
                height={400}
                src="https://images.pexels.com/photos/12969997/pexels-photo-12969997.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                width={"100%"}
                height={400}
                src="https://images.pexels.com/photos/14437077/pexels-photo-14437077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                className="d-block"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <section className="mx-auto mt-5">
        <h2 className="mb-4 ps-3" style={{color:"#C8373B"}}><u><b>Mobile Skins</b></u></h2>
        <div className="row row-cols-4 products mx-auto d-flex align-items-center justify-content-center">
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
              alt=""
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
          <div className="col mb-5">
            <div className="card" style={{ width: "18rem" }}>
              <img
                src="https://images.pexels.com/photos/14518598/pexels-photo-14518598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                width={"100%"}
                height={200}
                className="card-img-top"
                alt=""
              />
              <div className="card-body">
                <h5 className="card-title">
                  <center>Product Title</center>
                </h5>
                <hr />

                <a href="/" className="btn btn-success w-100">
                  <i className="fas fa-eye"></i> View Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <center>
          <h4 style={{color:"#C8373B"}}><b>For More Items Visite Our Shop</b></h4>
        </center>
      </section>
    </div>
  );
}
