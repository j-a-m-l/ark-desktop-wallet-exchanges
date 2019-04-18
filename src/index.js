module.exports = {
  register () {
    this.routes = [
      {
        path: '/exchanges/binance',
        name: 'binance',
        component: 'Binance'
      },
      {
        path: '/exchanges/bittrex',
        name: 'bittrex',
        component: 'Bittrex'
      },
      {
        path: '/exchanges/bit-z',
        name: 'bit-z',
        component: 'BitZ'
      },
      {
        path: '/exchanges/coss',
        name: 'coss',
        component: 'Coss'
      },
      {
        path: '/exchanges/okex',
        name: 'okex',
        component: 'Okex'
      },
    ]

    this.menuItems = [
      {
        routeName: 'binance',
        title: 'Binance'
      },
      {
        routeName: 'bittrex',
        title: 'Bittrex'
      },
      {
        routeName: 'coss',
        title: 'COSS'
      },
      {
        routeName: 'bit-z',
        title: 'Bit-Z'
      },
      {
        routeName: 'okex',
        title: 'OKEx'
      }
    ]
  },

  getComponentPaths () {
    return this.routes.reduce((all, route) => {
      return {
        ...all,
        [route.component]: `pages/${route.component}.js`
      }
    }, {})
  },

  getRoutes () {
    return this.routes
  },

  getMenuItems () {
    return this.menuItems
  },

  getUnprotectedIframeUrls () {
    return [
      'https://*.binance.com/*', 'https://binance.com/*',
      'https://*.bittrex.com/*', 'https://bittrex.com/*',
      'https://*.bit-z.com/*', 'https://bit-z.com/*',
      'https://*.coss.io/*', 'https://coss.io/*',
      'https://*.okex.com/*', 'https://okex.com/*'
    ]
  }
}
