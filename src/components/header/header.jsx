import React from "react";
import Button from "../buttons/button";
import { useTg } from "../hooks/useTg";

const Header = (props)=>{
    
    const {tg, user, onColse} = useTg();

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;