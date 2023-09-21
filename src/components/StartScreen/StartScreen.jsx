import { Outlet, useNavigate } from "react-router-dom"
import { MainBtn, Wrap } from "./StartScreen.styled"
import { useState } from "react";
import { useTheme } from "components/App";

export const StartScreen = () => {
    const {theme} = useTheme();
    const [newgame, setNewgame] = useState(false);
    const navigate = useNavigate();
    const NewGame = () => {
        setNewgame(true);
        setTimeout(() => {
            navigate('/game')
        }, 1000);
    }
    return (
        <Wrap $cur_theme={theme} className={newgame && 'close'}>
        <MainBtn $cur_theme={theme} onClick={NewGame}>New Game</MainBtn>
        <MainBtn $cur_theme={theme} to='settings'> Settings</MainBtn>
        <Outlet />
        </Wrap>
    )
}