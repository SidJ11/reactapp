import { IMG_CDN } from "../utils/constants";

const ResCard = (props) =>{
    const {resData} = props;
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, locality} = resData?.card.card.info
    return(
        <div className="p-4 max-w-72 max-h-72 flex flex-col">
            <div className="res-img-container"><img className="rounded-lg" src={IMG_CDN+cloudinaryImageId} /></div>
            <div className="res-details">
                <div className="flex justify-between py-2"> <div className="font-semibold text-lg">{name}</div>
                <div className="res-rating">{avgRating}⭐</div></div>
                <div className="res-cuisines">{cuisines.join(", ")}</div>
                <div className="res-costfortwo">{costForTwo}</div>
                <div className="res-location">{locality}</div>
            </div>
        </div>
    )
}

//Higher order component
export const withPromotedLabel = (ResCard) => {
    return(props) =>{
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
                <ResCard {...props}/>
            </div>
        )
    }
}

export default ResCard;