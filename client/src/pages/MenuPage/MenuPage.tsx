import { Button, Logo, P } from "../../components";
import "./MenuPage.css";

const MenuPage: React.FC = () => {
  return (
    <div className="menu-page-wrapper">
      <Logo />
      <div className="menu-buttons-block">
        <Button appearance="menu" className="menu-btn">
          <P size="l">Уже служу</P>
          <P size="s">Авторизоваться</P>
        </Button>
        <Button appearance="menu" className="menu-btn">
          <P size="l">Повестка пришла</P>
          <P size="s">Зарегестрироваться</P>
        </Button>
        <Button appearance="menu" className="menu-btn">
          <P size="l">Дембельнуться</P>
          <P size="s">Выйти из игры</P>
        </Button>
      </div>
    </div>
  );
};

export default MenuPage;
