import ContactImage from "../assets/ContactImage.webp";
import Image from "next/image";
import ContactForm from "./miscellaneous/ContactFrom";
import SectionHeading from "./miscellaneous/SectionHeading";

const Contact = () => {
  return (
    <div className="w-[90%] lg:w-[75%]" id="contact">
      <SectionHeading text="Get in Contact" />
      <div className="relative flex flex-col md:flex-row w-full min-h-[500px] justify-center items-center rounded-2xl border py-8">
        <div className="flex w-full md:w-1/2 justify-center items-center">
          <Image
            src={ContactImage}
            alt="Contact"
            className="w-80 md:w-[350px] lg:w-[350px] object-cover"
            priority={false}
            loading="lazy"
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
