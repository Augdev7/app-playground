/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section``;

export const ContainerContact = styled.div`
    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    width: 100%;
`;

export const ContactContent = styled.div`
    display: flex;

    flex-direction: column;

    gap: 1rem;

    @media (min-width: 768px) {
        display: grid;

        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 994px) {
        display: grid;

        grid-template-columns: repeat(3, 1fr);
    }

    .contact-content {
        border-radius: 10px;

        background-color: var(--border-color);

        padding: 1rem 2rem;

        text-align: center;

        display: flex;

        flex-direction: column;

        justify-content: flex-start;

        align-items: flex-start;

        h4 {
            font-size: 1.3rem;

            margin-bottom: 8px;
        }

        span {
            color: var(--text-secondary);

            &:hover {
                color: var(--first-color);
            }
        }
    }

    margin-bottom: 3rem;
`;
export const ItemContent = styled.div`
    border: 20px solid #2f2f2f;
    height: 90vh;
    position: relative;
    margin: 40px 0;
    display: flex;

    @media (min-width: 768px) {
        display: grid;

        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 994px) {
        display: grid;

        grid-template-columns: repeat(3, 1fr);
    }

    .contact-content {
        border-radius: 10px;

        background-color: var(--border-color);

        padding: 1rem 2rem;

        text-align: center;

        display: flex;

        flex-direction: column;

        justify-content: flex-start;

        align-items: flex-start;

        h4 {
            font-size: 1.3rem;

            margin-bottom: 8px;
        }

        span {
            color: var(--text-secondary);

            &:hover {
                color: var(--first-color);
            }
        }
    }

    margin-bottom: 3rem;
`;

export const Form = styled.form`
    text-align: center;

    display: flex;

    gap: 2px;

    flex-direction: column;

    .input-group {
        position: relative;

        margin: 10px 0;

        width: 90vw;

        max-width: 650px;
    }

    .input-group textarea {
        max-width: 100%;

        min-width: 100%;

        max-height: 200px;

        min-height: 150px;
    }

    .input {
        width: 100%;

        border: solid 2px var(--border-color);

        border-radius: 10px;

        background: var(--border-color);

        padding: 1rem;

        font-size: 1rem;

        color: var(--text-primary);

        transition: border 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .user-label {
        position: absolute;

        text-align: center;

        left: 15px;

        color: var(--white);

        pointer-events: none;

        transform: translateY(1rem);

        transition: 150ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    .input:focus,
    input:valid,
    textarea:valid {
        outline: none;

        border: 2px solid var(--second-color);

        background: var(--background);
    }

    .input:focus ~ label,
    input:valid ~ label,
    input:not(:placeholder-shown) ~ label,
    textarea:valid ~ label {
        transform: translateY(-50%) scale(0.8);

        background-color: var(--background);

        padding: 0 0.8em;

        color: var(--first-color);
    }

    code {
        font-family: var(--font-mono);

        font-size: var(--fz-md);
    }
`;
export const FormContainer = styled.form`
    margin-top: 8rem;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    > button {
        border: none;
        padding: 1rem 2.5rem;
        color: #fff;
        font-weight: 300;
        font-size: 1.2rem;
        border-radius: 0.5rem;
        background: ${({ theme }) => theme.primary};
        transition: 0.5s;
        width: fit-content;
        &:disabled {
            opacity: 0.5;
        }
        &:not(:disabled):hover {
            background: #0ee7b7;
        }
    }
    @media (max-width: 700px) {
        margin-top: 5rem;
        grid-template-columns: 1fr;
    }
    @media (max-width: 450px) {
        > button {
            padding: 0.8rem 1.5rem;
            font-size: 1rem;
        }
    }
`;

export const Input = styled.input`
    height: 3rem;
    width: 100%;
    background: ${({ theme }) => theme.inputBackground};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 1.7rem 1.5rem;
    color: ${({ theme }) => theme.primary};
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
    &::placeholder {
        color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 450px) {
        padding: 1.4rem;
        font-size: 1rem;
    }
`;

export const TextArea = styled.textarea`
    height: 10rem;
    width: 100%;
    background: ${({ theme }) => theme.inputBackground};
    border: 1px solid ${({ theme }) => theme.border};
    padding: 1.7rem 1.5rem;
    color: ${({ theme }) => theme.primary};
    border-radius: 0.5rem;
    font-size: 1.2rem;
    outline: none;
    transition: 0.5s;
    resize: none;
    grid-column: 1 / 3;
    &:focus {
        border-color: ${({ theme }) => theme.primary};
    }
    &::placeholder {
        color: ${({ theme }) => theme.primary};
    }
    @media (max-width: 700px) {
        grid-column: 1;
    }
    @media (max-width: 450px) {
        padding: 1.4rem;
        font-size: 1rem;
    }
`;
