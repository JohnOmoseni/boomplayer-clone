import { useNavigate } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

function HeaderTemplate({ title, url = -1 }) {
  const navigate = useNavigate();
  return (
    <div className="header-template">
      <div className="prev-page icon" onClick={() => navigate(url)}>
        <MdArrowBackIos />
      </div>
      <h2 className="title">{title ? title : ""}</h2>
    </div>
  );
}

export default HeaderTemplate;
