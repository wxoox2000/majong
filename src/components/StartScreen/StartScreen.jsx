import { Outlet } from "react-router-dom"
import { MainBtn, Wrap } from "./StartScreen.styled"

export const StartScreen = () => {
    return (
        <Wrap>
        <MainBtn to='game'>New Game</MainBtn>
        <MainBtn to='settings'> Settings</MainBtn>
        <Outlet />
        </Wrap>
    )
}