import React from 'react';

export const ItemDetail = (props) => {
  console.log('ITEM DETAIL', props.item)
  return (
      <div className="item-detail">

          <div className="item-detail-text">
            <span>Name: </span>{props.item.name}
            <br/>
            <span>Price: </span>{props.item.price}
            <br/>
            <span>Model: </span>{props.item.model}
            <br/>
            {/* <span>Condition: </span>{props.item.condition}
            br  
            <span>Category: </span>{props.item.category} */}
            <br/>
            <span>Dimensions: </span>{props.item.dimensions}
            <br/>
            <span>Published At: </span>{props.item.created_at}
            <br/>
            <span>Updated_At: </span>{props.item.updated_at}
            <br/>
            <span>Notes: </span>{props.item.notes}
            </div>
          
            <div className="item-detail-image">{props.item.image}</div>
            
      </div>
  )
}

export default ItemDetail;