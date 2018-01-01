var dateTime = require('node-datetime')
module.exports = function (string, sNewYear) {
	var regex = /Copyright\s\(c\)\s(([\d]{4})[\s-_]*([\d]{4})\s|([\d]{4})\s)/g
	var copyright = 'Copyright (c)'
	var newYear = sNewYear | (dateTime.create()).format('Y')
	return string.replace(regex, function (match, keyA, keyB) {
		if (keyB == undefined) {
			return `${copyright} ${keyA}- ${newYear} `
		} else {
			return `${copyright} ${keyB} - ${newYear} `
		}
	})
}