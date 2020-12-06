var domain = 'https://rsj6kkbkq3.execute-api.eu-west-1.amazonaws.com';
var env = 'Stage';

var endpoints = {
    contact: 'contact',
    registration: 'registration',
    resolve(key) {
        return domain + '/' + env + '/' + this[key];
    }
}

function submit(endpoint, data, cbSuccess, cbError) {
    var xhr = new XMLHttpRequest();

    xhr.open('POST', endpoint);

    xhr.send(JSON.stringify(data));

    xhr.addEventListener('load', function() {
        cbSuccess.call(xhr, xhr.response);
    });

    xhr.addEventListener('error', function() {
        cbSuccess.call(xhr, xhr.error);
    });
}

function retrieveFormData(instance) {
    var fields = instance.querySelectorAll('[name]');
    var id = Date.now();

    var formData = {
        id: String(id)
    };

    for (var i = 0; i < fields.length; i++) {
        var f = fields[i];
        var name = f.getAttribute('name');
        var val = f.value;

        formData[name] = val.trim();
    }

    return formData;
}

export function handleRegisterForm(instance, succeccCb, errorCb) {
    var data = retrieveFormData(instance);

    data.message = 'Name ' + data.name + '; ' + data.course;

    delete data.name;
    delete data.course;

    submit(endpoints.resolve('registration'), data, succeccCb, errorCb);
}

export function handleContactForm(instance, succeccCb, errorCb) {
    var data = retrieveFormData(instance);

    var message = data.message;

    data.message = 'Name: ' + data.name + '; Message: ' + message;

    delete data.name;

    submit(endpoints.resolve('contact'), data, succeccCb, errorCb);
}

