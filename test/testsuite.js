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

function clearLocalStorage() {
    this.assert.ok(!window.localStorage.clear(), 'Clear localStorage');
}

module.exports = {
    'When page is initially opened': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .assert.exists('#new-todo:focus', 'it should focus on the todo input field')
            .done();
    },

    'No todos': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .assert.doesntExist('#todo-list li', 'There should be no todos')
            .assert.notVisible('#main', '#main should be hidden')
            .assert.notVisible('#footer', '#footer should be hidden')
            .done();
    },

    'New todo - should allow me to add todo items': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .sendKeys('#new-todo', todos[0] + keys.enter)
            .assert.numberOfElements('#todo-list li', 1, 'There should be 1 todo item')
            .assert.text('#todo-list li:nth-child(1)', todos[0], 'Item 1 should be "' + todos[0] + '"')
            .sendKeys('#new-todo', todos[1] + keys.enter)
            .assert.numberOfElements('#todo-list li', 2, 'There should be 2 todo items')
            .assert.text('#todo-list li:nth-child(1)', todos[0], 'Item 1 should be "' + todos[0] + '"')
            .assert.text('#todo-list li:nth-child(2)', todos[1], 'Item 2 should be "' + todos[1] + '"')
            .execute(function () {
                window.localStorage.clear();
            })
            .done();
    },

    'New todo - should clear text input field when an item is added': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .sendKeys('#new-todo', ' ' + keys.enter)
            .assert.doesntExist('#todo-list li', 'There should be no todos')
            .done();
    },

    'New todo - should append new items to the bottom of the list': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .sendKeys('#new-todo', todos[0] + keys.enter)
            .sendKeys('#new-todo', todos[1] + keys.enter)
            .sendKeys('#new-todo', todos[2] + keys.enter)
            .assert.text('#todo-list li:nth-child(1)', todos[0], 'Item 1 should be "' + todos[0] + '"')
            .assert.text('#todo-list li:nth-child(2)', todos[1], 'Item 2 should be "' + todos[1] + '"')
            .assert.text('#todo-list li:nth-child(3)', todos[2], 'Item 3 should be "' + todos[2] + '"')
            .execute(function () {
                window.localStorage.clear();
            })
            .done();
    },

    'New todo - should trim text input': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .sendKeys('#new-todo', '   ' + todos[0] + '  ' + keys.enter)
            .assert.text('#todo-list li:nth-child(1)', todos[0], 'Item 1 should be "' + todos[0] + '"')
            .execute(function () {
                window.localStorage.clear();
            })
            .done();
    },

    'New todo - should show #main and #footer when items added': function (test) {
        test
            .open(domain + '/vanilla-examples/vanillajs/')
            .sendKeys('#new-todo', todos[0] + keys.enter)
            .assert.visible('#main', '#main should be visible')
            .assert.visible('#footer', '#footer should be visible')
            .execute(function () {
                window.localStorage.clear();
            })
            .done();
    }

///////////////


        // // Append new todos at the bottom
        // test
        //     .sendKeys('#new-todo', todos[1] + keys.enter)
        //     .assert.numberOfElements('#todo-list li', 2, 'There should be 2 todo items')
        //     .assert.text('#todo-list li:nth-child(2)', todos[1], 'Item 2 should be "' + todos[1] + '"');

        // // Mark all as complete
        // test
        //     .click('#toggle-all')
        //     .assert.selected('#toggle-all')
        //     .assert.numberOfElements('#todo-list li.completed', 2, 'All items should be checked');

        // // Mark all as incomplete
        // test
        //     .click('#toggle-all')
        //     .assert.notSelected('#toggle-all')
        //     .assert.doesntExist('#todo-list li.completed', 'All items should be unchecked');

        // // Complete first item
        // test
        //     .log.dom('#todo-list')
        //     .click('#todo-list li:first-child .toggle')
        //     .assert.numberOfElements('#todo-list li.completed', 1, 'One items should be checked')
        //     .assert.notSelected('#toggle-all');

        // // Complete last item
        // test
        //     .click('#todo-list li:last-child .toggle')
        //     .assert.numberOfElements('#todo-list li.completed', 2, 'All items should be checked')
        //     .assert.selected('#toggle-all');

        // test.screenshot('debug.png');

        // test.done();
    // }
};
