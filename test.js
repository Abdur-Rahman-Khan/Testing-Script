import { sleep } from "k6";
import http from "k6/http";


export const options = {
	duration: '3s',
	vus: 1,
	maxRedirects: 0,
	// discardResponseBodies: true,
};

export let arr= ['https://bit.ly/3CWpQNt',
'https://bit.ly/3CSK22W',
'https://bit.ly/3MV7rVT',
'https://bit.ly/3KSnthy',
'https://bit.ly/3CMPh46',
'https://bit.ly/3qccXJQ',
'https://bit.ly/3Iit8f7',
'https://bit.ly/3KURfST',
'https://bit.ly/3KMZCje',
'https://bit.ly/3ieOTC4',
'https://bit.ly/36tbAjf',
'https://bit.ly/3Ikee8b',
'https://bit.ly/3tro7Nf',
'https://bit.ly/3KTFZG2',
'https://bit.ly/3tgmPEn',
'https://bit.ly/3ichhVl',
'https://bit.ly/3u4uDID',
'https://bit.ly/3CXfVY8',
'https://bit.ly/360obdU',
'https://bit.ly/3JlO31Y',
'https://bit.ly/3u8a6mm',
'https://bit.ly/3660wsr',
'https://bit.ly/37wwkHb',
'https://bit.ly/3qeI07X',
'https://bit.ly/3N19nMv']

function randomExponential(rate) {
	// http://en.wikipedia.org/wiki/Exponential_distribution#Generating_exponential_variates
	rate = rate || 1;
  
	var U = Math.random();
  
	return -Math.log(U)/rate;
  }

 export  function makeid(/*length = 5*/) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	result =
		characters.charAt(Math.floor(Math.random() * charactersLength)) +
		characters.charAt(Math.floor(Math.random() * charactersLength)) +
		characters.charAt(Math.floor(Math.random() * charactersLength)) +
		characters.charAt(Math.floor(Math.random() * charactersLength)) +
		characters.charAt(Math.floor(Math.random() * charactersLength)) +
		characters.charAt(Math.floor(Math.random() * charactersLength)) +
		characters.charAt(Math.floor(Math.random() * charactersLength));
	return result;
}

// https://bit.ly/

export default function () {
	// const res = http.get(`${arr[Math.floor(Math.random()*24)]}`)
	// const res = http.get(`https://bit.ly/${makeid()}`);
	const res = http.get(`https://bit.ly/3N2gAfA}`);
	console.log(res.body);
	// if(res.timings.duration !==0 )
	// 	console.log(Date.now(), res.timings.duration);
	sleep(randomExponential(2));
}


