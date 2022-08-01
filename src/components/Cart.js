// import Test from "../asset/imageTest.jpg";

const Cart = (props) => {

  const {image, description} = props;

  return (
    <div className="mb-6 hover:brightness-75 duration-100">
      <img src={image} alt={description} className="w-full rounded"/>
    </div>
  );
};

export default Cart;
