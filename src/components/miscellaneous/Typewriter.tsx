import WordRotate from "@/components/magicui/word-rotate";

const Typewriter = () => {
  return (
    <WordRotate
      className="text-2xl font-bold font-mono"
      words={[
        "Full Stack Developer",
        "Open Source Enthusiast",
        "Competitive Coder",
      ]}
    />
  );
};

export default Typewriter;
