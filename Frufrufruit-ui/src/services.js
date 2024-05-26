const baseUrl = "http://localhost:5001/"
const upload = "upload"

const uploadCsv = async (fruitsFile, option) => {
    const formData = new FormData();
    formData.append('file', fruitsFile);
    formData.append('option', option);

    const response = await fetch(`${baseUrl}${upload}`, {
        method: 'POST',
        body: formData
    });

    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const blob = await response.blob();
    return blob;
}

export { uploadCsv }