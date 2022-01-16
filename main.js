// Function to change button which swaps
// Ciphertext to plaintext
// plaintext to ciphertext 
function change(clicked_id) {
	var btn1 = document.getElementById('plain_to_cipher')
	var btn2 = document.getElementById('cipher_to_plain')
	if(clicked_id == 1) {
		if(btn1.style.color == '#000') {
			return;
		} else {
			document.getElementById('plain_to_cipher').className = "btn btn-success"
			document.getElementById('cipher_to_plain').className = "btn btn-outline-success"
			document.getElementById('cipher').setAttribute("disabled", true)
			document.getElementById('plain').removeAttribute("disabled")
		}
	} else {
		if(btn2.style.color == '#000') {
			return;
		} else {
			document.getElementById('plain_to_cipher').className = "btn btn-outline-success"
			document.getElementById('cipher_to_plain').className = "btn btn-success"
			document.getElementById('plain').setAttribute("disabled", true)
			document.getElementById('cipher').removeAttribute("disabled")
		}
	}
}


// Function to validate either a character is a alphabet or space
function lettersValidate(key) {
    var keycode = (key.which) ? key.which : key.keyCode;
    if((keycode > 64 && keycode < 91) || (keycode > 96 && keycode < 123) || keycode == 32) {     
		return true;    
    } else {
		return false;
    }       
}

// Function to handle when Key changes
function onChangeKey() {
	var btn1 = document.getElementById('plain_to_cipher')
	var btn2 = document.getElementById('cipher_to_plain')
	if(btn1.style.color == '#000') {
		decoding()
	} else {
		encoding()
	}
}

// Function to Encode the string using Mathematical Operations
function encoding() {
	var key = parseInt(document.getElementById("key").value)
	var text = document.getElementById("plain").value

	var cipher = ""
	for(let i = 0; i < text.length; i++) {
		if(text[i] == " ") cipher += " ";
		else {
			var ch = text[i].charCodeAt(0) + key, curr_ch = text[i].charCodeAt(0);
			if(text[i] >= 'a' && text[i] <= 'z') {
				if(ch > 122) {
					cipher += String.fromCharCode(key + curr_ch - 26);
				} else {
					cipher += String.fromCharCode(ch)
				}
			} else {
				if(ch > 90) {
					cipher += String.fromCharCode(key + curr_ch - 26);
				} else {
					cipher += String.fromCharCode(ch)
				}
			}
		}
	}

	document.getElementById("cipher").value = cipher
}

// Function to Decode the string using Mathematical Operations
function decoding() {
	var key = parseInt(document.getElementById("key").value)
	var cipher_text = document.getElementById("cipher").value

	var plain = ""
	for(let i = 0; i < cipher_text.length; i++) {
		if(cipher_text[i] == " ") plain += " ";
		else {
			var ch = cipher_text[i].charCodeAt(0) - key, curr_ch = cipher_text[i].charCodeAt(0);
			console.log(curr_ch, key)
			if(cipher_text[i] >= 'a' && cipher_text[i] <= 'z') {
				if(ch < 97) {
					plain += String.fromCharCode(curr_ch - key + 26);
				} else {
					plain += String.fromCharCode(ch)
				}
			} else {
				if(ch < 65) {
					plain += String.fromCharCode(curr_ch - key + 26);
				} else {
					plain += String.fromCharCode(ch)
				}
			}
		}
	}

	document.getElementById("plain").value = plain
}