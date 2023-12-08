import ProductImage from "../images/Product.png";

const Content = () => {
  return (
    <main>
      <div className="content-div">
        <h1>Air Jordan 1 Mid</h1>
        <p1>
          This iteration of the AJ1 re-imagines Mike's first signature model
          with a fresh mix of colours.{" "}
        </p1>
        <div className="buttons-div">
          <button>Shop Now</button>
          <button>Category</button>
        </div>
      </div>
      <div className="">
        <img
          className="product-image"
          src={ProductImage}
          alt="shoe image"
        ></img>
       
      </div>
    </main>
  );
};

export default Content;
