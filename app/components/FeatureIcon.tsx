import { Mountain, Home, Sun, Flame, Compass, Trees, Utensils, Car, Bed } from 'lucide-react'
import { Feature } from '../data/features'

const iconMap = {
  mountain: Mountain,
  home: Home,
  sun: Sun,
  flame: Flame,
  compass: Compass,
  trees: Trees,
  utensils: Utensils,
  car: Car,
  bed: Bed,
}

interface FeatureIconProps {
  iconName: Feature['iconName']
  className?: string
}

export function FeatureIcon({ iconName, className = 'w-8 h-8 text-[var(--color-text-light)]' }: FeatureIconProps) {
  const Icon = iconMap[iconName]
  return <Icon className={className} />
}
