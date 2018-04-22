import { IUuid } from '../../../models/IUuid'
import { http } from '../../../http'

export async function postLocation(userId: IUuid, meters: number) {
  await http.put(`/user/user/${userId}`, { id: userId, metersTraveled: meters })
}
