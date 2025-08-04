import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:8080";

export const apiMain = axios.create({
  baseURL: BASE_URL,
});

export const getImageUrl = (imagePath) => `${BASE_URL}/${imagePath}`;

export const postFunc = async (configType, data) => {
  try {
    const isFormData = data instanceof FormData;
    await apiMain.post(`/api/v1/${configType}`, data, {
      headers: {
        headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
      },
    });
  } catch (err) {
    alert(`Error saving ${configType}: ${err.message}`);
  }
};

// export const getAll = async (configType, isMounted) => {
//   try {
//       const response = await apiMain.get(`/${configType}`);
//       return response.data;
//   }  catch (err) {
//       console.error(err)
//    }
// }

export const fetchAllData = async (configType, isMounted, setter) => {
  try {
    const response = await apiMain.get(`/api/v1/${configType}`);
    if (isMounted.current) {
      setter(response.data);
    }
  } catch (error) {
    alert(`Error fetching ${configType}: ${error.message}`);
  }
};

// export const getById = async (configType, id) => {
//   try {
//       const response = await apiMain.get(`/${configType}/${id}`);
//       return response.data;
//   } catch (err) {
//       console.error(err);
//   }
// }

export const deleteById = async (configType, id) => {
  try {
    await apiMain.delete(`/api/v1/${configType}/${id}`);
    window.location.reload(true);
  } catch (err) {
    alert(`Error deleting ${configType}: ${err.message}`);
  }
};

export const updateElement = async (configType, id, data) => {
  try {
    const isFormData = data instanceof FormData;
    await apiMain.put(`/api/v1/${configType}/${id}`, data, {
      headers: {
        headers: isFormData ? { "Content-Type": "multipart/form-data" } : {},
      },
    });
  } catch (err) {
    console.error(err);
    alert(`Error updating ${configType}: ${err.message}`);
  }
};
