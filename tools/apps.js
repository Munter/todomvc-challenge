/*
JSON.stringify(Array.prototype.map.call(document.querySelectorAll('.applist'), function (list) {
    return Array.prototype.map.call(list.querySelectorAll('a'), function (item) {
        return {
            path: item.getAttribute('href'),
            name: item.innerHTML,
            description: item.getAttribute('data-content'),
            source: item.getAttribute('data-source')
        };
    });
}), undefined, 2);
*/

var fs = require('fs'),
    lists = JSON.parse(fs.readFileSync('./data.json', 'utf8')),
    template = fs.readFileSync('./template.html', 'utf8');

console.log(lists.map(function (list) {
    return '    <section>\n' +
        '        <h2>FOO</h2>\n' +
        list.map(function (item) {
            return template.replace(/\{\{(.*?)\}\}/g, function (full, first) {
                return item[first];
            });
        }).join('\n') +
        '    </section>';
}).join('\n\n'));
