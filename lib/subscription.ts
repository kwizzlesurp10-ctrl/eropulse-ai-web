export const FREE_DAILY_LIMIT = 3;

export function getRemainingGenerations(): number {
  if (typeof window === 'undefined') return FREE_DAILY_LIMIT;
  const isPremium = localStorage.getItem('eropulse_premium') === 'true';
  if (isPremium) return Infinity;
  
  const today = new Date().toDateString();
  const lastReset = localStorage.getItem('last_reset');
  let count = parseInt(localStorage.getItem('free_count') || '0');
  
  if (lastReset !== today) {
    count = 0;
    localStorage.setItem('last_reset', today);
    localStorage.setItem('free_count', '0');
  }
  return FREE_DAILY_LIMIT - count;
}

export function recordGeneration() {
  if (typeof window === 'undefined') return;
  const isPremium = localStorage.getItem('eropulse_premium') === 'true';
  if (isPremium) return;
  
  const count = parseInt(localStorage.getItem('free_count') || '0') + 1;
  localStorage.setItem('free_count', count.toString());
}
