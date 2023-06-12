class Product {
  title = "DEFAULT";
  imageUrl;
  description;
  price;

  constructor(title, image, description, price) {
    this.description = description;
    this.imageUrl = image;
    this.description = description;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      "A pillow",
      "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
      "A soft pillow",
      19.99
    ),
    // {
    //   title: "A pillow",
    //   imageUrl:
    //     "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
    //   price: 19.99,
    //   description: "A soft pillow",
    // },
    {
      title: "A carpet",
      imageUrl:
        "https://www.onlinecarpets.co.uk/cdn/shop/products/liben_600x.jpg?v=1669038688",
      price: 89.99,
      description: "A carpet which you might like",
    },
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById("app");
    const prodList = document.createElement("ul");
    prodList.className = "product-list";
    //   for (const product of this.products) {
    //     const productElement = document.createElement("li");
    //     productElement.className = "product-item";
    //     productElement.innerHTML = `
    //         <div>
    //         <img src="${product.imageUrl}" alt="${product.title}">
    //         <div class="product-item__content">
    //         <h2>${product.title}</h2>
    //         <h3>\$${product.price}</h3>
    //         <p>${product.description}</p>
    //         <button>Add to the cart</button>
    //           </div>
    //         </div>
    //     `;
    //     prodList.append(productElement);
    //   }
    //   renderHook.append(prodList);
    // }
    for (const prod of this.products) {
      const productItem = new ProductItem(prod);
      const prodEl = productItem.render();
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  render() {
    const productElement = document.createElement("li");
    productElement.className = "product-item";
    productElement.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}" >
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
    return productElement;
  }
}

// const productList = {
//   // products: [
//   //   new Product(
//   //     "A pillow",
//   //     "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
//   //     "A soft pillow",
//   //     19.99
//   //   ),
//   //   // {
//   //   //   title: "A pillow",
//   //   //   imageUrl:
//   //   //     "https://hips.hearstapps.com/hmg-prod/images/ghi-best-pillows-1573668641.png?crop=0.621xw:0.953xh;0.194xw,0.0471xh&resize=1200:*",
//   //   //   price: 19.99,
//   //   //   description: "A soft pillow",
//   //   // },
//   //   {
//   //     title: "A carpet",
//   //     imageUrl:
//   //       "https://www.onlinecarpets.co.uk/cdn/shop/products/liben_600x.jpg?v=1669038688",
//   //     price: 89.99,
//   //     description: "A carpet which you might like",
//   //   },
//   // ],
//   render() {
//     //   const renderHook = document.getElementById("app");
//     //   const prodList = document.createElement("ul");
//     //   prodList.className = "product-list";
//     //   for (const product of this.products) {
//     //     const productElement = document.createElement("li");
//     //     productElement.className = "product-item";
//     //     productElement.innerHTML = `
//     //         <div>
//     //         <img src="${product.imageUrl}" alt="${product.title}">
//     //         <div class="product-item__content">
//     //         <h2>${product.title}</h2>
//     //         <h3>\$${product.price}</h3>
//     //         <p>${product.description}</p>
//     //         <button>Add to the cart</button>
//     //           </div>
//     //         </div>
//     //     `;
//     //     prodList.append(productElement);
//     //   }
//     //   renderHook.append(prodList);
//   },

const productList = new ProductList();
productList.render();
