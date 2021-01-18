import React, { useEffect, useRef } from 'react';
import styled from 'styled-components/macro';
import { HiExclamation } from 'react-icons/hi';

import { Button } from 'app/components/Button';

interface Props {
  message: string;
  onClose: () => void;
}

export function ErrorMessage(props: Props) {
  const { message, onClose } = props;
  const btnRef = useRef<HTMLButtonElement>(null!);

  useEffect(() => {
    btnRef.current.focus();
  }, []);

  return (
    <Overlay onClick={onClose}>
      <Wrapper>
        <HiExclamation />
        <Message>{message}</Message>
        <Button ref={btnRef} variant="outline" autoFocus>
          Okay
        </Button>
      </Wrapper>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.75);
`;

const Wrapper = styled.div`
  padding: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes[5]}px;
  text-align: center;
`;

const Message = styled.div`
  color: ${p => p.theme.colors.danger};
`;
