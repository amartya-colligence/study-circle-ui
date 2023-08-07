import axios from "axios";

export async function getList() {

    const data = await axios.get('http://localhost:3000/study-circle/appname');
    return data.data;
}