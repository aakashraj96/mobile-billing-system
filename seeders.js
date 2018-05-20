const models = require('./models');

models.users.destroy({
  where: {},
  truncate: true
}).then(()=>{
  models.users.create({
    name: 'aakash',
    email: 'aakash@gmail.com',
    password: 'abcd',
    dob: '1996-08-14',
    mobile: '999999999'
  });
  models.users.create({
    name: 'vignesh',
    email: 'vignesh@gmail.com',
    password: 'abcd',
    dob: '1996-08-14',
    mobile: '999999999'
  });
});

models.transactions.destroy({
  where: {},
  truncate: true
}).then(()=>{
  models.transactions.create({
    plan: "red399",
    amount: "419",
    paydate: "2018-04-01",
    email: 'vignesh@gmail.com'
  });
  models.transactions.create({
    plan: "jio299",
    amount: "300",
    paydate: "2018-04-01",
    email: 'aakash@gmail.com'
  });
  models.transactions.create({
    plan: "jio299",
    amount: "315",
    paydate: "2018-05-01",
    email: 'aakash@gmail.com'
  });
});
