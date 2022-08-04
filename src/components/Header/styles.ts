import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const InfoNome = styled.strong`
    display: block;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 1.2;
    color: var(--yellow);
`;

export const InfoChave = styled.span`
    display: block;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.2;

    margin-right: 0.5rem;
`;

export const InfoTringulo = styled.div`
    display: flex;
`;

export const ImgPetrobras = styled.div`
    width: 171px;
    height: 51px;
    position: relative;
`;

export const CarteiraPedidos = styled.div`
    box-sizing: border-box;
    height: 59px;
    background: var(--white-100);
    border: 1px solid #000000;
`;

export const InfoCarteiraDePedidosTitulos = styled.strong`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 150%;
    margin: 11px 0 0 45px;

    display: flex;
    align-items: center;

    color: var(--blue);
`;

export const InfoCarteiraDePedidosSubTitulos = styled.span`
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15%;
    margin: 1px 0 0 45px;

    display: flex;
    align-items: center;

    color: var(--gray-100);
`;