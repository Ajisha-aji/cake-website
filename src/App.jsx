import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import AppBar from './Components/AppBar';
import Home from './Components/Pages/Home';
import Shop from './Components/Pages/Shop';
import { Context } from './Components/Pages/Context.js';
import Cart from './Components/Pages/Cart.jsx';
import Form from './Components/Pages/Form';
import img1 from '../src/assets/chocolateimages.jpg';
import img2 from '../src/assets/green2.jpg';
import img3 from '../src/assets/browinewithcream.jpg';
import img5 from '../src/assets/golden-butterscotch-eggless-cake_1.webp';
import img4 from '../src/assets/pink.jpg';
import img6 from '../src/assets/theme1.jpg';
import img7 from '../src/assets/c2c73442eb96740a72b622275b103b16.jpg';
import img8 from '../src/assets/graph.jpg';
import img9 from '../src/assets/chocolatenobakedesserts.jpg';
import img10 from '../src/assets/fruit-overload-cake-half-kg-eggless_1.webp';
import img11 from '../src/assets/theme2.jpg';
import img12 from '../src/assets/oreoglasscake.jpg';
import ProductView from './Components/ProductView.jsx';
import Aboutus from './Components/Aboutus.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  const products = [
    {
      "id": 1,
      "name": "Chocolate Truffle Cake",
      "category": "Chocolate",
      "price": 650,
      "rating": 4.9,
      "description": "Rich chocolate cake with smooth ganache.",
      "image": img1

    },
    {
      "id": 2,
      "name": "Vanilla Cream Cake",
      "category": "Vanilla",
      "price": 500,
      "rating": 4.7,
      "description": "Soft vanilla sponge with fresh cream.",
      "image": img2
    },
    {
      "id": 3,
      "name": "Cream Browine",
      "category": "Premium",
      "price": 750,
      "rating": 4.8,
      "description": "Classic red velvet with cream cheese frosting.",
      "image": img3
    },
    {
      "id": 4,
      "name": "Custom Designer Cake",
      "category": "Custom",
      "price": 600,
      "rating": 4.8,
      "description": "Chocolate sponge layered with cream and cherries.",
      "image": img6
    },
    {
      "id": 5,
      "name": "Strawberry Cake",
      "category": "Fruit",
      "price": 550,
      "rating": 4.6,
      "description": "Fresh strawberry flavor with whipped cream.",
      "image": img4
    },
    {
      "id": 6,
      "name": "Butterscotch Cake",
      "category": "Classic",
      "price": 550,
      "rating": 4.7,
      "description": "Creamy butterscotch with crunchy praline.",
      "image": img5
    },
    {
      "id": 7,
      "name": "Red Rose Cake",
      "category": "Custom",
      "price": 950,
      "rating": 4.9,
      "description": "Beautiful rose-inspired cake for special occasions.",
      "image": img7
    },
    {
      "id": 8,
      "name": "Blueberry Cake",
      "category": "Fruit",
      "price": 700,
      "rating": 4.7,
      "description": "Light cream cake topped with blueberries.",
      "image": img8
    },
    {
      "id": 9,
      "name": "Coffee Walnut Cake",
      "category": "Classic",
      "price": 680,
      "rating": 4.6,
      "description": "Coffee-flavored sponge with crunchy walnuts.",
      "image": img9
    },
    {
      "id": 10,
      "name": "Fruit Cake",
      "category": "Fruit",
      "price": 620,
      "rating": 4.8,
      "description": "White chocolate shavings with vanilla cream.",
      "image": img10
    },
    {
      "id": 11,
      "name": "Banana Delight Cake",
      "category": "Fruit",
      "price": 580,
      "rating": 4.5,
      "description": "Sweet Banana cream cake with fruity layers.",
      "image": img11
    },
    {
      "id": 12,
      "name": "Oreo Crunch Cake",
      "category": "Chocolate",
      "price": 700,
      "rating": 4.8,
      "description": "Chocolate cake loaded with cookie crunch.",
      "image": img12
    },

  ]
  const [cart, Setcart] = useState([]);
  const carttoggle = (product) => {
    Setcart((preitem) => {
      const isIncart = preitem.find((item) => item.id === product.id);
      if (isIncart) {
        return preitem.filter((item) => item.id !== product.id);
      }
      else {
        return [...preitem, product]
      }
    })

  }
  return (
    <Context.Provider value={{ cart, carttoggle,products }}>
      <Router>
        <AppBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/shop" element={<Shop />}/>
          <Route path="/form" element={<Form />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductView />} />
        </Routes>
        <Footer/>
      </Router>
    </Context.Provider>
  )
}

export default App