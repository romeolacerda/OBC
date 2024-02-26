import{ inline as i } from "./inline.js"
import defaultInline from "./inline.js" // só pode ter um export default por arquivo
import { group } from "./non-inline.js"
import exportDefault from "./non-inline.js"

i()
defaultInline()

group() 
exportDefault()