import { propertyForSaleArr } from "./properties/propertyForSaleArr.js";
import { placeholderPropertyObj } from "./properties/placeholderPropertyObj.js";

export default function getPropertyHtml(defaulProp = [placeholderPropertyObj]) {
  return defaulProp
    .map((property) => {
      const { image, propertyLocation, comment, priceGBP, roomsM2 } = property;
      const totalPrice = roomsM2.reduce(
        (total, currentPrice) => total + currentPrice
      );

      return `
    <section class="card">
    <img src="${image}">
    <div class="card-right">
        <h2>${propertyLocation}</h2>
        <h3>$ ${priceGBP}</h3>
        <p>${comment}</p>
        <h3>${totalPrice} m&sup2;</h3>
    </div>
   </section> `;
    })
    .join("");
}

/***** Modify 👇 by adding an argument to the function call ONLY. *****/
document.getElementById("container").innerHTML =
  getPropertyHtml(propertyForSaleArr);
