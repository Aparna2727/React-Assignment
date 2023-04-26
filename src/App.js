
import './App.css';
import {ListCard} from './Component/listCard';

function App() {

  const array = [
    {
    image : 'https://images.pexels.com/photos/248077/pexels-photo-248077.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'JEWELRY',
    Brand:"SONA & CANDI",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price: $80',
    Rating:"Rating: 5"
  },
{
  image : 'https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'SHOSE',
    Brand:"BOOT",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price: $50',
    Rating:"Rating: 3"
},

{
  image : 'https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg?auto=compress&cs=tinysrgb&w=600' ,
    productName : 'SHIRT',
    Brand:"HERO's",
    productDescription : "Garnier is an international haircare and skincare brand with sub-brands in four categories and 7 areas of expertise. With products formulated to meet the needs." ,
    Price : 'Price:$60',
    Rating:"Rating: 5"
  }
]
  return (

    <div className="App">
   {
    array.map((el , index)  =>
      <ListCard obj={el} />
    )}
    </div>
  );
}

export default App;
