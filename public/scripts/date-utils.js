export const shiftDate = (date, deltaDays) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + deltaDays);
export const getLastDayOfNextMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 2, 0);
export const pad = (v) => `0${v}`.slice(-2);
export const formatDate = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
