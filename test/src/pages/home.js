import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

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
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id}>
              <td>{product._id}</td>
              <td>{product.product_name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default Home;
