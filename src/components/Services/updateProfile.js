import axios from "axios";

async function updatedProfile(id, values = { fullname: "", contact: "", email: "", username: "", address: "", image: "" }) {
  const storageFolderName = "profiles";
  const projectID = "test-foody-admin";
  const dbCollectionName = "profiles";

  let imageUrl = "";

  try {
    if (values.image && typeof values.image !== "string") {
      const pictureName = values.image.name.split(".")[0];

      
      const storageUrl = `https://firebasestorage.googleapis.com/v0/b/${projectID}.appspot.com/o/${storageFolderName}%2F${pictureName}.png`;

      
      const { data } = await axios.post(storageUrl, values.image, {
        headers: {
          "Content-Type": values.image.type,
        },
      });

      imageUrl = `${storageUrl}?alt=media&token=${data.downloadTokens}`;
    }

    
    const updatedFields = {
      ...(values.fullname && { fullname: values.fullname }),
      ...(values.contact && { contact: values.contact }),
      ...(values.email && { email: values.email }),
      ...(values.username && { username: values.username }),
      ...(values.address && { address: values.address }),
      ...(imageUrl && { url: imageUrl }), 
    };

    await axios.patch(
      `https://test-foody-admin-default-rtdb.firebaseio.com/${dbCollectionName}/${id}.json`,
      updatedFields
    );

    console.log("Profile updated successfully");
  } catch (error) {
    console.error("Profile not updated:", error.message || error);
  }
}

export default updatedProfile;
