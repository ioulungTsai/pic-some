import {useState, useEffect, useRef} from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)
    
    function enter() {
        setHovered(true)
    }
    
    function leave() {
        setHovered(false)
    }
    
    useEffect(() => {
        const instanceOfCurrentRef = ref.current
        instanceOfCurrentRef.addEventListener("mouseenter", enter)
        instanceOfCurrentRef.addEventListener("mouseleave", leave)
        
        return () => {    
            instanceOfCurrentRef.removeEventListener("mouseenter", enter)
            instanceOfCurrentRef.removeEventListener("mouseleave", leave)
        }
    }, [])
    
    return [hovered, ref]
}

export default useHover