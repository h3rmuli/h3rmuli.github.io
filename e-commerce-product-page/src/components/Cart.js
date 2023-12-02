import { useSelector } from 'react-redux';
import pic from '../images/image-product-1-thumbnail.jpg';
import { useDispatch } from 'react-redux';
import { removeProduct } from '../features/cartSlice';

export default function Cart() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const checkoutHandler = () => {
    console.log('CHECKOUT');
  };

  const removeHandler = (id) => {
    dispatch(removeProduct(id));
  };

  const Product = ({ item }) => {
    return (
      <div className="grid grid-cols-5 grid-rows-2 gap-x-2">
        <div className="row-span-2">
          <img src={pic} className="h-12 w-12 rounded-lg" />
        </div>
        <div className="text-left text-sm col-span-3 truncate">
          {item.productName}
        </div>
        <div
          className="row-span-1 justify-self-center mt-3"
          onClick={() => removeHandler(item.id)}
        >
          <svg
            width="14"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-slate-400"
          >
            <path
              d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
              id="a"
            />
            <use fillRule="nonzero" />
          </svg>
        </div>
        <div className="text-left text-sm col-span-3">
          <span className="text-slate-500">
            ${item.price} x {item.quantity}
          </span>
          <span className="ml-1 font-semibold">${item.totalSum}</span>
        </div>
      </div>
    );
  };

  const Products = ({ cart }) => {
    return (
      <>
        <div className="flex flex-wrap">
          <div className="w-64">
            {cart.value.map((item, index) => {
              return <Product key={index} item={item} />;
            })}
          </div>
          <div
            className="bg-ora text-white text-center w-64 py-3 rounded-lg font-semibold mt-3"
            onClick={() => checkoutHandler()}
          >
            Checkout
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="bg-white rounded-lg sm:shadow-xl">
        <div className="font-bold p-5 border-b-2">Cart</div>
        <div className="flex flex-wrap p-5">
          {cart.value.length === 0 && (
            <div className="w-full h-32 leading-[8] text-center">
              <>Your cart is empty.</>
            </div>
          )}
          {cart.value.length !== 0 && (
            <>
              <Products cart={cart} />
            </>
          )}
        </div>
      </div>
    </>
  );
}
