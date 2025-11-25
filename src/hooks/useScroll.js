import { useEffect, useState } from 'react'

/**
 * Custom hook for scroll progress tracking
 * @returns {number} Progress percentage (0-100)
 */
export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight
            const progress = (window.scrollY / totalHeight) * 100
            setScrollProgress(progress)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return scrollProgress
}

/**
 * Custom hook to show/hide scroll-to-top button
 * @param {number} threshold - Scroll position threshold in pixels
 * @returns {boolean} Whether to show the button
 */
export function useShowScrollTop(threshold = 500) {
    const [showScrollTop, setShowScrollTop] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > threshold)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [threshold])

    return showScrollTop
}
