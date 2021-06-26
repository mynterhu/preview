const text = ("Some quick example text to build on the card title and make up the bulk of the card's content.");
const divCard = <div className={'card'} style={{ width: '18rem' }}><img srcSet={''} className={'card-img-top'}></img><div className={'card-body'}><p className={'card-text'}>{text}</p></div></div>;

ReactDOM.render(
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
            </Card.Text>
            <Button variant="primary">{text}</Button>
        </Card.Body>
    </Card>,
    document.getElementById("root")
);