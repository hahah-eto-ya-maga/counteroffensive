import React from "react"
import { Button } from "../../components"
import { useState } from "react";
import { automat, RPG, general, tank2, tank3 } from "./images";
import cn from "classnames";
import "./LobbiPage.css";

const LobbiPage: React.FC = () => {
    const [statusGeneral, setStatusGeneral] = useState(false);
    const changeStatusGeneral = () => setStatusGeneral(!statusGeneral)

    return(
        <div className="lobbi_block">
            
            <div className="header">
                <Button className="lobby" appearance="primary"> Лобби </Button>
                <Button className="dosye" appearance="primary" onClick={() => {}}> Досье </Button>
                <Button className="menu_button" appearance="primary" onClick={() => {}}> Меню </Button>
            </div>
        
            <div className="mans">
                <Button className="automat" appearance="image" onClick={() => {}}> Пехотинец-<br/>автоматчик <img src={automat} alt="Automat" /></Button>
                <Button className="RPG"appearance="image"  onClick={() => {}}> Пехотинец с <br/>гранатомётом <img src={RPG} alt="RPG" /></Button>
                
                <Button className="general" appearance="image" onClick={() => {changeStatusGeneral()}}> Генерал {'('}
                    <span className={cn("status", {
                        ["free"]: !statusGeneral,
                        ["selected"]: statusGeneral,
                    })}>{statusGeneral ? "Занято" : "Свободно"}</span>{')'}
                    <img src={general} alt="General" /></Button>
            </div>
                
            <div className="tanks">
                <Button className="tank2" appearance="image" onClick={() => {}}> Двуместный танк <img src={tank2} alt="Tank_2" /> </Button>
                <Button className="tank3" appearance="image" onClick={() => {}}> Трёхместный танк <img src={tank3} alt="Tank_3" /> </Button>
            </div>
                
        </div>
    )
}

export default LobbiPage;