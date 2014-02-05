module.exports = {
    'TodoMVC - VanillaJS': function (test) {
        test
            .open('http://localhost:12345/vanilla-examples/vanillajs/')
            .assert.numberOfElements('#todo-list li', 0, 'There should be no todos')
            .assert.notVisible('#main', '#main should be hidden')
            .assert.notVisible('#footer', '#footer should be hidden')
            .done();
    }
};
