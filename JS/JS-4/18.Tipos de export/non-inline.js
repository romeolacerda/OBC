function group() {
    console.log('Export nomeado não-inline (agrupado)')
}

function a () {}
function b () {}
function v () {}
function d () {}


function exportDefault() {
    console.log('Export default não-inline')
}

export { group, a, b, v, d }

export default exportDefault