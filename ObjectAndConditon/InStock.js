const product = {
  price: 1200,
  is_instock: true
};

if (product.is_instock == false) {
    console.log("Out of stock");
} else if (product.price > 1000) {
    console.log("Expensive");
} else {
    console.log("Affordable");
}

