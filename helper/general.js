import axios from "axios";

export const getDataEditor = async () => {
    try {
      const response = await axios.get("https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp");
  
      if (response.status === 200) {
        console.log('berhasill')
        return response.data;
        
      } else {
        console.log('gagal')

        return [];
      }
    } catch (error) {
        console.log('masuk sinii', error);
      return [];
    }
  };