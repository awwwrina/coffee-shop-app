import { useHttp } from "../hooks/http.hook";


const useCoffeeService = () => {
    const {request, loading} = useHttp();
    const url = "http://localhost:3001/";
    const baseStart = 0;

    const getAllProducts = async (start = baseStart) => {
        const res = await request(`${url}product?_start=${start}&_end=${start + 6}`);
        return res.map(_transformData)
    }
    const getProduct = async(id) => {
        const res = await request(`${url}product/${id}`)
        return res;

    }

    const _transformData = (product) => {
        let slicedName =  product.name.slice(0, 20);
        if(slicedName.length < product.name.length) {
            slicedName += '...'
        }
        return {
            id: product.id,
            name: slicedName,
            img: product.img,
            country: product.country,
            price: product.price

        }
    }
    return {loading, getAllProducts, getProduct}
}

export default useCoffeeService;