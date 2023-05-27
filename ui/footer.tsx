/* eslint-disable react/no-unknown-property */
'use client';

import NavLink from 'next/link';
import React from 'react';
import { FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';

import styled from 'styled-components';

import { Button } from '../styles/Button';

const Footer = () => {
    return (
        <Wrapper>
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3>
                    </div>

                    <div className="contact-short-btn">
                        <NavLink href="/">
                            <Button>Get Started</Button>
                        </NavLink>
                    </div>
                </div>
            </section>

            {/* footer section  */}

            <footer>
                <div className="container grid grid-four-column">
                    <div className="footer-about">
                        <h3>Thapa Technical</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>

                    {/* 2nd column */}
                    <div className="footer-subscribe">
                        <h3>Subscribe to get important updates</h3>
                        <form action="#">
                            <input type="email" required autoComplete="off" placeholder="Email" />
                            <input type="submit" value="Subscribe" />
                        </form>
                    </div>

                    {/* 3rs column  */}
                    <div className="footer-social">
                        <h3>Follows Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <a
                                    href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <FaYoutube className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* 4th column  */}
                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <h3>+91 12345678978</h3>
                    </div>
                </div>

                {/* bottom section  */}
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column">
                        <p>@{new Date().getFullYear()} ThapaTechnical. All Rights Reserved</p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    );
};

const Wrapper = styled.section`
    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: rgb(249 249 255);
        border-radius: 1rem;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        transform: translateY(50%);
    }
    .contact-short-btn {
        justify-self: end;
        align-self: center;
    }

    footer {
        padding: 14rem 0 9rem 0;
        background-color: #0a1435;

        h3 {
            color: #ffffff;
            margin-bottom: 2.4rem;
        }
        p {
            color: #fff;
        }
        .footer-social--icons {
            display: flex;
            gap: 2rem;

            div {
                padding: 1rem;
                border-radius: 50%;
                border: 2px solid #fff;

                .icons {
                    color: #fff;
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                }
            }
        }

        .footer-bottom--section {
            padding-top: 9rem;

            hr {
                margin-bottom: 2rem;
                color: #ffffff;
                height: 0.1px;
            }
        }
    }

    @media (max-width: { mobile: '768px', tab: '998px' }) {
        .contact-short {
            max-width: 95vw;
            padding: 2rem 0rem;
            display: flex;
            justify-content: center;
            align-items: center;

            .contact-short-btn {
                text-align: center;
                justify-self: flex-start;
            }
        }

        footer .footer-bottom--section {
            padding-top: 3.2rem;
        }
    }
`;

export default Footer;
