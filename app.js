let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');
var session = require('express-session')
let app = express();
let mongoose = require('mongoose');
var cookieParser = require('cookie-parser')

const env = require('./env');


let port = process.env.port || env.PORT;
const secret = process.env.NODE_ENV === 'production'

app.use(cookieParser())
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
	extended: true
}))


// Disabled session
// app.use(session({
// 	name: env.SESS_NAME,
// 	secret: env.SECRET_KEY,
// 	resave: true,
// 	saveUninitialized: true,
// 	cookie: {
// 		sameSite: false,
// 		secure: secret,
// 		maxAge: env.SESS_LIFE,
// 		httpOnly: false
// 	}
// }))

const MongoURI = "mongodb://localhost:27017/rage-live";

mongoose.connect(MongoURI, { useNewUrlParser: true })
	.then(() => console.log('MongoDB is now connected'))
	.catch(err => console.log(err));

let Users = require('./routes/Users')


// Disabled
// app.use((req, res, next) => {
// 	const { userId } = req.session;
// 	console.log(userId);
// 	if (userId) {
// 		res.locals.user = User.findOne({ _id: userId })
// 	}
// 	next();
// })

app.use('/users', Users);


app.listen(port, () => {
	console.log(`Server is running on the port ${port}`);
});