function isValid(pForm) {
	const uname = pForm.username.value;
	const pass = pForm.password.value;

	let e1 = document.getElementById("err1");
	let e2 = document.getElementById("err2");

	e1.innerHTML = "";
	e2.innerHTML = "";

	let flag = true;

	if (uname === "") {
		e1.innerHTML = "Please provide username";
		flag = false;
	}
	if (pass === "") {
		e2.innerHTML = "Please provide password";
		flag = false;
	}

	return flag;
}