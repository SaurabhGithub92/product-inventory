import { Form, Button } from "react-bootstrap";

export default function AddProduct() {
    const addProductData = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <Form onSubmit={addProductData}>
            <Form.Group controlId="formName">
                <Form.Label>Name:</Form.Label>
                <Form.Control name="product_name" type="text" placeholder="Enter Product Name"></Form.Control>
            </Form.Group>

            
            <Form.Group controlId="formDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control name="product_description" type="text" placeholder="Enter Product Description"></Form.Control>
            </Form.Group>

            <Form.Group controlId="formPrice">
                <Form.Label>Price:</Form.Label>
                <Form.Control name="product_price" type="number" placeholder="Enter Product Price"></Form.Control>
            </Form.Group>

            
            <Form.Group controlId="formName">
                <Form.Label>Quantity:</Form.Label>
                <Form.Control name="product_quantity" type="number" placeholder="Enter Product Quantity"></Form.Control>
            </Form.Group>

            <Button variant="primary" type="submit">
                Add to Inventory
            </Button>
        </Form>
    )
}