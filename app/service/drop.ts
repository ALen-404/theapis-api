import { Service } from 'egg'

export default class Test extends Service {
  public async getDrop() {
    const { ctx } = this
    console.log(ctx.request.query)
    const address = ctx.request.query
    const datas = await ctx.model.Drop.find(address).sort({ _id: -1 })
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
  public async createDrop() {
    const { ctx } = this
    const dropBody = ctx.request.body
    console.log(dropBody)

    const datas = await ctx.model.Drop.create(dropBody)
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
  public async updateDrop() {
    const { ctx } = this
    console.log(ctx.request.body)
    let returnDatas: { cood: number; status: boolean; datas: any }

    const dropBody = ctx.request.body
    const { _id, ...update } = dropBody
    await ctx.model.Drop.find({
      _id,
    })
      .updateOne(update)
      .then((res) => {
        returnDatas = {
          cood: 200,
          status: true,
          datas: res,
        }
      })
    return returnDatas
  }
  public async deleteDrop() {
    const { ctx } = this
    console.log(ctx.request.body)
    let returnDatas: { cood: number; status: boolean; datas: any }

    const dropBody = ctx.request.body
    const { _id } = dropBody
    await ctx.model.Drop.findByIdAndDelete({
      _id,
    }).then((res) => {
      returnDatas = {
        cood: 200,
        status: true,
        datas: res,
      }
    })
    return returnDatas
  }
}
