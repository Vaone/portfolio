import { RefObject, useRef } from 'react'

export const useScrollTo = () => {
  const projectRef = useRef<HTMLDivElement>(null)

  const onScrollToBlock = (blockRef: RefObject<HTMLDivElement> | null) => {
    if (blockRef && blockRef.current) {
      blockRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return { onScrollToBlock, projectRef }
}
