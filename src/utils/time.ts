export function getMinuteDifferenceFromNow(time: string) {
  return Math.ceil((new Date(time).getTime() - new Date().getTime()) / 60000);
}
