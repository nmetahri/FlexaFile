import Button from "@components/atoms/Button";
import { useLocation, useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const LoginBtn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const isActive = location.pathname === "/login";

  return (
    <Button
      className={isActive ? "button__primary--active" : ""}
      onClick={(event) => {
        event.preventDefault();
        if (!isActive) {
          navigate("/login", { replace: true });
        }
      }}
    >
      {t("common.login")}
    </Button>
  );
};

export default LoginBtn;
