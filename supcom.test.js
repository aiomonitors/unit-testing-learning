/* eslint-disable no-undef */
const { GetLatestLink } = require('./supcom');

it('correctly scrapes the latest link', async () => {
    expect.assertions(1);
    expect(await GetLatestLink()).toEqual('https://www.supremecommunity.com/season/spring-summer2020/droplist/2020-05-28/');
});

// return GetLatestLink().then(data => expect(data).toEqual('https://www.supremecommunity.com/season/spring-summer2020/droplist/2020-05-21/'))
