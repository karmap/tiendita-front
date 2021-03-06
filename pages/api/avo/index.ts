import { IncomingMessage, ServerResponse } from 'http'
import DB from '@database'
//import enablePublicAccess from '@cors'


const allAvos = async (request: IncomingMessage, response: ServerResponse) => {
    const db = new DB()
    const allEntries = await db.getAll()
    const length = allEntries.length

    response.statusCode = 200 // todo OK
    response.setHeader('Content-type', 'application/json')
    response.end (JSON.stringify({allEntries}))
}
    
export default allAvos