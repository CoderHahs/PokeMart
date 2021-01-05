const categories = [
  {
    id: 1,
    name: "Cards",
    icon: "square",
    backgroundColor: "#fc5c65",
    color: "white",
  },
  {
    id: 2,
    name: "Figurine",
    icon: "sign",
    backgroundColor: "#fd9644",
    color: "white",
  },
  {
    id: 3,
    name: "Holos",
    icon: "star",
    backgroundColor: "#fed330",
    color: "white",
  },
];

const getCategories = () => categories;

const getCategory = (id) => categories.find((c) => c.id === id);

module.exports = {
  getCategories,
  getCategory,
};
