import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4aa67c1a87844dd987045a03627d3303'
    }
})