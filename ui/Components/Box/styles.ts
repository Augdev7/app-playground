import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: auto;
    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;
export const BoxContainer = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    margin-top: -220px;
    left: 0;
    padding: 0px 8% 10px;
    display: flex;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 2%;
    @media only screen and (max-width: 1024px),
        only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
        display: flex;

        flex-direction: column;

        justify-content: center;

        align-items: center;
    }
`;
export const BoxItem = styled.div`
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s,
        transform var(--e-transform-transition-duration, 0.4s);
    border: 2px solid #01d293;
    padding: 30px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-radius: 10px 0px 10px 10px;
    transition: transform 250ms;

    &:before {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 10px solid #01d293;
        right: 50%;
        top: -21px;
    }

    &:after {
        content: '';
        width: 0px;
        height: 0px;
        position: absolute;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-top: 10px solid transparent;
        border-bottom: 10px solid white;
        right: 50%;
        top: -18px;
    }

    &:hover {
        background: #01d293;
        cursor: pointer;

        transform: translateY(-10px);
    }

    icon {
        display: inline-block;
        margin-right: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    icon i {
        font-size: 3rem;
        color: #171f38;
    }

    career-desc {
        display: inline-block;
        color: #171f38;
    }

    span,
    h2,
    span i {
        background: transparent !important;
    }

    span i {
        font-size: 3rem;
        color: #01d293;
    }

    h2 {
        font-size: 20px;
        line-height: 1.4;
        color: #01d293;
    }

    &:hover h2 {
        font-size: 20px;
        line-height: 1.4;
        color: #171f38;
    }

    p {
        font-size: 14px;
        color: #171f38;
    }
`;
