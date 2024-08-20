import ContactImage from "../assets/ContactImage.webp";
import Image from "next/image";
import ContactForm from "./miscellaneous/ContactFrom";

const Contact = () => {
  return (
    <div className="w-full lg:w-[80%] min-h-[90vh] pt-10" id="contact">
      <h2 className="pt-10 text-[#F56E0F] text-4xl text-center font-semibold underline underline-offset-5">
        Get in Contact
      </h2>
      <div className="relative flex flex-col md:flex-row w-full min-h-[500px] mt-10 justify-center items-center rounded-2xl py-10 border">
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <Image
            src={ContactImage}
            alt="Contact"
            className="w-80 md:w-[350px] lg:w-[350px] object-cover"
            priority={false}
            quality={100}
          />
        </div>
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact;
