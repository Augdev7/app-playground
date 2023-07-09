/* eslint-disable @typescript-eslint/no-unused-vars */
import { WhatsappLogo, PaintBrush, PenNibStraight, Gauge, Storefront } from 'phosphor-react';

import { Container, BoxContainer, BoxItem } from './styles';

export function Box() {
    return (
        <Container>
            <BoxContainer>
                <BoxItem>
                    <span className="icon">
                        <Storefront size={84} color="#171f38" weight="fill" />
                    </span>
                    <span className="career-desc">
                        <h2>PUBLICIDADE</h2>
                        <p>Elabore e surpreenda com essa energia que move o mercado.</p>
                    </span>
                </BoxItem>
                <BoxItem>
                    <span className="icon">
                        <PenNibStraight size={84} color="#171f38" weight="fill" />
                    </span>
                    <span className="career-desc">
                        <h2>MÍDIA CONTEÚDO</h2>
                        <p>Conheça a ferramenta que irá crescer a sua produtividade</p>
                    </span>
                </BoxItem>
                <BoxItem>
                    <span className="icon">
                        <Gauge size={84} color="#171f38" weight="fill" />
                    </span>
                    <span className="career-desc">
                        <h2>PERFORMANCE</h2>
                        <p>Priorize o seu propósito! Mantenha o foco e encontre a solução</p>
                    </span>
                </BoxItem>
            </BoxContainer>
        </Container>
    );
}
