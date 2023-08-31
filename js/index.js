let totalPrice = 0;

function cardClick(target) {
  const cardTitleName = target.childNodes[5].childNodes[1].innerText;

  const selectItemSection = document.getElementById("item-section");

  // creating new list item
  const cardTitle = document.createElement("li");

  // get the count item
  const count = selectItemSection.childElementCount;

  // set the content of the new list item
  cardTitle.innerHTML = `${count + 1}. ${cardTitleName}`;

  // append the new list item to the "item-section"
  selectItemSection.appendChild(cardTitle);

  //   console.log(cardTitle);
  //   Get the price from the card
  const itemPrice = target.childNodes[5].childNodes[3].innerText.split(" ")[0];
  //   console.log(itemPrice);

  //   calculate total price
  totalPrice = parseFloat(totalPrice) + parseFloat(itemPrice);

  const selectTotalPriceSection = (document.getElementById(
    "total-price"
  ).innerText = totalPrice.toFixed(2));
  totalLabel.innerText = totalPrice.toFixed(2);

  //   purchase button disable
  purchaseButton.disabled = totalPrice <= 0;
  discountCodeInput.disabled = totalPrice < 200;
  return totalPrice;
}

// Discount Calculation
let discountAmount = 0;
const discountCodeInput = document.getElementById("coupon-code");
const applyButton = document.getElementById("apply-btn");
const discountLabel = document.getElementById("discount-price");
const totalLabel = document.getElementById("total");

// Apply Button
applyButton.addEventListener("click", function () {
  const discountCode = discountCodeInput.value;
  if (discountCode === "SELL200") {
    discountAmount = totalPrice * 0.2;
    const updatedTotal = totalPrice - discountAmount;

    discountLabel.innerText = discountAmount.toFixed(2);
    totalLabel.innerText = updatedTotal.toFixed(2); // Update the label directly
  } else {
    applyButton.style.cursor = "not-allowed";
  }

  if (totalPrice >= 200) {
    discountCodeInput.disabled = false; // Enable the input field
  }
});

// Purchase Button
const purchaseButton = document.getElementById("purchase-btn");
purchaseButton.disabled = totalPrice <= 0;

function redirectToModal() {
  window.location.href = "#my_modal";
}

purchaseButton.addEventListener("click", redirectToModal);

// Go Home button

const goHomeButton = document.getElementById("go-home-btn");
function goHomeReload() {
  window.location.reload();
  window.location.href = " ";
}

goHomeButton.addEventListener("click", goHomeReload);
