export interface comicInterface {
  safe_title: string
  img: string
  alt: string
  year: number
  month: number
  day: number
}
const email = 'm.nikolashina@innopolis.university'
const encodedEmail = encodeURIComponent(email)
const apiIDEndpoint = `https://fwd.innopolis.university/api/hw2?email=${encodedEmail}`
const apiComicEndpoint = `https://fwd.innopolis.university/api/comic`

const response = await fetch(apiIDEndpoint)
const id = await response.text()

const comicResponse = await fetch(`${apiComicEndpoint}?id=${id.trim()}`)
const data = await comicResponse.json()

const comic: comicInterface = {
  safe_title: data.safe_title,
  img: data.img,
  alt: data.alt,
  year: data.year,
  month: data.month,
  day: data.day,
}

export const load = () => {
  return {
    comic,
  }
}
