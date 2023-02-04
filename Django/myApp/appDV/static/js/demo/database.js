const mysql = require('mysql2');

// 이외에도 createConnection을 통해서도 연결이 가능하다고 합니다.
// createPool과의 차이는 단일 연결이냐, 복수 연결이냐의 차이입니다.

// 단일 연결의 경우 하나가 연결되면, 다른 유저는 연결이 불가능합니다. 유저마다 연결하고 끊고 연결하기를 반복하기 때문에 시간과 비용이 많이 소요됩니다.
// 복합 연결은 연결 제한 수를 정할 수 있습니다. 너무나 많은 연결은 서버 메모리를 크게 소모하기 때문에 조심하는 게 좋다고 합니다.
const pool = mysql.createPool({
  host: 'localhost',
  user: 'ROOT',
  database: 'qwer_db',
  password: 'alsgh5600',
});

// 꼭 promise 형태로 반환하는 게 좋습니다. 예외처리를 한번에 끝낼 수 있거든요.
// promise 화 하지 않는 경우 callback 마다 예외처리를 입력해주어야 합니다.
// 저렇게 써도 좋고, util을 통해 promisify를 써도 좋고, 아니면 async/await를 써도 좋습니다. 다만 꼭 promise 형태로 반환하는 게 중요합니다.
module.exports = pool.promise();


// model (Class 생성)
const db = require('./utils/database.js')

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
// INSERT INTO table-name : 지정 column-name 순 번으로, row-data를 생성합니다.
    return db.execute(
      'INSERT INTO products (title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
      [this.title, this.price, this.imageUrl, this.description]
    );
  }
// SELECT column-name : 데이터 조회에 사용됩니다.
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
// WHRER  : 데이터에 대해 조건을 겁니다.
  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};