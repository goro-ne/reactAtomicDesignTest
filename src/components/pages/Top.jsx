import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/userState";

export const Top = () => {
    // const { setUserInfo } = useContext(UserContext);
    const setUserInfo = useSetRecoilState(userState);

    const navigate = useNavigate();
    const onClickAdmin = () => {
        setUserInfo({ isAdmin: true });
        navigate("/users");
    };
    const onClickGeneral = () => {
        setUserInfo({ isAdmin: false });
        navigate("/users");
    };
    return (
        <SContainer>
            <h2>TOPページです</h2>
            <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
            <br />
            <br />
            <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
        </SContainer>
    );
};

const SContainer = styled.div`
    text-align: center;
`;
