import axios from "axios";

async function getAllOrders() {
    const getOrdersUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders.json`

    try {
        const {data} = await axios.get(getOrdersUrl)
        return data
    } catch (error) {
        
    }
    
}

export default getAllOrders