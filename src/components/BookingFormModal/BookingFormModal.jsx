import { Button, Form, Modal } from "react-bootstrap";

const BookingFormModal = (props) => {
    const { data } = props;

    
    const handleBookTicket = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const show_name = form.show_name.value;
        const ticket_quantity = form.ticket_quantity.value;

        console.log(show_name, ticket_quantity)
        props.onHide();
    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title className="mx-auto" id="contained-modal-title-vcenter">
                    Form For Booking A Ticket
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleBookTicket}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" name="name" placeholder="Enter name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Show Name</Form.Label>
                        <Form.Control type="name" name="show_name" defaultValue={data.show?.name} disabled />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Ticket Quantity</Form.Label>
                        <Form.Control type="number" name="ticket_quantity" placeholder="Enter quantity" required/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Book Now
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>

    );
};

export default BookingFormModal;