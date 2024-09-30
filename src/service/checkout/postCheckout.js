import axios from "axios";

async function postCheckoutDatas(order) {
    const checkoutUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders.json`


    try {
        const response = await axios.post(checkoutUrl, order)
    } catch (error) {

    }

}

export default postCheckoutDatas