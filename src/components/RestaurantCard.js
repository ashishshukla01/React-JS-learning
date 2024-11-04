const RestaurantCard = (props)=>{

  const {resData} = props;

  const {name, cuisines, avgRating, deliveryTime, costForTwo} = resData?.data;

  return (

    <div className="res-card">

      <img className="res-logo" src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo5m3UeMuFEG_jGtb06cDxUhAutAYc_bVlfA&s" alt="Burger by Mcdonalds" />

      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{avgRating}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{costForTwo}</h4>

    </div>
  
  )

}

export default RestaurantCard;