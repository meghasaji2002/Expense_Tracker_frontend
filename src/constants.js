export const apiURL= 'https://expense-tracker-node-backend.onrender.com';
export const fetchHeaders =(getState)=> {
  const state = getState();
  return {
    "Content-Type":"application/json",
    "Authorization":"Bearer " + state?.auth?.token
  };
}
  export const fetchHeadersMultipart =(getState)=> {
    const state = getState();
    return {
      "Authorization":"Bearer " + state?.auth?.token
    };
  }
