function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)[0]
    this.ddd = fixedString.match(/(?<=\()\d+(?=\))/)[0]
    this.number = fixedString.match(/(?<=\)).+/)[0].replace(/-/g, "")
}

console.log(new PhoneNumber('+ 55 (22) 9 9 9764-0767'))
console.log(new PhoneNumber('+ 1 (42) asf555-9999-8888'))