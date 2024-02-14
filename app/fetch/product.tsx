import { apiValue, responseValue } from ".";

const productAll = async () => {
  try {
    const response: any = await apiValue.get("/product");

    return response.data;
  } catch (error) {
    return null
  }
};

const productId = async (id:String) => {
  try {
    const response: any = await apiValue.get("/product/"+id);
    console.log("response data", response.data);

    return response.data;
  } catch (error) {
    console.log(error)
    return null
  }
};

export { productAll,productId };
