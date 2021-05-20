import React from "react";
import Cart from "./cart";
import NavBar from "./navBar";
import firebase from "firebase";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.db = firebase.firestore();
  }
  componentDidMount() {
    this.db.collection("products").onSnapshot((snapshot) => { 
      console.log(snapshot);

      snapshot.docs.map((doc) => {
        console.log(doc.data());
      }); 

      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data["id"] = doc.id;
        return data;
      });
      this.setState({
        products: products,
      });
    });
  }
  handleIncreaseQuantity = (product) => {
    console.log("Please increase quantity");
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);
    docRef
      .update({
        qty: products[index].qty + 1,
      })
      .then(() => {
        console.log("Updated Successfully");
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  };
  handleDecreaseQuantity = (product) => {
    console.log("Please decrease the quantity");
    const { products } = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection("products").doc(products[index].id);
    if (products[index].qty === 0)
      console.log("Quantity can not be decreased. Quantity reached to 0");
    else {
      docRef
        .update({
          qty: products[index].qty - 1,
        })
        .then(() => {
          console.log("Updated Successfully");
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
    }
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const docRef = this.db.collection("products").doc(id);
    docRef
      .delete()
      .then(() => {
        console.log("Product Deleted");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  totalPrice = () => {
    const { products } = this.state;
    let totalProductPrice = 0;
    products.forEach((product) => {
      totalProductPrice += product.qty * product.price;
    });
    return totalProductPrice;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "",
        price: 300,
        qty: 3,
        title: "washing mechine",
      })
      .then((docRef) => {
        console.log("Product has been added", docRef);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <NavBar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 20, fontSize: 20 }}>
          Add a Product
        </button>
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ fontSize: 20, padding: 10 }}>
          Total: {this.totalPrice()}
        </div>
      </div>
    );
  }
}

export default App;
