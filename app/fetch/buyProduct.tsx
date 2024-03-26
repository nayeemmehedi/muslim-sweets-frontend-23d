import { apiValue, responseValue } from ".";


const buy = async (body:any) => {
  try {
    const response: any = await apiValue.post("/buy/buyProduct",body);
    // console.log("response data", response.data);

    return response.data;
  } catch (error) {
    console.log(error)
    return null
  }
};


const buyBkash = async (body:any) => {
    try {
      const response: any = await apiValue.post("/payment/init",body);
      // console.log("response data", response.data);
  
      return response.data;
    } catch (error) {
      console.log(error)
      return null
    }
  };

export { buy,buyBkash };
