async function asyncSum(a, b) {
    if (typeof a != 'number' || typeof b != 'number'){
      return Promise.reject('argument must be a numver')
    } else return a + b
}

async function execute() {
    try { //  captura tanto erros quanto rejeições de promisess assincronas
        
    } catch (err) {
        console.log(err);
    }
    const result = await asyncSum(50,33) // depois de executado o await trava a promisse
    console.log(result);
}

execute()