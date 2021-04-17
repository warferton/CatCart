import styled from 'styled-components';

export function Logo(){

    const logo_text = 'Product Shop';

    const LogoContainer = styled.div`
        padding: 3em;
        position: sticky;
        top: -6em;
        max-width: 30em;
        display: flex;
        justify-content: center;
        z-index: 1000;

        @media screen and (max-width: 660px) {
            position: fixed;
            top: -6em;
            left: -2em;
            overflow: hidden;
        }
    `;

    const LogoText = styled.p`
        font-size: xxx-large;
        font-weight: 900;
        color: transparent;
        background-image: linear-gradient(45deg, #36096D, #3609FD,  #36096D);
        background-clip: text;
        text-shadow: 0px 2px 8px #ADCCDDAA;     
        border-radius: 3px;
        padding: 0.1em;
        @media screen and (max-width: 660px) {
            tex-overflow: clip;
            text-wrap: nowrap;
            width:25px;
            height: 50px;
            text-shadow: none;
        }
    `;

    return(
        <LogoContainer className="logo-container">
           <LogoText>{logo_text}</LogoText>
        </LogoContainer>
    )
}