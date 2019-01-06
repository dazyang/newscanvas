import request from 'superagent'

export function getNews(topic, callback) {
  request
    .get(`https://newsapi.org/v2/everything?q=${topic}`)
    .set('X-Api-Key', 'c35f2617fb974bd698716b8f12f74433')
    // .set('Accept', 'application/json')
    .end((err, res) => {
      // console.log(res)
      if (err) {
        console.log(err + 'error')
      } else {
        callback(JSON.parse(res.text))
      }
    })
}