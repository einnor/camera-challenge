import React from 'react';

type IButton = {
  onClick: React.MouseEventHandler <HTMLElement>;
  disabled?: boolean;
  icon?: React.ReactNode;
  text?: string;
}

export default IButton;