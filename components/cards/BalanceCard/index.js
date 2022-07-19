import {
    BalanceCardComponent,
    Body,
    Header,
    Icon,
    Info,
    Value,
    Symbol,
} from './style';
import Card from '../Card';

export default function BalanceCard({
    background,
    color,
    padding,
    img,
    label,
    balance,
    symbol,
}) {
    return (
        <Card background={background} color={color} padding={padding}>
            <BalanceCardComponent
                img={img}
                label={label}
                balance={balance}
                symbol={symbol}
            >
                <Icon>
                    <img height="50" src={img} />
                </Icon>
                <Info>
                    <Header>
                        <span>{label}</span>
                    </Header>
                    <Body>
                        <Value>
                            <span>{balance}</span>
                        </Value>
                        <Symbol>
                            <span>{symbol}</span>
                        </Symbol>
                    </Body>
                </Info>
            </BalanceCardComponent>
        </Card>
    );
}
