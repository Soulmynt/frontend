import React, { useState } from "react";
import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  display: grid;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  background: #FFFFF5E;
  backdrop-filter: blur(4px);
  z-index: 999;
`;

const ModalWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  background: #FFF;
  border-radius: 25px;
  box-shadow: inset 1px 1px 2px rgba(43, 45, 45, 0.3),
    inset -1px -1px 2px rgba(31, 33, 33, 0.5);
  filter: drop-shadow(-5px 5px 10px rgba(31, 33, 33, 0.2))
    drop-shadow(5px -5px 10px rgba(31, 33, 33, 0.2));
`;

const CloseWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  color: #000;
`;

const Modal = ({
  width = 430,
  height = 480,
  isOpened = false,
  onClose,
  children,
  ...props
}) => {
  return isOpened ? (
    <>
      <ModalOverlay>
        <ModalWrapper width={width} height={height}>
          {onClose && (
            <CloseWrapper>
              <CloseButton onClick={onClose}>X</CloseButton>
            </CloseWrapper>
          )}
          {children}
        </ModalWrapper>
      </ModalOverlay>
    </>
  ) : (
    <></>
  );
};

export default Modal;
