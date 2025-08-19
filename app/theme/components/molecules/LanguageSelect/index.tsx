import "./index.scss";

import Flag from "@components/atoms/Flag";
import Select from "@components/atoms/Select";

interface LanguageSelectProps {
  currentLang: string;
  options: { code: string; name: string }[];
  flag?: string;
  onChange: (lang: string) => void;
}

const LanguageSelect = ({
  currentLang,
  options,
  flag,
  onChange
}: LanguageSelectProps) => {
  return (
    <div className="language-select">
      {flag && <Flag src={flag} />}
      <Select name={"language"} value={currentLang} onChange={onChange}>
        {options.map(({ code, name }) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default LanguageSelect;
