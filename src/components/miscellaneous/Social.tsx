import { IconType } from "react-icons";

interface SocialProps {
  icon: IconType;
}

const Social: React.FC<SocialProps> = ({ icon: Icon }) => {
  return (
    <div className="bg-[#151419] rounded-full h-[55px] w-[55px] flex items-center justify-center border border-[#F56E0F] hover:text-[#F56E0F]">
      <Icon className="text-2xl" />
    </div>
  );
};

export default Social;
