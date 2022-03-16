import { Controller } from 'egg'

export default class HomeController extends Controller {
  public async getUser() {
    const { ctx } = this
    ctx.body = await ctx.service.user.getUser()
  }
}
