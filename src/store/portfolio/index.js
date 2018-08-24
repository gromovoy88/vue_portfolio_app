import * as firebase from 'firebase'

export default {
  state: {
    portfolio: []
  },
  mutations: {
    fetchPortfolio (state, payload) {
      state.portfolio = payload
    },
    addPortfolioElement (state, payload) {
      state.portfolio.push(payload)
    }
  },
  actions: {
    addPortfolioElement ({commit}, element) {
      var database = firebase.database()
      database.ref('/portfolio/' + element.type + '/' + element.title).set({
        id: element.id,
        title: element.title,
        description: element.description
      }).then(() => {
        console.log(element)
        commit('addPortfolioElement', element)
      })
    },
    fetchPortfolio ({commit}) {
      const design = []
      const sites = []
      const portfolio = []
      var database = firebase.database()
      database.ref('/portfolio/Design').once('value')
        .then((data) => {
          for (let key in data.val()) {
            design.push(data.val()[key])
          }
          portfolio.push(design)
        })
      database.ref('/portfolio/Sites').once('value')
        .then((data) => {
          for (let key in data.val()) {
            sites.push(data.val()[key])
          }
          portfolio.push(sites)
        })
      commit('fetchPortfolio', portfolio)
      console.log(portfolio)
    }
  },
  getters: {
    getPortfolio (state) {
      return state.portfolio
    },
    getDesign (state) {
      return state.portfolio[0]
    },
    getSites (state) {
      return state.portfolio[1]
    }
  }
}
