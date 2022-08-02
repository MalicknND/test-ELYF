import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { Link } from 'react-router-dom';

function Home() {
  const [q, setQ] = useState('');

  let [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://fr.openfoodfacts.org?json=true')
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  }, []);

  const handleClick = () => {
    setProducts([]);
    fetch(
      'https://world.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=brands&tag_contains_0=contains&sort_by=unique_scans_n&page_size=20&json=true&tag_0=' +
        q
    )
      .then((res) => res.json())
      .then((result) => setProducts(result.products));
  };

  if (!products.length) {
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
    <>
      <form className="d-flex mb-2" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Recherche par marque de produit"
          aria-label="Search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
        />
        <Button onClick={handleClick} variant="primary">
          Rechercher
        </Button>
      </form>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Id</th>
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
                  <Link
                    to={`/${product._id}`}
                    style={{ color: '#FFF', textDecoration: 'none' }}
                  >
                    Voir plus
                  </Link>
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Home;
