import { Service } from 'egg'

export default class Test extends Service {
  public async getUser() {
    const { ctx } = this
    console.log(ctx.request.query, '11111')
    const address = ctx.request.query
    const datas = await ctx.model.User.find(address)
    let returnDatas: { cood: number; status: boolean; datas: any }
    if (datas.length > 0) {
      returnDatas = {
        cood: 200,
        status: true,
        datas,
      }
    } else {
      returnDatas = {
        cood: 200,
        status: false,
        datas,
      }
    }
    return returnDatas
  }
}
