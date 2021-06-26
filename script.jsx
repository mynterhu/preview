/*import { Card , CardDeck , CardGroup , CardColumns } from "https://unpkg.com/react-bootstrap@next/";

const text = ("Some quick example text to build on the card title and make up the bulk of the card's content.");
function divCard() {
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
    </Card>
}

ReactDOM.render(<divCard />, document.getElementById("root")
);*/

var divCard = React.createClass({
    render: function() {
      return (
  
        <div className="card" style={{width: '18rem'}}>
          <img src className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the care and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      );
    }
  });