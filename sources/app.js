const jsonBlobURL='https://jsonblob.com/api/jsonBlob/320e818f-6753-11eb-9c90-47434578f6ad';

function findGetParameter(parameterName){
	var result = null,
	tmp = [];
	location.search
	.substr(1)
	.split("&")
	.forEach(function (item) {
	tmp = item.split("=");
	if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
	});
	return result;
}