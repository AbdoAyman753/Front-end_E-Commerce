import React, { useState } from "react";
import axios from "axios";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import useAuthenticate from "../../utils/useAuthenticate";
import { useDispatch } from "react-redux";
import { updateUserPicture } from "../../store/slices/authSlice";
import { toast } from "react-toastify";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Picture = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const { token, id } = useAuthenticate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePicture = async () => {
    if (files.length === 0) {
      toast.warn("upload image first");
      return;
    }
    setIsLoading(true);
    const file = files[0].file;
    const formData = new FormData();

    formData.append("image", file);

    const response = await axios.patch(
      `http://localhost:8000/users/${id}/profile_pic`,
      formData,
      {
        headers: {
          Authorization: token,
          "content-type": "multipart/form-data",
        },
      }
    );
    setIsLoading(false);
    if (response.status === 200) {
      dispatch(updateUserPicture(response.data.updatedUser.profile_pic));
      toast.success("Picture changed successfully");
    } else {
      toast.warn("Picture is not changed");
    }
  };

  return (
    <div className="flex space-x-4 items-center justify-center mb-10">
      <div className="w-28 h-28">
        <FilePond
          className="w-full h-full"
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={false}
          allowReplace={true}
          FilePondCredit={false}
          imagePreviewHeight={170}
          imageCropAspectRatio={"1:1"}
          imageResizeTargetWidth={200}
          imageResizeTargetHeight={200}
          stylePanelLayout="compact circle"
          name="files"
          labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
        />
      </div>
      <button
        onClick={handleChangePicture}
        className="border rounded-full  bg-cyan-800 text-sm text-white w-auto h-10 p-2"
      >
        {isLoading ? "Loading..." : "Change"}
      </button>
    </div>
  );
};

export default Picture;
