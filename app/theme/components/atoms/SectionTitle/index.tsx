import "./index.scss";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      <hr />
    </div>
  );
};

export default SectionTitle;
