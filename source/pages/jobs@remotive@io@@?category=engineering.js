var url = require('url')
var nightmare = require('nightmare')

var send = require('_send')
var meta = require('_meta')
var get = require('_get')

var URL = get.url(__filename)
var NAME = get.name(URL)

module.exports = function execute (opts, report) {
  opts = opts || { show: false }
  var nm = nightmare(opts)

  nm.goto(URL)
    .evaluate(query)
    .run(collect)

  function collect (error, result) {
    if (error) return console.error(error)
    var DATA = []
    var total = result.length
    var _next = next.bind(nm)
    _next(result.pop(), callback)
    function callback (data) {
      DATA.push(data)
      console.log(`download: ${result.length}/${total}`)
      if (result.length) _next(result.pop(), callback)
      else {
        nm.end().run(function(){})
        send(DATA, function (err, res) {
          if (err) throw err
          if (typeof report === 'function') report(null, DATA)
        })
      }
    }
  }
}

function next (item, cb) {
  this
    .goto(item.link)
    .evaluate(function () { return document.body.innerText.toLowerCase() })
    .run(function (error, text) {
      if (error) return console.error(error)
      meta(text, function (err, info) {
        item.text = info.text
        item.stack = {
          tech: info.tech,
          antitech: info.antitech
        }
        cb(item)
      })
    })
}

function query () {
  var oldOpen = window.open
  function hookOpen (cb) {
    window.open = function (url) {
      cb(url)
      oldOpen.apply(window, arguments)
    }
    return function undo () { window.open = oldOpen }
  }
  return Array.from(document.querySelectorAll('li')).map((x,i)=> {
    var ss = Array.from(x.querySelectorAll('span span')).map(s => s.innerHTML)
    var link = 'link'
    var undo = hookOpen(url => { link = url })
    x.click()
    undo()
    return {
      link: link,
      title: ss[0],
      company: ss[2],
      type: ss[3],
      length: ss.length
    }
  }).filter(x=> x.length && ~x.type.toLowerCase().indexOf('remote')).map(x=>{
    x.type = 'remote'
    delete x.length
    return x
  })
}

function getQuery (href) {
  var site = url.parse(href).hostname
  var query = {
    "qulinary.recruiterbox.com": function () {
      return {
        source: location.href,
        title: document.querySelector('.meta-job-detail-title').innerText,
        date: '<unknown>',
        // location: {
        //   city: document.querySelector('.meta-job-location-city').innerText,
        //   state: document.querySelector('.meta-job-location-state').innerText,
        //   country: document.querySelector('.meta-job-location-country').innerText,
        // },
        remote: document.querySelectorAll('.badge-opening-meta')[1].innerText,
        type: document.querySelectorAll('.badge-opening-meta')[0].innerText,
        requirements: Array.from(document.querySelectorAll('ul')[0].querySelectorAll('li')).map(x=>x.innerText),
        bonus: Array.from(document.querySelectorAll('ul')[1].querySelectorAll('li')).map(x=>x.innerText),
        description: document.querySelector('.jobdesciption p').innerText,
        employer: document.querySelectorAll('h1')[3].innerText
      }
    },
    "careers.uvsouthsourcing.com": function () {
      return {
        source: location.href,
        title: document.querySelector('#jobTitle').innerText,
        date: document.querySelector('#jobDetailPosted').innerText,
        // location: {
        //   city: document.querySelector('jobDetailLocation').innerText.split(',')[0],
        //   state: document.querySelector('jobDetailLocation').innerText.split(',')[1],
        //   country: '',
        // },
        remote: true,
        type: '',
        requirements: Array.from(document.querySelector('.detailsJobDescription td')
          .removeChild(document.querySelector('.detailsJobDescription ul'))
          .querySelectorAll('li'))
          .map(x=>x.innerText),
        // bonus: Array.from(document.querySelectorAll('ul')[1].querySelectorAll('li')).map(x=>x.innerText),
        description: document.querySelector('.detailsJobDescription').innerText
        // employer: document.querySelectorAll('h1')[3].innerText
      }
    },
    "launchpotato.com": function () {
      return `launchpotato:
        ${document.title}
        ${location.href}
      `
    },
    "www.hanzoarchives.com": function () {
      return `hanzoarchives:
        ${document.title}
        ${location.href}
      `
    },
    "www.pbxdom.com": function () {
      return `pbxdom:
        ${document.title}
        ${location.href}
      `
    },
    "ycbm.bamboohr.co.uk": function () {
      return `bamboohr:
        ${document.title}
        ${location.href}
      `
    },
    "www.knackhq.com": function () {
      return `knackhq:
        ${document.title}
        ${location.href}
      `
    },
    "corgibytes.com": function () {
      return `corgibytes:
        ${document.title}
        ${location.href}
      `
    },
    "docs.google.com": function () {
      return `docs.google:
        ${document.title}
        ${location.href}
      `
    },
    "nvestly.com": function () {
      return `nvestly:
        ${document.title}
        ${location.href}
      `
    },
    "count.ly": function () {
      return `count.ly:
        ${document.title}
        ${location.href}
      `
    },
    "angel.co": function () {
      return `angel:
        ${document.title}
        ${location.href}
      `
    }
  }[site]
  if (!query) throw new Error(JSON.stringify(site,null,2))
  return query
}
