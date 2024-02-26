const dayjs = require("dayjs")
//import dayjs from 'dayjs' // ES 2015

function birthday(date) {
    const birthday = dayjs(date)
    const today = dayjs()

    const ageInYears = today.diff(birthday, 'year')
    const nextBirthday = birthday.add(ageInYears + 1, "year")

    const difference = nextBirthday.diff(today, "days")

    console.log(`Idade: ${ageInYears}`)
    console.log(`Proximo aniversario ${ nextBirthday.format("DD/MM/YYYY")}`)
    console.log(`Faltam ${difference} dias para o proximo aniversario!`)

}
birthday("1995-09-02")