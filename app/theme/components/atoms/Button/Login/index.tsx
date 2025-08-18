import Button from "@components/atoms/Button";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

const LoginBtn = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Button
      onClick={(event) => {
        event.preventDefault();
        if (location.pathname !== "/login") {
          navigate("/login", { replace: true });
        }
      }}
    >
      {t("common.login")}
    </Button>
  );
};

export default LoginBtn;
