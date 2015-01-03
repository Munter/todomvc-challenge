var keys = {
        'enter': '\uE007',
        'escape': '\uE00C'
    },
    todos = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
    ],
    domain = 'http://localhost:12345';

function assertItems(test, items) {
    console.log(test);
    test.assert.numberOfElements('#todo-list li', items.length, 'There should be ' + items.length + ' todo items');

    items.forEach(function (item, i) {
        var idx = i + 1;
        test.assert.text('#todo-list li:nth-child(' + idx + ')', item, 'Item ' + idx + ' should be "' + item + '"');
    });
}

module.exports = {
    'TodoMVC - VanillaJS': function (test) {
        // Open and check that bootstrap is correct
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .assert.doesntExist('#todo-list li', 'There should be no todos')
            .assert.notVisible('#main', '#main should be hidden')
            .assert.notVisible('#footer', '#footer should be hidden');

        // Trim input and don't add if empty
        test
            .sendKeys('#new-todo', ' ' + keys.enter)
            .assert.doesntExist('#todo-list li', 'There should be no todos');

        // New Todo
        test
            .sendKeys('#new-todo', todos[0] + keys.enter)
            .assert.numberOfElements('#todo-list li', 1, 'There should be 1 todo item')
            .assert.text('#todo-list li:nth-child(1)', todos[0], 'Item 1 should be "' + todos[0] + '"')
            .assert.val('#new-todo', '', 'The input should be empty');

        // Show #main and #footer when items present
        test
            .assert.visible('#main', '#main should be visible')
            .assert.visible('#footer', '#footer should be visible');


        // Append new todos at the bottom
        test
            .sendKeys('#new-todo', todos[1] + keys.enter)
            .assert.numberOfElements('#todo-list li', 2, 'There should be 2 todo items')
            .assert.text('#todo-list li:nth-child(2)', todos[1], 'Item 2 should be "' + todos[1] + '"');

        // Mark all as complete
        test
            .click('#toggle-all')
            .assert.selected('#toggle-all')
            .assert.numberOfElements('#todo-list li.completed', 2, 'All items should be checked');

        // Mark all as incomplete
        test
            .click('#toggle-all')
            .assert.notSelected('#toggle-all')
            .assert.doesntExist('#todo-list li.completed', 'All items should be unchecked');

        // Complete first item
        test
            .log.dom('#todo-list')
            .click('#todo-list li:first-child .toggle')
            .assert.numberOfElements('#todo-list li.completed', 1, 'One items should be checked')
            .assert.notSelected('#toggle-all');

        // Complete last item
        test
            .click('#todo-list li:last-child .toggle')
            .assert.numberOfElements('#todo-list li.completed', 2, 'All items should be checked')
            .assert.selected('#toggle-all');

        test.screenshot('debug.png');

        test.done();
    }
};
