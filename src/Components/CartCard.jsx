import React from "react";
import Accordian from "./Accordian";
import PropTypes from "prop-types";

// Import phone images
import phoneImage1 from "./images/1.jpg";
import phoneImage2 from "./images/2.jpg";
import phoneImage3 from "./images/3.jpg";
import phoneImage4 from "./images/4.jpg";
import phoneImage5 from "./images/5.jpg";

const CartCard = ({ data = {}, dispatcher = () => {}, quantityChange = () => {} }) => {
  // Array of phone image sources
  const phoneImages = [phoneImage1, phoneImage2, phoneImage3, phoneImage4, phoneImage5];

  // Calculate the selected image source based on data.id
  const selectedImageSrc = phoneImages[data.id - 1]; // Assuming data.id is a valid 1-based index

  return (
    <div className="row mb-4 border rounded p-3" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="col-lg-4 col-md-6 mb-3">
        <div className="row">
          <div className="col-4">
            {/* Display the phone image */}
            <img className="img-fluid rounded" src={selectedImageSrc} alt="phone" />
          </div>
          <div className="col-8">
            <h4 className="mb-3">{data.title}</h4>
            <Accordian
              options={[
                {
                  title: "Details & Care",
                  description: "We provide great-looking phone images to showcase our products.",
                },
                {
                  title: "Sustainability",
                  description: "We provide great-looking phone images to showcase our products.",
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-md-6">
        <div className="row">
          <div className="col-6">
            {/* Quantity selector */}
            <select
              value={data.quantity}
              className="form-select mb-3"
              onChange={(e) => dispatcher(quantityChange({ id: data.id, value: e.target.value }))}
            >
              <option value={0}>Select Quantity</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
          <div className="col-6">
            {/* Display price */}
            <h5 className="text-success">${data.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

CartCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  }),
  dispatcher: PropTypes.func.isRequired,
  quantityChange: PropTypes.func.isRequired,
};

export default CartCard;










