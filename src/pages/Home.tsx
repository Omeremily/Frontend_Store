import NavBar from "../components/NavBar";
import Contact from "../components/contact";
import SaleItemSection from "../components/SaleItemSection";

export default function Home() {
  return (
    <>
      <NavBar/>
      <h1>TODO:HOME - hero section</h1>
      <SaleItemSection/>
      <img className="img-fluid" style={{padding: "150px 25px", margin: "0 auto"}} src="./public/imgs/sideToside.jpg" alt="" />
      <Contact/>
    </>
  )
}
