import axios from "axios";
async function postCheckoutDatas(order) {
    const checkoutUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders/${order.id}.json`
    try {
        const response = await axios.patch(checkoutUrl, order)
        
    } catch (error) {
    }
}
export default postCheckoutDatas