class BingoNumber {
  constructor(num) {
    this.ltr = BingoNumber.letterFor(num);
    this.num = num;
  }

  toString() {
    return this.ltr + this.num.toString();
  }

  static letterFor(num) {
    return BingoGame.letters()[Math.floor((num - 1) / 15)]
  }
}

class BingoGame {
  static getNumbers(letters) {
    return letters.reduce(function (result, letter) {
      var start = (BingoGame.letters().indexOf(letter) * 15) + 1;
      for (var i = 0; i < 15; i++) {
        var num = new BingoNumber(i + start);
        result.push(num);
      };
      return result;
    }, []);
  }

  static letters() { return ["B", "I", "N", "G", "0"]; }

  constructor (letters) {
    this.numbers = BingoGame.getNumbers(letters);
    this.currentIndex = 0;
    this.called = [];
  }

  back() {
    if (this.currentIndex > 0) { this.currentIndex -= 1; }
    return this.current();
  }

  current() {
    return this.numbers[this.currentIndex];
  }

  forward() {
    if (this.currentIndex < this.numbers.length) { this.currentIndex += 1; }
    return this.current();
  }

  next() {
    if (this.called.length < this.numbers.length) { this.currentIndex = this.called.length; }
    var num = this.current();
    this.called.push(num);
    return num;
  }

  // shuffle() source: http://bost.ocks.org/mike/shuffle/
  shuffle() {
    var m = this.numbers.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.numbers[m];
      this.numbers[m] = this.numbers[i];
      this.numbers[i] = t;
    }
    return this.numbers;
  }
}

//$(window).keyup(function(k) {
//  if (k.which == 32) {
//    /* 32 is space */
//  } else if (k.which == 13) {
//    /* 13 is enter */
//  }
//});
