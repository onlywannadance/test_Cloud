import dayjs from 'dayjs'

export const formatHHMM = (date) => {
  return dayjs(date).format('HH:mm')
}

export const formatDDMMYYYY = (date) => {
  return dayjs(date).format('DD:MM:YYYY')
}
