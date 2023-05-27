'use client';

import * as S from './styles';

type CardMarketingProps = {
    children: Reac.ReactNode;
    href: string;
};

export function CardMarketing({ children, href }: CardMarketingProps) {
    return (
        <S.Container href={href} prefetch={false}>
            <S.Content>{children}</S.Content>
        </S.Container>
    );
}
