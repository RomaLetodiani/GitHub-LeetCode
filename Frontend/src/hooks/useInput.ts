import { useQueryClient } from '@tanstack/react-query'
import { useEffect, useState } from 'react'

/**
 * Represents the shape of the state object returned by the useInput hook.
 */
type InputState = {
  /** The current value of the input field. */
  value: string
  /** Indicates whether the input field is currently focused. */
  focus: boolean
  /** Event handler for input changes. */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  /** Event handler for input blur. */
  onBlur: () => void
  /** Event handler for input focus. */
  onFocus: () => void
  /** Indicates whether there is an error in the input value. */
  hasError: boolean
}

/**
 * A custom React hook for managing the state of an input field.
 * @param validate A function to validate the input value.
 * @returns An object containing input state and event handlers.
 */
export const useInput = (
  validate: (value: string) => boolean,
  queryKeys: string[] = ['input'],
): InputState => {
  const queryClient = useQueryClient()
  const [value, setValue] = useState<string>('romaletodiani')
  const [touched, setTouched] = useState<boolean>(false)
  const [focus, setFocus] = useState<boolean>(false)

  const isValid: boolean = validate(value)
  const hasError: boolean = !isValid && touched

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const onBlur = (): void => {
    setTouched(true)
    !value && setFocus(false)
  }

  const onFocus = (): void => {
    setFocus(true)
  }

  useEffect(() => {
    value && setFocus(true)
    queryClient.setQueryData(queryKeys, value)
  }, [value])

  return {
    value,
    focus,
    onChange,
    onBlur,
    onFocus,
    hasError,
  }
}
