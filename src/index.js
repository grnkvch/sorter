class Sorter {
  constructor() {
   this.store = [];
   this.cstmsp = false;
  }

  add(element) {
    this.store.push(element);
  }

  at(index) {
    return this.store[index];
  }

  get length() {
    return this.store.length;
  }

  toArray() {
    return this.store;
  }

  sort(indices) {
    function compareNumeric(a, b) {
      return a - b;
    }
    var sortlist = [];
    var num = true;
    indices.sort(compareNumeric);
    for (var i = 0; i<indices.length; i++) {
      sortlist[i] = this.store[indices[i]];
      if (isNaN(this.store[indices[i]])) num = false;
    }
    if (!this.cstmsp) {
    if (num) {
      sortlist.sort(compareNumeric);
    } else {
      sortlist.sort();
    }
    } else {
      sortlist.sort(this.cstmsp);
    }
    
    for (var i = 0; i<indices.length; i++) {
      this.store[indices[i]] = sortlist[i];
    }

  }

  setComparator(compareFunction) {
    if (compareFunction) this.cstmsp = compareFunction;
  }
}

module.exports = Sorter;