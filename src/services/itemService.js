// 9 total

var catalog = [
  {
    _id: "strap",
    title: "Brown Strap",
    category: "Strap",
    price: 30.0,
    image: "watch strap leather.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "wallet",
    title: "Wallet",
    category: "Accessories",
    price: 52.0,
    image: "Stingray-wallet.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "messenger",
    title: "Messengers Bag",
    category: "Strap",
    price: 25.0,
    image: "Messenger-bag.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "belt",
    title: "Belt",
    category: "Strap",
    price: 875.0,
    image: "Hermes-belt.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "shoe",
    title: "Dress Shoes",
    category: "Strap",
    price: 250.0,
    image: "Park-ave-shoes.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "bag",
    title: "Hand Bag",
    category: "Strap",
    price: 25.0,
    image: "Hermes-birkin.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "case",
    title: "Phone Case",
    category: "Strap",
    price: 25.0,
    image: "Apple-leather-phone-case.jfif",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "jacket",
    title: "Jacket",
    category: "Clothing",
    price: 25.0,
    image: "Leather-bomber.jpg",
    minimum: 1,
    description: "Text text text",
  },
  {
    _id: "exotic",
    title: "Brown Strap",
    category: "Strap",
    price: 25.0,
    image: "Buffalo-gloves.jpg",
    minimum: 1,
    description: "Text text text",
  },
];


class ItemService {
  getCatalog() {
    // logic for server call
    // Retrieve array of products

    // Return mock 
      return catalog;
  }

  saveItem(item) {

  }

  getItemDetails(id) {

  }

}

export default ItemService;