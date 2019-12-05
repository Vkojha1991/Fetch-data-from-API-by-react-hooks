import React, { useState, useEffect, Fragment } from 'react';

function Reacthook() {
    
    const [data, setData] = useState([]);

    useEffect(() => {
        //  Path of demo API 
        fetch("https://jsonplaceholder.typicode.com/todos") 
          .then(response => response.json())
          .then(data => {
              if(data.length > 0) {
                    setData(data);
              }
          });
    });
    
    return(
       <Fragment>
           <table>
               <tbody>
                    {
                        data.map((el, index) => (
                            <tr key = { index }>
                                <td>{ el.userId } </td>
                                <td>{ el.id } </td>
                                <td>{ el.title }</td>
                                <td>{ el.completed }</td>
                            </tr> 
                        ))
                    }
               </tbody>
           </table>
       </Fragment>  
    )
}
export default Reacthook;
