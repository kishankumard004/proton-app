// MyComponent.test.tsx (for TypeScript)

import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../components/Dashboard';
import { useQuery } from '@tanstack/react-query';

// Mock the module
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn()
}));

const mockedUseQuery = useQuery as jest.Mock;

describe('MyComponent', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('displays loading state initially', () => {
    // Mock the loading state
    mockedUseQuery.mockReturnValue({
      isLoading: true,
      data: null,
      error: null
    });

    render(<MyComponent />);

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it('displays data when fetched successfully', () => {
    // Mock the success state with some fake data
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      data: { message: 'Success' },
      error: null
    });

    render(<MyComponent />);

    expect(screen.getByText(/Data:/i)).toBeInTheDocument();
    expect(screen.getByText(/Success/i)).toBeInTheDocument();
  });

  it('displays error message when there is an error', () => {
    // Mock the error state
    mockedUseQuery.mockReturnValue({
      isLoading: false,
      data: null,
      error: { message: 'Network error' }
    });

    render(<MyComponent />);

    expect(screen.getByText(/Failed to fetch products/i)).toBeInTheDocument();
    expect(screen.getByText(/Network error/i)).toBeInTheDocument();
  });
});
