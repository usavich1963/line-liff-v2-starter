import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.1657122148-YO2BoXNl })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.")
    })
    .catch((error) => {
        console.log(error)
    })
});
