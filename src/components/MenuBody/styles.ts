import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`;

export const Icones = styled.div`
    display: flex;
    margin-bottom: '25px';
`;

export const Menu = styled.div`
    border-radius: 8px;
    height: 90px;
    background: var(--white-150);
`;

export const TituloMenu = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: var(--black);
`;

export const TextButton = styled.text`
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 17px;
    color: var(--white);

    display: flex;
    align-items: center;
    text-align: center;
    text-transform: none;

    margin-left: 6px;
`