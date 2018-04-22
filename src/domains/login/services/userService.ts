import { http } from '../../../http'

export async function createUser(uuid: string) {
  await http.post('/user/user', { id: uuid, metersTraveled: 0 })
}
