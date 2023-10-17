const AddToLocalStorage = () =>{
    const idInput = document.getElementById('storage-id')
    const id = idInput.value;
    const idFiled = document.getElementById('storage-values')
    const filed = idFiled.value;

    if(id && filed){
        localStorage.setItem(id, filed)
    }

    idFiled.value = "";
    idInput.value = "";

}