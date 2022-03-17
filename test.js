import { sleep } from "k6";
import http from "k6/http";


export const options = {
	duration: '30m',
	vus: 1,
	maxRedirects: 0,
	// discardResponseBodies: true,
};

function randomExponential(rate) {
	// http://en.wikipedia.org/wiki/Exponential_distribution#Generating_exponential_variates
	rate = rate || 1;
  
	var U = Math.random();
  
	return -Math.log(U)/rate;
  }


export default function () {
	const res = http.get(`${arr[Math.floor(Math.random()*24)]}`)
	// console.log(res.body);
	if(res.timings.duration !==0 )
		console.log(Date.now(), res.timings.duration);
	sleep(randomExponential(2));
}


