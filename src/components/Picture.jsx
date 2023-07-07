import React, { useState } from "react";
import axios from "axios";
// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import useAuthenticate from "../utils/useAuthenticate";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const Picture = () => {
  const [files, setFiles] = useState([]);
  const { token, id } = useAuthenticate();

  const handleChangePicture = async () => {
    console.log(files);
    const file = files[0].file;
    console.log(file);
    const formData = new FormData();

    formData.append("image", file);
    console.log(formData.get("image"));
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
    console.log(response);
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
        Change
      </button>
    </div>
  );
};

export default Picture;
