/**
 *  quick start
 *  验证mongoose对象属性的修改和添加
 */
const mongoose = require('mongoose');
const moment = require('moment');
mongoose.connect('mongodb://localhost/test');
let date = '2018-07' ;
let other = '2020-07';

const Cat = mongoose.model('Cat', { name: String,issue:Date });
const kitty = new Cat({ name: 'Zildjian',issue:moment(date).toDate() });
kitty.save().then(() => {
    console.log('meow')
    // 查询
    Cat.find().then(cats => {
        for (const cat of cats) {
            cat['name'] = 111 ;
            cat['issue'] = '111';
            cat['age']  = 12 ;
        }
        console.log(cats);
    })
});
