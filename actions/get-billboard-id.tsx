import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboardId = async (): Promise<string> => {
  const response = await fetch(URL);
  const data = await response.json();
  const billboardId = data[0].id; // Assuming the ID property is called 'id' in the API response
//   const res = await fetch(`${URL}/${id}`);
  return billboardId
  
};

export default getBillboardId;