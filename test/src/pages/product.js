import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Product() {
  const { id } = useParams();

  let [product, setProduct] = useState(null);
  useEffect(() => {
    fetch('https://world.openfoodfacts.org/api/v2/product/' + id)
      .then((res) => res.json())
      .then((result) => setProduct(result.product));
  });

  if (!product) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Description</Card.Title>
          <Card.Text>
            <span>
              Id : {product.code} <br /> Nom du produit : {product.product_name}{' '}
              <br /> Createur : {product.creator} <br /> Quantité :{' '}
              {product.quantity} <br /> Marque : {product.brands_tags}
            </span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          <Card.Text>{product.ingredients_text_fr}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Image</Card.Title>
          <Card.Text>
            <img src={product.image_front_small_url} height="200" alt="" />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted"></small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}
// class Product extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoaded: false,
//       product: null,
//     };
//   }
//   componentDidMount() {
//     console.log(this.props);
//     fetch('https://world.openfoodfacts.org/api/v2/product/04963406')
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({
//           isLoaded: true,
//           product: result.product,
//         });
//       });
//   }
//   render() {
//     return <div>Détails</div>;
//   }
// }

export default Product;
