export default function(context) {
  // go tell the store to update the page
  // console.log('context.route', context.route)
  context.store.commit('UPDATE_PAGE', context.route.name)
}
