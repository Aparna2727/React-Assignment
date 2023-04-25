
import './App.css';
import ProductCard from './Component/ProductCard';

function App() {

  const Product1 = {
    // productId:1,
    image : 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'SHIRT',
    Brand:"HERO's",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price:$60',
    Rating:"Rating: 5"
  }

  const Product2 = {
    // productId:2,
    image : 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'WATCH',
    Brand:"MYNTRA",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price: $70',
    Rating:"Rating: 4"
  }
  const Product3 = {
    // productId:3,
    image : 'https://images.pexels.com/photos/6347892/pexels-photo-6347892.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'T-SHIRT',
    Brand:"MESHO",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price: $60',
    Rating:"Rating: 4"
  }

  const Product4 = {
    // productId:4,
    image : 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'SHOSE',
    Brand:"BOOT",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price: $50',
    Rating:"Rating: 3"
  }

  const Product5 = {
    // productId:5,
    image : 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'JEWELRY',
    Brand:"SONA & CANDI",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price: $80',
    Rating:"Rating: 5"
  }

  function proBtn1(){
     alert("Product1 of is  1 , which is SHIRT of brand HERO's has of Price $60 is added in the card , please proceed to pay !!!")
  }
  function proBtn2(){
    alert("product2 of is  2 , which is WATCH of brand MYNTRA has of Price $70 is added in the card , please proceed to pay !!!")
  }
  function proBtn3(){
    alert("product3 of is  3 , which is T-SHIRT of brand MESHO has of Price $60 is added in the card , please proceed to pay !!!")
  }
  function proBtn4(){
    alert("product4 of is  4 , which is SHOSE of brand BOOT has of Price $50 is added in the card , please proceed to pay !!!")
  }
  function proBtn5(){
    alert("product5 of is  5 , which is JEWELARY of brand SONA & CHANDI has of Price $80 is added in the card , please proceed to pay !!!")
  }

const button1 ={
  height: "50px",
  width: "290px",
  padding: "15px",
  fontWeight: "bold",
  background: "orange",
}
const button2 ={
  height: "50px",
  width: "290px",
  padding: "15px",
  fontWeight: "bold",
  background: "blue",
}
const button3 ={
  height: "50px",
  width: "290px",
  padding: "15px",
  fontWeight: "bold",
  background: "pink",
}
const button4 ={
  height: "50px",
  width: "290px",
  padding: "15px",
  fontWeight: "bold",
  background: "green",
}
const button5 ={
  height: "50px",
  width: "290px",
  padding: "15px",
  fontWeight: "bold",
  background: "yellow",
}
  return (
    <div className="App">
      <ProductCard style={button1} ProductDetail={Product1} alertbtn={proBtn1}/>
      <ProductCard style={button2} ProductDetail={Product2} alertbtn={proBtn2}/>
      <ProductCard style={button3} ProductDetail={Product3} alertbtn={proBtn3}/>
      <ProductCard style={button4} ProductDetail={Product4} alertbtn={proBtn4}/>
      <ProductCard style={button5} ProductDetail={Product5} alertbtn={proBtn5}/>
      </div>
  );
}

export default App;
