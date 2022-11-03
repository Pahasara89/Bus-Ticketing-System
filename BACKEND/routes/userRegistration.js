const router = require("express").Router();
const { User, validate } = require("../models/user");
const bcrypt = require("bcrypt");
const alert = require('alert');


router.post("/registration", async (req, res) => {
	try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User Registration successfully" });
	} catch (error) {
		alert('Product already exists');
        console.log(error);
	}
});

router.route("/view-user").get((req, res) => {
	User.find().then((users) => {
		res.json(users);
	  })
	  .catch((err) => {
		console.log(err);
	  });
  });


module.exports = router;