import axios from "axios";

async function postProfile(values = { fullname: "", contact: "", email: "", username: "", address: "", image: null }) {
    const storageFolderName = "profiles";
    const projectID = "test-foody-admin";
    const dbCollectionName = "profiles";

    let pictureName = "default";
    let pictureExtension = "jpg";

    if (values.image && values.image.name) {
        pictureName = values.image.name.split(".")[0];
        pictureExtension = values.image.name.split(".").pop();
    } else {
        console.warn("Image not provided, using default image settings.");
    }

    try {
        const { data } = await axios.post(
            `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.${pictureExtension}`,
            values.image || "",  // Eğer resim yoksa boş bir string gönder
            {
                headers: {
                    "Content-Type": values.image ? values.image.type : "image/jpeg",
                },
            }
        );

        const profile = {
            fullname: values.fullname,
            contact: values.contact,
            email: values.email,
            username: values.username,
            address: values.address,
            url: `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.${pictureExtension}?alt=media&token=${data.downloadTokens || ""}`,
        };

        await axios.post(
            `https://${projectID}-default-rtdb.firebaseio.com/${dbCollectionName}.json`,
            profile
        );

    } catch (error) {
        console.error("Error during profile submission:", error);
    }
}

export default postProfile;
