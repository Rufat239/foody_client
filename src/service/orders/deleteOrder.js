import axios from "axios";


async function deleteOrders(id) {
    const orderUrl = `https://test-foody-admin-default-rtdb.firebaseio.com/orders/${id}.json`

    try {
        await axios.delete(orderUrl)
        window.location.reload()
    } catch (error) {
        
    }
}

export default deleteOrders