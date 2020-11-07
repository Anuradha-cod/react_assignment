import React from "react";

const array =  ["Journey", "Work", "Lifestyle", "Food & Drink"];

export default class Aside extends React.Component{
    render (){
        return(
<aside class="sidebar">
        <div class="about_aside">
          <h1>About</h1>
          <p>
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum.
          </p>
        </div>
        <div class="sidebar1">
          <h1>Tags</h1>
        {array.map((ele,i)=><button key={i}> 
      {ele}
        </button>) }
          <hr />
          
        </div>
      </aside>
        )
    }
}