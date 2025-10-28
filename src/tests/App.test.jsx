import { render, screen } from '@testing-library/react'
import { test, expect } from 'vitest'
import * as matchers from '@testing-library/jest-dom/matchers'
expect.extend(matchers)
import App from '../App'

test('renders Your Name heading', () => {
  render(<App />)
  const headings = screen.getAllByText(/Your Name/i)
  expect(headings.length).toBeGreaterThan(0)
})
