import { ButtonOpenTableStyled } from "./styles/ButtonOpenTableStyled"

export const ButtonOpenTable = ({ isOpenTable, setIsOpenTable }) => {

    return (
        <ButtonOpenTableStyled onClick={() => setIsOpenTable(!isOpenTable)}>
            {isOpenTable ? 'Close' : 'Open'}
        </ButtonOpenTableStyled>
    )
}


