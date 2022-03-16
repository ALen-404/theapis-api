import { Application } from 'egg'

export default (app: Application) => {
  const { controller, router } = app
  router.get('/get-user', controller.user.getUser)
  router.get('/get-drop', controller.drop.getDrop)
  router.post('/update-drop', controller.drop.updateDrop)
  router.post('/create-drop', controller.drop.createDrop)
  router.post('/delete-drop', controller.drop.deleteDrop)
}
