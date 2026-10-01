import "../styles/testimonials.css";

function Testimonials(){

const reviews=[

{
name:"Alex",
text:"BMW delivers the perfect combination of power and luxury."
},

{
name:"Sophia",
text:"Driving a BMW feels like experiencing the future."
},

{
name:"Daniel",
text:"The performance and design are unmatched."
}

];


return(

<section className="testimonials">

<h1>Customer Reviews</h1>


<div className="review-container">

{reviews.map((review,index)=>(

<div className="review" key={index}>

<h2>{review.name}</h2>

<p>
"{review.text}"
</p>

</div>

))}

</div>


</section>

)

}

export default Testimonials;