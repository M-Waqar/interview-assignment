import axios from "axios";

const getUsers = async ({ page, count }) => {
    try {
        const result = await axios.get(`https://randomuser.me/api/?page=${page}&results=${count}&seed=abc`);
        if(result && result.data){
            return {
                status: true,
                data: result.data
            }
        } else {
            return {
                status: false,
                message: "No Data Found"
            }
        }
    } catch (error) {
        return {
            status: false,
            message: error
        }
    }
};

export default getUsers;