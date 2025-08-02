import React, { useState } from 'react'
import axios from 'axios'
import './Login.css'

interface LoginFormData {
  username: string
  password: string
}

interface LoginResponse {
  message: string
  token?: string
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    try {
      const response = await axios.post<LoginResponse>('/api/auth/login', formData)
      setMessage(response.data.message)
      
      if (response.data.token) {
        // In a real app, you would store this token and redirect
        console.log('Login successful, token:', response.data.token)
      }
    } catch (error) {
      setMessage('Login failed. Please try again.')
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Football Stats</h1>
        <h2>Login</h2>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              placeholder="Enter your username"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" disabled={loading} className="login-button">
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        {message && <div className="message">{message}</div>}
        
        <div className="demo-credentials">
          <p><strong>Demo credentials:</strong></p>
          <p>Username: admin</p>
          <p>Password: password</p>
        </div>
      </div>
    </div>
  )
}

export default Login