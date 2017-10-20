export default class MockFactsfeedService {
  loadFacts (recipient) {
    recipient.factsFeed = {
      facts: [
        {id: 1, title: 'Fact1', note: 'fact note', timestamp: '2013-10-21T13:28:06.419Z', time: '2013-10-21T13:28:06.419Z'},
        {id: 2, title: 'Fact1', note: 'fact note', timestamp: '2013-10-21T13:28:06.419Z', time: '2013-10-21T13:28:06.419Z'}
      ]
    }
  }
}
