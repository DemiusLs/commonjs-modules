import retHobbyArr from "./hobbies.js"
import retNameObj from "./names.js"

const peoplejs = () => ({

    fullName : retNameObj("marco", "rossi"),
    hobbies :  retHobbyArr("calcio" , "pesca" , "scacchi"),
})

export default peoplejs;