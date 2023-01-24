const API_URL = import.meta.env.VITE_API_URL;

const getPostArr = async () => {
  //   const myHeaders = {
  //     'Content-Type': 'application/json',
  //   };
  //   const options = {
  //     headers: myHeaders,
  //   };
  const url = `${API_URL}products/`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Erorr:', error);
  }
};

export { getPostArr };
