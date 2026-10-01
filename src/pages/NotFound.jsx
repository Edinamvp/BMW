import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function NotFound(){

return(

<>

<Navbar/>

<section
style={{
minHeight:"70vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
flexDirection:"column"
}}
>

<h1
style={{
fontSize:"80px",
marginBottom:"20px"
}}
>

404

</h1>

<p
style={{
fontSize:"22px"
}}
>

Oops! This page doesn't exist.

</p>

</section>

<Footer/>

</>

)

}

export default NotFound;