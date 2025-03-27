import React, { useEffect, useRef, useContext, useCallback, useState, useMemo, useReducer } from "react"
import { ValidCheck } from "validator/interface"

interface params {
  value?: string
  errorMsg?: string
  validCheck?: ValidCheck
}

export const useInputs = ({ value = "", errorMsg = "", validCheck = () => {} }: params) => {
  const [_value, _setValue] = useState(value)
  const [errorData, setErrorData] = useState({
    isvalid: true,
    errorMsg,
  })

  const _onChange = useCallback((params: React.ChangeEvent<HTMLInputElement> | string) => {
    _setValue(typeof params === "string" ? params : params.target.value)
  }, [])

  const _validCheck: ValidCheck = () => {
    try {
      validCheck(_value)
      setErrorData({
        isvalid: true,
        errorMsg,
      })
      return true
    } catch (error) {
      const message = validCheck.errorHandler?.(error) ?? ""

      setErrorData({
        isvalid: false,
        errorMsg: message,
      })
      return false
    }
  }

  return {
    value: _value,
    isvalid: errorData.isvalid,
    errorMsg: errorData.errorMsg,
    onChange: _onChange,
    validCheck: _validCheck,
  }
}
