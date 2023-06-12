const productList = {
  products: [
    {
      title: "A pillow",
      imageUrl:
        "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
      price: 19.99,
      description: "A soft pillow",
    },
    {
      title: "A carpet",
      imageUrl:
        "https://www.onlinecarpets.co.uk/cdn/shop/products/liben_600x.jpg?v=1669038688",
      price: 89.99,
      description: "A carpet which you might like",
    },
  ],
  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    for (const product of this.products) {
      const productElement = document.createElement("li");
      productElement.className = "product-item";
      productElement.innerHTML = `
          <div>
          <img src="${product.imageUrl}" alt="${product.title}">
          <div class="product-item__content">
          <h2>${product.title}</h2>
          <h3>\$${product.price}</h3>
          <p>${product.description}</p>
          <button>Add to the cart</button>
            </div>
          </div>

      `;
      prodList.append(productElement);
    }
    renderHook.append(prodList);
  },
};

productList.render();
