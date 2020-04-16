import { useState } from 'react';

export const useLocalState = (buahloc) => {
    const [loc, setState] = useState(localStorage.getItem(buahloc))

    const setLoc = (newItem) => {
      localStorage.setItem(buahloc, newItem)
      setState(newItem)
    }

    return [loc, setLoc]
}