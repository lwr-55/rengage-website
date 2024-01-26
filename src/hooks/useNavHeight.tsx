import { useEffect, useState } from "react"

export default function useNavHeight() {
    const [navHeight, setNavHeight] = useState(0)

    useEffect(() => {
        const nav = document.querySelector('.custom-nav')
        if (nav) {
            setNavHeight(nav.clientHeight)
        }
    }, [])

    return {
        navHeight
    }
}
