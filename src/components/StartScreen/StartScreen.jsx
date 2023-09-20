import { Outlet, useNavigate } from "react-router-dom"
import { MainBtn, Wrap } from "./StartScreen.styled"
import { useState } from "react";

export const StartScreen = () => {
    const [newgame, setNewgame] = useState(false);
    const navigate = useNavigate();
    const NewGame = () => {
        setNewgame(true);
        setTimeout(() => {
            navigate('/game')
        }, 1000);
    }
    return (
        <Wrap className={newgame && 'close'}>
        <MainBtn onClick={NewGame}>New Game</MainBtn>
        <MainBtn to='settings'> Settings</MainBtn>
        <Outlet />
        </Wrap>
    )
}