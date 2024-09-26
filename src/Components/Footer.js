import React from "react";
import "./footer.css";
import Logo from "../imgs/logo2.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="disclaimer-area">
          <p className="disclaimer-desc">
            
          </p>
        </div>
      </div>
      <div className="extra-data">
        <div className="link-section">
          <div className="first-row">
            <p className="bold">Get to Know Us</p>
            <p>Make Money with Us</p>
            <p>Amazon Payment</p>
            <p>Let Us Help You</p>
          </div>
          <div className="second-row">
            <p className="bold">About </p>
            <p>Sell products on </p>
            <p> Business Card</p>
            <p>COVID-19</p>
          </div>
          <div className="third-row">
            <p className="bold">Connect with Us</p>
            <p>Sell the Products</p>
            <p>Shop with Points</p>
            <p>Shipping Rates & Policies</p>
          </div>
          <div className="fourth-row">
            <p className="bold">Cares</p>
            <p>Become an Affiliate</p>
            <p>Reload Your Balance</p>
            <p>Returns & Replacements</p>
          </div>
        </div>
        <div className="link-section2">
          <div className="first-one">
            <div className="first-row">
              <p className="bold">Get to Know Us</p>
              <p>Make Money with Us</p>
              <p>Product Payment</p>
              <p>Let Us Help You</p>
            </div>
            <div className="second-row">
              <p className="bold">About </p>
              <p>Sell the products</p>
              <p>Business Card</p>
              <p>COVID-19</p>
            </div>
          </div>
          <div className="second-one">
            <div className="third-row">
              <p className="bold">Connect with Us</p>
              <p>Sell apps on Amazon</p>
              <p>Shop with Points</p>
              <p>Shipping Rates & Policies</p>
            </div>
            <div className="fourth-row">
              <p className="bold"> Cares</p>
              <p>Become an Affiliate</p>
              <p>Reload Your Balance</p>
              <p>Returns & Replacements</p>
            </div>
          </div>
        </div>
        <div className="developer">
          <div className="dev-data">
            <p>&copy; | Developed by KIA | </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
