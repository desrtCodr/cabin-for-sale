export type Feature = {
  iconName: 'mountain' | 'home' | 'sun' | 'flame' | 'compass' | 'trees' | 'utensils' | 'car'
  title: string
  description: string
}

export const features: Feature[] = [
  {
    iconName: 'mountain',
    title: 'Prime Location',
    description:
      "Minutes from Canyonlands National Park, Abajo Mountains, and Indian Creek. Perfect basecamp for exploring Utah's most stunning landscapes.",
  },
  {
    iconName: 'home',
    title: 'Unique Octagon Design',
    description:
      "Beautiful octagon cabin with 6'x6' picture windows offering 360-degree views of the Utah desert, Abajo and La Sal Mountains. Features vaulted wood ceilings and tile flooring.",
  },
  {
    iconName: 'trees',
    title: '20 Private Acres',
    description:
      'Secluded 20-acre property bordering BLM land, offering complete privacy and peace. Perfect for those seeking solitude in nature.',
  },
  {
    iconName: 'sun',
    title: 'Off-Grid Power',
    description:
      'Solar panels and battery system power lights, fridge, and device charging. Sustainable living without compromising comfort.',
  },
  {
    iconName: 'flame',
    title: 'Cozy Amenities',
    description:
      'Wood stove for warmth and a well-equipped kitchenette with small fridge, sink, and propane stove top. Note: No running water.',
  },
  {
    iconName: 'compass',
    title: 'Outdoor Living',
    description:
      'Composting outdoor toilet with panoramic views. Experience nature while maintaining comfort and sustainability.',
  },
  {
    iconName: 'car',
    title: 'Easy Access',
    description:
      'Drive-in access with plenty of space for camping and camping vehicles. Perfect for hosting friends or family.',
  },
  {
    iconName: 'utensils',
    title: 'Kitchenette',
    description:
      'Kitchenette includes small fridge, sink, and propane stove top. Everything you need for comfortable off-grid living.',
  },
  {
    iconName: 'bed',
    title: 'Airbnb and Group Getaways',
    description:
      'Perfect for Airbnb and group getaways. The cabin and surrounding area cab accomodate 20+ people for small intimate gatherings.',
  },
]
