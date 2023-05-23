/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';

import HomeService from './../HomeService/index';
import Service from './../service/Service';
import * as S from './styles';

const MainHome = ({ title = 'ATUAÇÃO · DESIGN & WEB', description = 'MAIS QUE IDEIAS' }) => (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
        <S.Description>{description}</S.Description>
        <HomeService />
    </S.Wrapper>
);

export default MainHome;
