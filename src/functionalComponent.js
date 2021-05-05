import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from "react";

export default function AddProduct() {
  const initialValue = [];
  const [products, setProducts] = useState(initialValue);
  const formData = createRef();

  const addProductData = (event) => {
    event.preventDefault();
    const newProduct = {
      product_name: formData.current.product_name.value,
      product_description: formData.current.product_description.value,
      product_price: Number(formData.current.product_price.value),
      product_quantity: Number(formData.current.product_quantity.value),
    };

    setProducts([...products, newProduct]);
  };

  const increaseQuantity = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].product_quantity++;
    setProducts([...products]);
  }

  const decreaseQuantity = (event) => {
    const indexOfArray = event.target.value;
    products[indexOfArray].product_quantity--;
    setProducts([...products]);
  }

  return (
    <>
      <Form onSubmit={addProductData} ref={formData}>
        <Form.Group controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            name="product_name"
            type="text"
            placeholder="Enter Product Name"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formDescription">
          <Form.Label>Description:</Form.Label>
          <Form.Control
            name="product_description"
            type="text"
            placeholder="Enter Product Description"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formPrice">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            name="product_price"
            type="decimal"
            placeholder="Enter Product Price"
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formQuantity">
          <Form.Label>Quantity:</Form.Label>
          <Form.Control
            name="product_quantity"
            type="number"
            placeholder="Enter Product Quantity"
          ></Form.Control>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add to Inventory
        </Button>
      </Form>
    <br />
      {products.length > 0 && (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {
                products.map((item, index) => {
                    return(
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item.product_name}</td>
                            <td>{item.product_description}</td>
                            <td>{item.product_price}</td>
                            <td>{item.product_quantity}</td>
                            <td>
                                <Button variant="success" onClick={event=> increaseQuantity(event)} value={index}>
+
                                </Button> { ' '}
                                <Button variant="danger" onClick={event => decreaseQuantity(event)} value={index}>
                                    -</Button>
                            </td>
                        </tr>
                        )
                    })
                }   
            
          </tbody>
        </Table>
      )}
      <br />
    </>
  );
}
