import { CardComponent } from './style';

export default function Card(props) {
    return (
        <CardComponent
            background={props.background}
            color={props.color}
            padding={props.padding}
        >
            {props.children}
        </CardComponent>
    );
}
