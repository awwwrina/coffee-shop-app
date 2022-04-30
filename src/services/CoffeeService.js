import { useHttp } from "../hooks/http.hook";


const useCoffeeService = () => {
    const {request} = useHttp();
    const url = "http://localhost:3001/";
    const basePage = 1;

    const getAllProducts = async (page = basePage) => {
        const res = await request(`${url}_page=${page}`);
        return res.map(_transformData)
    }

    const _transformData = (product) => {
        let slicedName =  product.name.slice(0, 20);
        if(slicedName.length < product.name.length) {
            slicedName += '...'
        }
        return {
            name: slicedName,
            img: product.img,
            country: product.country,
            price: product.price

        }
    }
    return {getAllProducts}
}

export default useCoffeeService;