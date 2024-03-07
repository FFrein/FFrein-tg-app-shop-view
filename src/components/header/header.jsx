import React from "react";
import Button from "../buttons/button";
import { useTg } from "../hooks/useTg";
import './header.css'
import love from '../img/Снимо2.PNG'

const Header = (props)=>{
    
    const {user, onClose} = useTg();

    return (
        <div className={'header'}>
            <img src={love} alt="" />
            <br/>
            <Button onClick={onClose}>Закрыть</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </div>
    )
}

export default Header;