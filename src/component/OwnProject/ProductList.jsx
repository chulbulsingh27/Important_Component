import React from 'react';

import Product from './Product';
export default function ProductList(products) {
  return (
    <div className=''>
        {products.map(function(item){
            return (
                <Product
                title={item.title}
                category={item.category}
                imgUrl={item.imgUrl}
                price={item.price}/>
            );
        })}
    </div>
  );
}
//const [query,setQuery] = useState("");
// let data = allData
// function handleChange(event){
    //setQuery(event.target.value);
//     const newQuery = event.target.value;
//     data = allData.filte(function(item){
//         const lowerCaseTitle = item.title.toLowerCase();
//         const lowerQuery = newQuery.toLowerCase();
//         return lowerCaseTitle.indexOf(lowerCaseQwery) != -1;
//     });
//     console.log(data);
//     <input placeholder=''
//     onChange = {handleChange}/>
{/* <select>
<option>Default <option/>
<option>Default <option/>
<option>Default <option/>

</select> */}

// }