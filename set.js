
function Set(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this.insertedValues = [];
}

Set.prototype.has = function(value) {
  return !!this._storage[value];
};


Set.prototype.insert = function(value) {
  if (this.has(value)) {
    return 'Set already has value';
  }
  else if (this._count < this._capacity) {
    this._storage[value] = value;
    this.insertedValues[this._count] = value;
    this._count++;
    return this;
  }
  return 'Max capacity already reached. Remove element before adding a new one.'
};

Set.prototype.remove = function(value) {
  if (this._storage[value]) {
    delete this._storage[value];
    var temp = this.insertedValues.indexOf(value);
    var last = this.insertedValues[this.insertedValues.length -1];
    this.insertedValues[this.insertedValues.length -1] = this.insertedValues[temp];
    this.insertedValues[temp] = last;
    this.insertedValues.pop();
    this._count--;
    return true;
  }
  return false;
};

Set.prototype.getRandomElement = function() {
  return this.insertedValues[Math.floor(Math.random() * this.insertedValues.length)];
};

mySet = new Set(150);
mySet.insert(3);
mySet.insert(23);
mySet.insert(5);
mySet.insert(11);
mySet.remove(23);
mySet.getRandomElement();
