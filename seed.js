const mongoose = require('mongoose');
const Product = require('./models/product'); // update path to match your project
mongoose.connect('mongodb://localhost:27017/inventory'); // update if needed

const products = [
  {
    name: 'Milk Chocolate',
    description: 'Creamy milk chocolate bar',
    price: 120,
    quantity: 10,
    image: 'https://images.unsplash.com/photo-1606312618778-d7e3edbc4031' // example image URL
  },
  {
    name: 'Dark Chocolate',
    description: 'Rich dark chocolate 70% cocoa',
    price: 150,
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1588167108373-b7b4c7c9fa5a'
  },
  {
    name: 'Hazelnut Chocolate',
    description: 'Chocolate with crunchy hazelnuts',
    price: 180,
    quantity: 5,
    image: 'https://images.unsplash.com/photo-1590080876806-743b53ae95f8'
  }
];

Product.insertMany(products)
  .then(() => {
    console.log('Products inserted!');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
