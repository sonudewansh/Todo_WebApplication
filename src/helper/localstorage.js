
// Function to set data
export const setData = (data) => {
    console.log(data);
    if(data)
    localStorage.setItem("id", JSON.stringify(data));
};

// Function to get data
export const getData = () => {
    const data = localStorage.getItem("id");
    console.log(data);
    if (data) {
        return JSON.parse(data);
    } else {
        return null;
    }
};

// Function to delete data 
export const deleteData = () => {
    localStorage.removeItem("id");
};

