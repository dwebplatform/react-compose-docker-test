import React, {useState} from 'react'

export function useInput(initialization: any) {
    const [value, setValue] = useState(initialization)

    const onChange = (value: any) => {
      setValue(value)
    }

    return {
      value, onChange
    }
  } 