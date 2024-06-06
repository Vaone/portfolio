import { useMediaQuery } from '@/hooks/useMediaQuery'

export const useMedia = () => {
  const isPhoneScreen = useMediaQuery('(max-width: 480px)')
  const isTabletScreen = useMediaQuery('(max-width: 768px)')

  return { isPhoneScreen, isTabletScreen }
}
