import styled, { css } from "styled-components";
import { Box, Flex } from "reflexbox";

export const OverlayBox = styled(Box)`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${(props) => props.theme.foreground};
    opacity: 1;
    transition: opacity 0.3s ease;
    transform: translateY(0);
    ${(props) =>
        !props.open &&
        css`
            opacity: 0;
            transition: transform 0.3s ease 0.3s, opacity 0.3s ease;
            transform: translateY(-10000px);
        `}
`;

export const ListFlex = styled(Flex)`
    position: relative;
    overflow-y: auto;
`;
