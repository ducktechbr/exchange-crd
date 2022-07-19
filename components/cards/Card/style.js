import styled from 'styled-components';

export const CardComponent = styled.div`
    background: ${(props) => props.background};
    color: ${(props) => props.color};
    border-radius: 40px 40px 0 40px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    width: 100%;
    padding: ${(props) => props.padding};
`;
