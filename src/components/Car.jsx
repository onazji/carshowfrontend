import React from 'react'

const Car = (props) => {
  const {id,brand,model,color,price,year} = props.data;
  return (
    <tr >
      <td>{id}</td>
       <td>{brand}</td>
       <td>{model}</td>
       <td>{color}</td>
       <td>{year}</td>
       <td>{price}</td>
    </tr>
    
  )
}

export default Car;