const listings = [
  {
    id: 1,
    title: "Charizard Pokemon Card",
    images: [{ fileName: "charizard" }],
    price: 2000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 2,
    title: "Pikachu Figurine - Mint Condition",
    images: [{ fileName: "pikachu_figurine" }],
    categoryId: 1,
    price: 80,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 3,
    title: "Mega Rayquaza Ex PSA 9",
    description: "This card is in mint condition",
    images: [{ fileName: "raquaza" }],
    price: 1000,
    categoryId: 1,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 4,
    title: "Charmander Wood Carving",
    images: [{ fileName: "charmander_wodd" }],
    categoryId: 2,
    price: 120,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 5,
    title: "Pokemon Coins (50)",
    images: [{ fileName: "coins" }],
    price: 300,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 6,
    title: "Rare pokemon cards for sale",
    images: [{ fileName: "collection_cards" }],
    price: 10000,
    categoryId: 3,
    userId: 1,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 7,
    title: "Yellow-Cheeks Pikachu, PSA 8",
    description: "Can verify the level of authenticity",
    images: [{ fileName: "yellow-cheeks-pikachu" }],
    categoryId: 1,
    price: 3000,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
  {
    id: 8,
    title: "Groudon Legendary Figurine",
    images: [{ fileName: "groudon" }],
    categoryId: 2,
    price: 50,
    userId: 2,
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
  },
];

const addListing = (listing) => {
  listing.id = listings.length + 1;
  listings.push(listing);
};

const getListings = () => listings;

const getListing = (id) => listings.find((listing) => listing.id === id);

const filterListings = (predicate) => listings.filter(predicate);

module.exports = {
  addListing,
  getListings,
  getListing,
  filterListings,
};
