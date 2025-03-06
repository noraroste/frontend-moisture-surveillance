export const headerText = 'Velkommen til fuktighetsmåleren';
export const headingRecentValuesText = 'Siste fuktighetsnivåer';
export const recentValuesText = (
  plantName: String,
  moisturePercentage: number,
  timeSince: String
): string =>
  ` ${plantName} har et fuktighetsnivå på ${moisturePercentage}%, oppdatert for ${timeSince}`;
export const yearsAgo = 'år siden';
export const monthsAgo = 'måneder siden';
export const daysAgo = 'dager siden';
export const hoursAgo = 'timer siden';
export const minutesAgo = 'minutter siden';
export const secondsAgo = 'sekunder siden';
export const showGraphText = 'Vis grafer';
export const hideGraphText = 'Skjul grafer';
