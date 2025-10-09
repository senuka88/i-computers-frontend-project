export default function ProductCard(props){ //this function name should start with capital at all times and it would be the name of the tag we create uniquely on our own

    console.log(props.name) //props are the properties which were added to our tag and it could be run in the function we had created above for our tag

    //props.name suggests the name property given in our first of many tag
return(
 <div>
  <h1>{props.name}</h1> 
  <img src={props.image}></img> 
  <p> {props.price}</p>
</div>

 //we can add image and price properties as follows too

 //here we have to add js in html but previously we added html to js so now we have to
 //  always use{} when adding js in html

 
 // div tag from app.jsx is copied here

    ); 

}