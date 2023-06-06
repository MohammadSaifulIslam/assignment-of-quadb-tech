// add to localstorage
const addToDb = (bookingData) => {
  let bookingCart = [];

  const previousCart = JSON.parse(localStorage.getItem("bookings"));

  if (previousCart) {
    const isExist = previousCart.find(
      (booking) => booking.id === bookingData.id
    );
    if (isExist) {
      return;
    } else {
      previousCart.push(bookingData);
      bookingCart = previousCart;
    }
  } else {
    bookingCart.push(bookingData);
  }
  localStorage.setItem("bookings", JSON.stringify(bookingCart));
};

// get data from localstorage
const getDataFromDb = () => {
  let bookingCart = {};

  const storedCart = JSON.parse(localStorage.getItem("bookings"));

  if (storedCart) {
    bookingCart = storedCart;
  }

  return bookingCart;
};

// remove a scacific item from localstorage
const removeItemFromDb = (id) => {
  console.log(id);
  const storedCart = JSON.parse(localStorage.getItem("bookings"));

  if (storedCart) {
    const filterRemoveItem = storedCart.filter((booking) => booking.id !== id);
    if (filterRemoveItem) {
      localStorage.setItem("bookings", JSON.stringify(filterRemoveItem));
    }
  }
};

// clear all data from localstorage function
const clearCart = () => {
  localStorage.clear("bookings");
};

export { addToDb, getDataFromDb, removeItemFromDb, clearCart };

