import Ember from 'ember';
import { gtKey } from 'ember-awesome-macros';
import { module, test } from 'qunit';

const {
  get, setProperties
} = Ember;

const Obj = Ember.Object.extend({
  test: gtKey('source1', 'source2')
});

let obj;

module('Unit | Macro | gt key', {
  beforeEach() {
    obj = Obj.create();

    // compute initial value
    // to test recomputes
    get(obj, 'test');
  }
});

test('less than returns false', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source1: 1,
    source2: 2
  });

  assert.strictEqual(get(obj, 'test'), false);
});

test('equal returns false', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source1: 2,
    source2: 2
  });

  assert.strictEqual(get(obj, 'test'), false);
});

test('greater than returns true', function(assert) {
  assert.expect(1);

  setProperties(obj, {
    source1: 2,
    source2: 1
  });

  assert.strictEqual(get(obj, 'test'), true);
});