export const getImageUrl = (size) => {
  try {
    return require(`../Images/${size}-yarder-skip.jpg`);
  } catch (err) {
    return require("../Images/default.jpg");
  }
};

export const formatPrice = (price) => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);
};
