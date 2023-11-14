// 151. Reverse Words in a String
var reverseWords = function(s) {
	const splitWords = s.split(' ')
	const filtered = splitWords.filter(char => char !== "")
	const reversed = filtered.reverse()
	return reversed.join(' ')
};

s = "a good   example"
s2 = "  hello world  "
s3 = "the sky is blue"

let result = reverseWords(s)
console.log(result)

result = reverseWords(s2)
console.log(result)

result = reverseWords(s3)
console.log(result)