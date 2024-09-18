export const handleAdd = (stateSetter, newValue, closeDialogWindow) => {
        stateSetter(prev => ([...prev, newValue]));
        closeDialogWindow();
}

export const handleChange = (stateSetter, e) => {
    const {name, value} = e.target;
    stateSetter(prev => ({
        ...prev,
        [name]: value
    }))
}