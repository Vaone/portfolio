import React, { ComponentPropsWithoutRef, ElementType, forwardRef } from 'react'

import { styled } from 'styled-components'

type ButtonOwnProps<T extends ElementType = 'button'> = {
  as?: T
  className?: string
}

type ButtonProps<T extends ElementType = 'button'> = ButtonOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps<T>>

export const Button = forwardRef(
  <T extends ElementType = 'button'>(
    { as, children, className, ...rest }: ButtonProps<T>,
    ref: React.ComponentPropsWithRef<T>['ref']
  ) => {
    const Component = as || StyledButton

    return (
      <Component className={className} ref={ref} {...rest}>
        {children}
      </Component>
    )
  }
)

const StyledButton = styled.button`
  padding: 12px 20px;
  background: ${({ theme }) => theme.colors.Primary};
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  line-height: 20px;
  outline: none;
  color: ${({ theme }) => theme.colors.SecondaryFont};
`
