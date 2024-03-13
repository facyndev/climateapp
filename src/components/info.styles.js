import styled from 'styled-components';

const Container = styled.div`
    padding: 10px;
    width: 500px;
    height: auto;

    background-color: var(--color-200);

    border-left: 10px solid var(--color-600);
    border-radius: 10px;
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h3 {
        font-size: 2rem;
        font-weight: bold;
        color: var(--color-950);
    }

    span {
        font-weight: bold;
        color: var(--color-950);
    }

    .temperature {
        display: flex;
        gap: 5px;
        align-items: center;
    }

    .temperature__type {
        display: flex;
        gap: 5px;
        align-items: center;
    }
    
    .temperature__type-item {
        color: var(--color-600);
        transition: color 0.3s ease;
        cursor: pointer;

        &:hover {
            color: var(--color-800);
        }

        &.active {
            color: var(--color-950);
        }
    }
`

const Body = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    h4 {
        font-size: 1.5rem;
        color: var(--color-900);
    }
    
    p {
        font-size: 1rem;
        color: var(--color-800);
    }

`

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: .8rem;
    color: var(--color-950);
`

export {
    Container,
    Header,
    Body,
    Footer
}