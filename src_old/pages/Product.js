import {useParams} from 'react-router-dom';

const Product = (props) => {
  const {productId} = useParams();

  return (
    <section>
      <h1>Product - {productId}</h1>
    </section>
  );
}

export default Product;