import React, { useEffect, useRef, useContext, useCallback, useState, useMemo, useReducer } from "react"
export const useObjState = <T = any>(object: T | {} = {}) => {
  const [state, setState] = useState<T | {}>(object)

  const onUpdate = (getter: unknown) => {
    const data: T | {} = typeof getter === "function" ? getter(state) : getter

    setState(prev => ({
      ...prev,
      ...data,
    }))
  }

  const onReset = useCallback(
    (resetObj: T | {} = object) => {
      setState(resetObj)
    },
    [state]
  )

  return [state, onUpdate, onReset]
}
