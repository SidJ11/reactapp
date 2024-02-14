const InstamartCard = (props) => {
    const {data} = props;
    const {title, brand, price, rating, images} = data;
  return (
    <div className="res-card">
            <div className="res-img-container"><img className="res-img" src={images[1]} /></div>
            <div className="res-details">
                <div className="res-namerating"> <div className="res-name">{title}</div>
                <div className="res-rating">{rating}⭐</div></div>
                <div className="res-cuisines">{brand}</div>
                <div className="res-costfortwo">${price}</div>
                <div className="res-location"></div>
            </div>
        </div>
  )
}

export default InstamartCard