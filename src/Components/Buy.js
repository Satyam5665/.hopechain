import { ethers } from "ethers";
import c1 from "../Components/1.png";
import c2 from "../Components/2.png";
import c3 from "../Components/3.png";


const Buy = ({ state }) => {
  const buyChai = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buychai(name, message, amount);

    await transaction.wait();
    console.log("Transaction Completed");
  };
  return (
    <>
      <nav id="navbar-example2" class="navbar">
        <a class="navbar-brand" href="#" id="hope">
          hope<span id="white">Chain</span>
        </a>
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a class="nav-link" href="#fat" id="white">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" id="white" href="#mdo">
              Donate
            </a>
          </li>
        </ul>
      </nav>
      <div data-spy="scroll" data-target="#navbar-example2">
        <h4 id="fat">
          <div id="carouselExampleIndicators" class="carousel slide">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
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
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={c1} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={c2} class="d-block w-100" alt="..." />
              </div>
              <div class="carousel-item">
                <img src={c3} class="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </h4>

        <h4 id="mdo">
          <form onSubmit={buyChai}>
            <br></br>
            <div class=" row g-3 align-items-center">
              <label for="exampleInputEmail1" class="form-label">
                <h5> Your Name Here</h5>
              </label>
              <br></br>
              <input
                class="form-control"
                type="text"
                id="name"
                placeholder="Enter Your Name"
                aria-describedby="emailHelp"
              ></input>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                <h5>Message</h5>
              </label>
              <br></br>
              <input
                class="form-control"
                type="text"
                id="message"
                placeholder="Enter Your Message"
              ></input>
            </div>

            <button type="submit" class="btn btn-secondary">
              Donate 0.01eth
            </button>
          </form>
        </h4>
      </div>
    </>
  );
};

export default Buy;
