import { Button, Card, Col, Container, Row } from "react-bootstrap";

const Dummy_list = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        key : "1"
    },

    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        key : "2"
    },

    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        key : "3"
    },

    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        key : "4"
    }
]

const ItemList = () => {

    const list = Dummy_list.map(item =>
        <Row>
        <Col xs={4}>
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">{item.title}</Card.Title>
                    <Card.Img src={item.imageUrl}/>
               <Card.Text className="mt-3">${item.price}</Card.Text>
              <Button>Add to cart</Button>
                </Card.Body>
            </Card>
        </Col>
        </Row>
    )

    return (
        <>
            <Container className="mt-3">
                <Container className="text-center">Music</Container>
                {list}
            </Container>
        </>
    )
}

export default ItemList;