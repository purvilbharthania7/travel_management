import express from 'express';
import cors from 'cors';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';

const app=express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/');

const connection=mongoose.connection;

connection.once('open', ()=>{
    console.log('MOngo DB connection established succesfully');
});
const Schema = mongoose.Schema;
const issue=new Schema({
    username:{
        type:String
    },
    password:{
        type:String
    },
    email: {
        type: String
    },
	phone_no:{
		type:Number
	}
});
const iss = mongoose.model('issue',issue);

router.route('/list/').get((req,res)=>{
   
    iss.find((err,issue) => {
        if(err)
            console.log(err);
        else
            res.json(issue);
		console.log(issue);
    });
});

router.route('/list/:id').get((req,res)=>{
   
    iss.findById(req.params.id,(err,issue) => {
        if(err)
            console.log(err);
        else
            res.json(issue);
    });
});

router.post('/login',function(req,res){
    const userInfo=req.body;
    if(!userInfo.username || !userInfo.password){
        res.json({status:false,msg:'Field All Date Properly'});
        console.log('test1');
        res.end();
    }else{
        iss.find({username: userInfo.username},function(err, user){
            if(user.length <= 0){
                res.json({status:false,msg:'Wrong Username and Password'});
                res.end();
            }
            else{
                res.json({status:true,msg:'Successfully Logged In',user: user});
                res.end();
            }
        });
    }

});

router.post('/postuser', function (req, res) {
    const userInfo = req.body;
    if (!userInfo.email || !userInfo.username || !userInfo.phone_no || !userInfo.password) {
        res.json({status: false, msg: 'Write the valid inputs:'});
        
        console.log(userInfo.username + '|' + userInfo.password);
        res.end();
    } else {
        let count = 0;
        iss.find({username: userInfo.username}, function (err, users) {
            count = users.length;
            console.log(count);
            if (count <= 0) {
                const newUser = new iss({
                    username: userInfo.username,
                    email: userInfo.email,
                    phone_no: userInfo.phone_no,
                    password: userInfo.password
                });
                newUser.save(function (err, data) {
                    if (err) {
                        res.json({status: false, msg: 'Something went wrong'});
                        console.log('l2');
                        res.end();
                    } else {
                        res.json({status: true, msg: 'Successfully Signup'});
                        console.log('l20');
                        res.end();
                    }
                });
            } else {
                res.json({status: false, msg: 'User already exists'});
                console.log('false-l3');
                res.end();
            }
        });
        console.log('count is here' + count);

    }
});


router.route('/list/delete/:id').get((req, res) => {
    menu.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
        if (err)
            res.json(err);
        else
            res.json('Removed successfully');
    });
});

app.use('/',router)

app.listen(4000,() => console.log('Express Server in port 4000')); 
