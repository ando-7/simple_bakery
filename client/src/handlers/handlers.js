import { postFunc, updateElement } from "../api/axios";

export const handleAdd = (stateSetter, newValue, closeDialogWindow) => {
  stateSetter((prev) => [...prev, newValue]);
  closeDialogWindow();
};

export const handleChange = (stateSetter, e) => {
  const { name, value } = e.target;
  stateSetter((prev) => ({
    ...prev,
    [name]: value,
  }));
};

export const imageHandler = (stateSetter, e) => {
  const { name } = e.target;
  const file = e.target.files[0];

  if (file) {
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only JPG, JPEG, and PNG images are allowed.");
      e.target.value = null;
      return;
    }

    stateSetter((prev) => ({
      ...prev,
      [name]: e.target.files[0],
    }));
  }
};

export const createFormData = (state) => {
  const formData = new FormData();
    for (const key in state) {
    const value = state[key];
     if (value !== null && value !== undefined) {
      formData.append(key, value);
    }
  }
  return formData;
};

export const preventInvalidNumberInput = (e) => {
  if (["e", "E", "+", "-"].includes(e.key)) {
    e.preventDefault();
  }
};

export const handleSubmit = (config, data, closeDialogWindow, typeOfSubmit) => {
  if(typeOfSubmit === "edit") {
    updateElement(config, data.id, createFormData(data), closeDialogWindow);
  } else {
    postFunc(config, createFormData(data), closeDialogWindow);
  }
};

export const handleDialogOpen = (setOpen) => {
  setOpen(true);
};

export const handleDialogClose = (
  setOpen,
  setNewData,
  setSelectedData,
  initialState
) => {
  setOpen(false);
  setNewData(initialState);
  setSelectedData(null);
};

export const handleSearch = (searchTerm, data, setFilteredData) => {

  if (!searchTerm) {
    setFilteredData(data);
    return;
  }

  const filtered = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
  setFilteredData(filtered);
}