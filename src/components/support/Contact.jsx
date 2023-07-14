import React from "react";
import img1 from "../../assets/img/abdelrahman.jpg";
import img2 from "../../assets/img/aayman.jpg";
import img3 from "../../assets/img/heba.jpg";
import img4 from "../../assets/img/mariam.jpg";
import img5 from "../../assets/img/hossam.jpg";
import img6 from "../../assets/img/abdallah.jpg";
import imgContact from "../../assets/img/contact.png";

const contacts = [
  {
    id: 1,
    src: img1,
    email: "https://www.linkedin.com/in/abdelrahman-ibrahim-6779a2107/",
  },
  {
    id: 2,
    src: img2,
    email: "https://www.linkedin.com/in/abdelrahman-mayman/",
  },
  { id: 3, src: img3, email: "https://www.linkedin.com/in/heba-ali-3b8617205" },
  {
    id: 4,
    src: img4,
    email: "https://www.linkedin.com/in/mariam-sherif-2368a1212/",
  },
  { id: 5, src: img5, email: "https://www.linkedin.com/in/hosam-tarek/" },
  {
    id: 6,
    src: img6,
    email: "https://www.linkedin.com/in/abdallah-mohamed-722b30255/",
  },
];
const Contact = () => {
  return (
    <div className="bg-primary-color text-white sticky top-full overflow-hidden">
      <div className="h-80 relative my-10 ">
        <img
          src={imgContact}
          alt=""
          loading="lazy"
          className="hidden sm:inline-block absolute z-20 top-0 left-0 w-full h-full"
        />
        <div className="container relative z-30 pt-10">
          <p className="text-center text-btn-primary uppercase text-sm">
            like video games?
          </p>
          <p className="mb-5 text-center text-lg uppercase tracking-wider">
            connect with v9!
          </p>
          <div className="flex space-x-2 justify-center">
            {contacts.map((contact) => (
              <a
                href={contact.email}
                key={contact.id}
                className="w-11 h-11 rounded-full block"
              >
                <img
                  src={contact.src}
                  alt=""
                  loading="lazy"
                  className="rounded-full w-full h-full hover:scale-110 transition"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
