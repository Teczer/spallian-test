import "./SectionTitle.css";

interface Props {
  children: React.ReactNode;
}

const SectionTitle: React.FC<Props> = ({ children }) => {
  return <h3 className="section-title textstroke">{children}</h3>;
};

export default SectionTitle;
