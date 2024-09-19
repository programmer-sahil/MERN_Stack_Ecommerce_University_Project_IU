const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: process.env.PAY_PAL_CLIENT_ID,
  client_secret: process.env.PAY_PAL_SECRET,
});

module.exports = paypal;
