import moment from 'moment'

export function convertToSlug(text) {
  return text
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
}

export function formatDate(date) {
  return moment(date).fromNow()
}
