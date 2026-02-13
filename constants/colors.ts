// Shared color constants for Migration Museum
// These map accent color names to their hex values

export const colorMap = {
  blue: '#5A5FEF',
  violet: '#A880FF',
  orange: '#FF5C45',
  yellow: '#FFD700',
  green: '#59F5B1',
} as const;

export const textColorMap = {
  blue: '#FFFFFF',
  violet: '#FFFFFF',
  orange: '#FFFFFF',
  yellow: '#000000',
  green: '#000000',
} as const;

// Extended color map for navigation hover states
export const navigationColorMap: Record<string, string> = {
  'mm-blue': '#0047FF',
  'mm-violet': '#7D5CFF',
  'mm-green': '#59F5B1',
  'mm-orange': '#FF6B35',
};

export type AccentColor = keyof typeof colorMap;
