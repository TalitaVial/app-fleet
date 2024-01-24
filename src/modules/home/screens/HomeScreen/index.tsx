import * as S from './styles'
import { HeaderHome } from "../../components/HeaderHome";
import { RegisterUseCar } from '../../components/RegisterUseCar';
import { HistoryUsecar } from '../../components/HistoryUseCar';

 const HomeScreen = () =>{
    return(
        <S.Container>
        <HeaderHome />
        <RegisterUseCar />
        <HistoryUsecar />
        </S.Container>
    )
}

export default HomeScreen;