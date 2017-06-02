function decode(str){
  return str.split(',').map((x)=>{
    return String.fromCharCode(parseInt(x, 16));
  }).join('')
}

function encode(str){
  return str.split('').map(x=>x.codePointAt(0).toString(16)).join(',');
}

function encodeArc(str) {
  let encoded = encode(str).split(',');
  console.log(encoded);


}

module.exports = {decode,encode,encodeArc}
