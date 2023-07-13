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
import Button from "../ui/Button";
import URL from "../../utils/URL";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Picture = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();
  const { token, userId } = useAuthenticate();
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePicture = async () => {
    try {
      if (files.length === 0) {
        toast.warn("upload image first");
        return;
      }
      setIsLoading(true);
      const file = files[0].file;
      const formData = new FormData();

      formData.append("image", file);

      const response = await axios.patch(
        `${URL}/users/${userId}/profile_pic`,
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
    } catch (error) {
      setIsLoading(false);
      toast.warn("something went wrong");
    }
  };

  return (
    <div className="flex space-x-4 items-center  mb-10">
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
      <Button
        onClick={handleChangePicture}
        className="bg-secondary-color hover:bg-cyan-800"
      >
        {isLoading ? "Loading..." : "Change"}
      </Button>
    </div>
  );
};

export default Picture;
