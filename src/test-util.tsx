import React, { FC } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import CalculatorProvider from './provider/CalculatorProvider';

const AllTheProviders: FC = ({ children }) => {
  return (
    <CalculatorProvider>
        {children}
    </CalculatorProvider>
  )
}

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }