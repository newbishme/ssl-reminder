import Domain from "./domain";

const FIXTURES = [
  {
    id: 0,
    name: 'test',
    expiration_date: '2016-12-12'
  },
  {
    id: 1,
    name: 'test',
    expiration_date: '2016-1-30'
   },
  {
    id: 3,
    name: 'test',
    expiration_date: '2016-02-02'
   },
  {
    id: 4,
    name: 'expired',
    expiration_date: '2015-01-01'
   },
  {
    id: 5,
    name: 'empty',
    expiration_date: ''
   }
];

let SslReminder = Discourse.Model.extend({
  addDomain(data) {
    return Discourse.ajax("/ssl-reminder/domains", {
      type: "POST",
      data: { domain: data }
    }).then((res) => { this.domains.pushObject(Domain.create(res.domain)); });
  }
});

SslReminder.reopenClass({
  createFromJson(json) {
    return this.create({
      // domains: _.map(json.ssl_reminder_domains, (domain) => { return Domain.create(domain); })
      domains: _.map(FIXTURES, (domain) => { return Domain.create(domain); })
    });
  }
});

export default SslReminder;
