const text = ("Some quick example text to build on the card title and make up the bulk of the card's content.");
function card(text) {
    return (
        <div className={'card'} style={{ width: '18rem' }}>
            <img srcSet={''} className={'card-img-top'}></img>
            <div className={'card-body'}>
                <p className={'card-text'}>{text}</p>
            </div>
        </div>
    );
};

ReactDOM.render(<card />, document.getElementById("root"));