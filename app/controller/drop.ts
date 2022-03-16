import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async getDrop() {
    const { ctx } = this
    ctx.body = await ctx.service.drop.getDrop()
  }
  public async createDrop() {
    const { ctx } = this
    ctx.body = await ctx.service.drop.createDrop()
  }
  public async updateDrop() {
    const { ctx } = this
    ctx.body = await ctx.service.drop.updateDrop()
  }
  public async deleteDrop() {
    const { ctx } = this
    ctx.body = await ctx.service.drop.deleteDrop()
  }
}
