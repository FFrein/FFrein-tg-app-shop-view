import React from "react";
import Button from "../buttons/button";
import { useTg } from "../hooks/useTg";

const Header = (props)=>{

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {}
            </span>
        </div>
    )
}

export default Header;