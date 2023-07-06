import * as yup from "yup";

const gameSchema = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  price: yup
    .number()
    .typeError("Price must be a number")
    .required("Price is required"),
  category: yup.string().required("Category is required"),

  attachment: yup
    .mixed()
    .test("fileSize", "File Size is too large", (value) => {
      if (value && value?.length > 0) {
        for (let i = 0; i < value.length; i++) {
          if (value[i].size > 1048576) {
            return false;
          }
        }
      }

      return true;
    })
    .test("fileType", "Unsupported File Format", (value) => {
      if (value && value.length > 0) {
        for (let i = 0; i < value.length; i++) {
          if (
            value[i].type != "image/png" &&
            value[i].type != "image/jpg" &&
            value[i].type != "image/jpeg"
          ) {
            return false;
          }
        }
      }
      return true;
    }),
});

export default gameSchema;
