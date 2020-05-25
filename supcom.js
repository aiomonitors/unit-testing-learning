const { get } = require('request-promise-native');
const { load } = require('cheerio');

module.exports.GetLatestLink = async () => {
    const response = await get('https://www.supremecommunity.com/season/latest/droplists/', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36',
        },
        followAllRedirects: true,
        resolveWithFullResponse: true,
        gzip: true,
    });
    const { body } = response;
    const $ = load(body);
    return `https://www.supremecommunity.com${$('#box-latest > a').attr('href')}`;
};
