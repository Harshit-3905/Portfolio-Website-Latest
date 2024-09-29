import { IconType } from "react-icons";

interface SocialProps {
  icon: IconType;
}

const Social: React.FC<SocialProps> = ({ icon: Icon }) => {
  return (
    <div className="bg-primarybackground rounded-full h-[55px] w-[55px] flex items-center justify-center border border-highlightedtext hover:highlightedtext">
      <Icon className="text-2xl" />
    </div>
  );
};

export default Social;
