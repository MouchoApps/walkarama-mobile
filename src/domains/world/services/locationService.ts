import { IUuid } from '../../../models/IUuid'
import { http } from '../../../http'

export async function postLocation(userId: IUuid, meters: number) {
  http.post('/locations', { meters })
}
