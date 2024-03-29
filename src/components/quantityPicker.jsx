import React, { Component } from "react";

class QuantityPicker extends Component {
  state = {
    quantity: 1,
  };

  render() {
    return (

        <div className="quantityPicker">
            <button onClick={this.increaseQuantity} className="btn btn-sm btn-dark">+</button>
            { this.state.quantity }
            <button onClick={this.decreaseQuantity} className="btn btn-sm btn-dark">-</button>
        </div>

    );
  }

  increaseQuantity = () => {
      let qty = this.state.quantity + 1;
      this.setState({ quantity: qty });
      if (this.state.quantity === 20) {
        this.setState({ quantity: 20 });
      }
  }

  decreaseQuantity = () => {
      let qty = this.state.quantity - 1;
      this.setState({ quantity: qty });
      if (this.state.quantity === 1) {
          this.setState({ quantity: 1 })
      }
  }

}

export default QuantityPicker;
