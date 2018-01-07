import { AccessToken } from './AccessToken'
export interface ITokenStore {
  getAccessToken(appId: string): Promise<AccessToken | undefined>
  saveAccessToken(appId: string, accessToken: AccessToken): Promise<void>
}

export class MemoryTokenStore implements ITokenStore {
  private tokenMap: Map<string, AccessToken>
  constructor() {
    this.tokenMap = new Map()
  }
  public async getAccessToken(appId: string) {
    return this.tokenMap.get(appId)
  }
  public async saveAccessToken(appId: string, accessToken: AccessToken) {
    this.tokenMap.set(appId, accessToken)
  }
}
