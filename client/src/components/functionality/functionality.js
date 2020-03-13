import axios from "axios";
import jwt_decode from "jwt-decode";

const regex_pass_strong = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const regex_pass_medium = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
const regex_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const regex_alpha = /[^a-zA-Z]/g;
const regex_number = /[^0-9]/g;
const regex_alpha_space = /[^a-zA-Z ]/g;

export const updateBodyClass = className => {
    document.body.removeAttribute("class");
    document.body.className += className;
    //document.body.classList.add(className);
}
export const isValidDate = (day, month, year) => {
    var d = new Date(year, month - 1, day);
    if (d.getFullYear() == year && d.getMonth() == month - 1 && d.getDate() == day) {
        return true;
    }
    return false;
}
export const diff_years = (dt2, dt1) => {
    let diff = (dt2.getTime() - dt1.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    return Math.abs(Math.round(diff / 365.25));
}
export const getUser = () => {
    const token = localStorage.getItem('userToken');
    const USER = jwt_decode(token);
    return token ? USER : false;
}
export const getPageTitle = () => {
    const location = window.location;
    const path = location.pathname;
    console.log(path)
    let pageTitle = "";
    switch (path) {
        case "/profile":
            pageTitle = "Profile";
            break;
        case "/profile/update":
            pageTitle = "Update Profile";
            break;
    }
    return pageTitle;
}
export const showError = (field) => {
    field.nextSibling.style.display = "block";
}
export const hideError = (field) => {
    field.nextSibling.style.display = "none";
}
export const validate = formID => {
    const form = document.getElementById(formID);
    const fields = form.getElementsByClassName('required')
    const form_result = {
        isValid: true
    };

    for (let i = 0; i < fields.length; i++) {
        const field = fields[i]

        // Get filed info
        const fieldType = field.getAttribute('data-type').toLowerCase();
        const value = field.value.trim();
        const type = field.getAttribute('type').toLowerCase();
        const placeholder = field.getAttribute('placeholder');

        if (fieldType === "empty") {
            if (value == "" && value.length < 1) {
                type == "password" ? field.nextSibling.innerHTML = "Please enter a Password" : field.nextSibling.innerHTML = "Field should not be empty";
                showError(field)
                form_result.isValid = false;
            } else {
                hideError(field);
            }
        }

        if (fieldType == "date") {
            const split = value.split("/");
            if (value == "") {
                field.nextSibling.innerHTML = "Please enter a date";
                showError(field)
                form_result.isValid = false;
            } else if (split.length < 3) {
                field.nextSibling.innerHTML = "Please enter a valid date formet";
                showError(field)
                form_result.isValid = false;
            } else {
                const date = parseInt(split[0].trim());
                const month = parseInt(split[1].trim());
                const year = parseInt(split[2].trim());

                if (!isValidDate(date, month, year)) {
                    field.nextSibling.innerHTML = "Please enter a valid date";
                    showError(field)
                    form_result.isValid = false;
                } else {
                    hideError(field);
                }
            }
        }

        if (fieldType === "email") {
            if (value == "") {
                field.nextSibling.innerHTML = "Please enter a email";
                showError(field)
                form_result.isValid = false;
            } else if (!regex_email.test(String(value).toLowerCase())) {
                field.nextSibling.innerHTML = "Please enter a valid email";
                showError(field)
                form_result.isValid = false;
            } else {
                hideError(field);
            }
        }
        if (fieldType === "password") {
            if (value == "") {
                field.nextSibling.innerHTML = "Please enter a Password";
                showError(field)
                form_result.isValid = false;
            } else if (regex_pass_strong.test(value)) {
                hideError(field);
            } else if (regex_pass_medium.test(value)) {
                hideError(field);
            } else {
                field.nextSibling.innerHTML = "Password looks not strong enough";
                showError(field)
                form_result.isValid = false;
            }
        }

        if (fieldType === "alpha") {
            if (value == "") {
                field.nextSibling.innerHTML = placeholder + " should not be empty";
                showError(field)
                form_result.isValid = false;
            } else if (value.search(regex_alpha) != -1) {
                field.nextSibling.innerHTML = "Please enter a alphabets only";
                showError(field)
                form_result.isValid = false;
            } else if (value.length < 3) {
                field.nextSibling.innerHTML = placeholder + " should be minimum 3 character";
                showError(field)
                form_result.isValid = false;
            } else {
                hideError(field)
            }
        }
        if (fieldType === "alpha_space") {
            if (value == "") {
                field.nextSibling.innerHTML = placeholder + " should not be empty";
                showError(field)
                form_result.isValid = false;
            } else if (value.search(regex_alpha_space) != -1) {
                field.nextSibling.innerHTML = "Please enter a alphabets only";
                showError(field)
                form_result.isValid = false;
            } else if (value.length < 3) {
                field.nextSibling.innerHTML = placeholder + " should be minimum 3 character";
                showError(field)
                form_result.isValid = false;
            } else {
                hideError(field)
            }
        }
        if (fieldType === "number") {
            if (value == "") {
                field.nextSibling.innerHTML = placeholder + " should not be empty";
                showError(field)
                form_result.isValid = false;
            } else if (value.search(regex_number) != -1) {
                field.nextSibling.innerHTML = "Please enter a numbers only";
                showError(field)
                form_result.isValid = false;
            } else if (value.length < 3) {
                field.nextSibling.innerHTML = placeholder + " should be minimum 3 character";
                showError(field)
                form_result.isValid = false;
            } else {
                hideError(field)
            }
        }

    }

    return form_result

}


export const register = newUser => {
    return axios.post('users/register', {
        first_name: newUser.first_name,
        last_name: newUser.last_name,
        email: newUser.email,
        password: newUser.password
    })
        .then(res => {
            if (!res.data.error) {
                return res.data
            } else {
                return res.data
            }
        })
        .catch(err => {
            return err;
        })
}

export const update = profile => {
    return axios.post("/users/update", profile)
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.log('error: ' + err);
        })
}

export const login = user => {
    return axios.post("users/login", {
        email: user.email,
        password: user.password
    })
        .then(res => {
            if (!res.data.error) {
                localStorage.setItem('userToken', res.data);
            }
            return res.data;
        })
        .catch(err => {
            console.log('error: ' + err);
        })
}