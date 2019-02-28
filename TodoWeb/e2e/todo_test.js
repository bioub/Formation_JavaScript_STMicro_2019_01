/// <reference path="../steps.d.ts" />

Feature('Todo List');

Scenario('Todo Creation', (I) => {
  I.amOnPage('/');
  I.fillField('.todo-text', 'Ma nouvelle todo');
  I.click('.btn-add');
  I.seeElement('.todo-container > div');
});
