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
    // <div>
    //   <p>
    //     <span>Nom du produit : {product.product_name} </span>
    //   </p>
    //   <p>
    //     {product.ingredients_text} <img src={product.image_front_small_url} height="200" alt="" />

    //   </p>
    // </div>

    // <Container>
    //   <Row>
    //     <Col>
    //       <Card style={{ width: '18rem' }}>
    //         <Card.Body>
    //           <Card.Title>Ingredients</Card.Title>
    //           <Card.Text>
    //             <span>
    //               Nom du produit : {product.product_name} <br /> Ingredients :{' '}
    //               {product.ingredients_text}
    //             </span>
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     </Col>
    //     <Col>{product.ingredients_text}</Col>
    //     <Col>
    //       <img src={product.image_front_small_url} height="400" alt="" />
    //     </Col>
    //   </Row>
    // </Container>

    <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Ingredients</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to
            additional content.{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
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
