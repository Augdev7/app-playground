'use client';

import styled from 'styled-components';

export const Wrapper = styled.main`
    color: #fff;

    width: 100%;

    height: 100%;

    padding-top: 5rem;

    text-align: center;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    color: #fff;

    z-index: 1;
`;

export const Logo = styled.div`
    margin-bottom: 2rem;

    svg {
        width: 200px;

        fill: white;
    }

    color: white;
`;

export const Title = styled.h1`
    font-size: 2rem;
`;

export const Description = styled.h2`
    background: linear-gradient(
        167.95deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 100%
    );

    backdrop-filter: blur(20px);

    box-shadow: inset 10px 10px 20px rgba(255, 255, 255, 0.2);

    border-radius: 30px;

    font-family: 'Montserrat';

    display: inline-block;

    zoom: 1;

    vertical-align: top;

    padding: 0 45px;

    margin: 0 auto;

    font-size: 40px;

    font-weight: 900;

    color: #ff8600;

    box-shadow: inset 10px 10px 20px rgba(255, 255, 255, 0.2);

    position: relative;

    z-index: 1;

    @media (max-width: 375px) {
        font-size: 2.8rem;
    }
`;
