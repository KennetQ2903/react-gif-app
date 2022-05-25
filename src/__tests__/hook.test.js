import { renderHook } from '@testing-library/react'
import { useForm } from 'hooks/useForm'
import { act } from 'react-dom/test-utils'

test('should change keyword', () => {
  const { result } = renderHook(() => useForm({ initialKeyword: 'nami', initialRating: 'g' }))
  act(() => {
    result.current.updateKeyword('batman')
  })
  expect(result.current.keyword).toBe('batman')
})

test('should use initial keyword', () => {
  const { result } = renderHook(() => useForm({ initialKeyword: 'nami', initialRating: 'g' }))

  expect(result.current.keyword).toBe('nami')
})
