import axios from 'axios';

export const data = async () => {
    let response = await axios.get("/employees");
    return response;
}

export const AddData = async (formData,isExcel) => {
  
    let response=null;
    if(isExcel)
        {
            response = await axios.post('/employeeslist', formData);
        }
        else
        {
            response = await axios.post('/employees', formData);
        }
        return response;
}