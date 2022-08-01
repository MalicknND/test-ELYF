import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      products: [],
    };
  }
  componentDidMount() {
    fetch('https://world.openfoodfacts.org?json=true')
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          products: result.products,
        });
      });
  }

  render() {
    const { isLoaded, products } = this.state;
    if (!isLoaded) {
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
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Nom du produit</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.product_name}</td>
              <td>
                <img src={product.image_front_small_url} height="50" alt="" />
              </td>
              <td>
                <Button variant="primary">
                  <Link to={`/${product._id}`} style={{ color: '#FFF' }}>
                    Voir plus
                  </Link>
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Home;
