const AboutMeParagraph = ({ mark, para }) => {
  return (
    <p>
      <span className="font-extrabold">{mark},</span> {para}
    </p>
  );
};

export default AboutMeParagraph;
