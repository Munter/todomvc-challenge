var keys = {
        'enter': '\uE007',
        'escape': '\uE00C'
    },
    todos = [
        'buy some cheese',
        'feed the cat',
        'book a doctors appointment'
    ],
    domain = 'localhost:12345';

module.exports = {
    'TodoMVC - VanillaJS': function (test) {
        // Open and check that bootstrap is correct
        test
            .open('http://' + domain + '/vanilla-examples/vanillajs/')
            .assert.numberOfElements('#todo-list li', 0, 'There should be no todos')
            .assert.notVisible('#main', '#main should be hidden')
            .assert.notVisible('#footer', '#footer should be hidden');

        // New Todo
        test
            .sendKeys('#new-todo', todos[0])
            .sendKeys('#new-todo', keys.enter)
            .assert.numberOfElements('#todo-list li', 1, 'There should be 1 todo');
    }
};
