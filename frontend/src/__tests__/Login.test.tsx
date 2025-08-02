import { render, screen, fireEvent } from '@testing-library/react'
import Login from '../components/Login/Login'

// Mock axios
jest.mock('axios', () => ({
  post: jest.fn(),
}))

describe('Login Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('renders login form correctly', () => {
    render(<Login />)
    
    expect(screen.getByText('Football Stats')).toBeInTheDocument()
    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByLabelText('Username:')).toBeInTheDocument()
    expect(screen.getByLabelText('Password:')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument()
  })

  test('displays demo credentials', () => {
    render(<Login />)
    
    expect(screen.getByText('Demo credentials:')).toBeInTheDocument()
    expect(screen.getByText('Username: admin')).toBeInTheDocument()
    expect(screen.getByText('Password: password')).toBeInTheDocument()
  })

  test('updates input values when typed', () => {
    render(<Login />)
    
    const usernameInput = screen.getByLabelText('Username:') as HTMLInputElement
    const passwordInput = screen.getByLabelText('Password:') as HTMLInputElement

    fireEvent.change(usernameInput, { target: { value: 'testuser' } })
    fireEvent.change(passwordInput, { target: { value: 'testpass' } })

    expect(usernameInput.value).toBe('testuser')
    expect(passwordInput.value).toBe('testpass')
  })
})