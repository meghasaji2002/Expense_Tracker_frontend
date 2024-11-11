export const apiURL= 'https://expense-tracker-node-backend.onrender.com';
export const fetchHeaders = {
    "Content-Type":"application/json",
    "Authorization":"Bearer " + sessionStorage.getItem('EXPENSE-TRACKER-TOKEN')
  };
  export const fetchHeadersMultipart = {
      "Authorization":"Bearer " + sessionStorage.getItem('EXPENSE-TRACKER-TOKEN')
    };
