import { Button, Logo, P } from "../../components";
import "./MenuPage.css";

const MenuPage: React.FC = () => {
  return (
    <div className="menu_page_wrapper">
      <Logo />
      <div className="menu_buttons_block">
        <Button appearance="menu" className="menu_btn">
          <P size="l">Уже служу</P>
          <P size="s">Авторизоваться</P>
        </Button>
        <Button appearance="menu" className="menu_btn">
          <P size="l">Повестка пришла</P>
          <P size="s">Зарегестрироваться</P>
        </Button>
        <Button appearance="menu" className="menu_btn">
          <P size="l">Дембельнуться</P>
          <P size="s">Выйти из игры</P>
        </Button>
      </div>
    </div>
  );
};

export default MenuPage;
