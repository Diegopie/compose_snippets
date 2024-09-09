import { dummy_products } from "./dummy_data.js";

const useDummyData = true;
const dummyData = dummy_products;

export const getProducts = async () => {  
  const url = "https://dummyjson.com/products";
  try {
    const response =  useDummyData ? await dummyData : await fetch(url);
    if (!response.success) {
      throw new Error(`Response status: ${response.status}`);
    }

    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export const getTenProducts = async () => {  
  const url = "https://dummyjson.com/products";
  try {
    const response =  useDummyData ? await dummyData : await fetch(url);
    if (!response.success) {
      throw new Error(`Response status: ${response.status}`);
    }


    return response.data.slice(0, 11);
  } catch (error) {
    console.error(error);
  }
}

export const getProductDetails = async ({id}) => {  
  const url = "https://dummyjson.com/products/" + id;
  const product = {
    success: true
  }
  if (useDummyData) {
    const res = await dummyData.then(res => res.data);
    const index = res.findIndex(product => product.id === parseInt(id));
    console.log(res);
    console.log(index);
    product.data = res[index];
  }
  console.log(product);


  try {
    const response =  useDummyData ? product : await fetch(url);
    if (!response.success) {
      throw new Error(`Response status: ${response.status}`);
    }

console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

