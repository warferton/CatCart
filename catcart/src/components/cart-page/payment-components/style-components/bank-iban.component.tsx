import styled from 'styled-components';

const Wraper = styled.div`
    display flex;
    margin-bottom: 2rem;
`;

const BankImg = styled.div`
    width: 4.5em;
    height: 2.5em;
    border: 2px black solid;
    margin: 0.2rem;
`;

const Image = styled.img`
    width: inherit;
    height: inherit;
`

export function BankImages() {
    return (
        <Wraper>
            <BankImg>
                <Image src='/img/cards/mir.jpg'/>
            </BankImg>
            <BankImg>
                <Image src='/img/cards/visa.jpg'/>
            </BankImg>
            <BankImg>
                <Image src='/img/cards/master.jpg'/>
            </BankImg>
        </Wraper>
    )

}