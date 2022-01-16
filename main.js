// Function to Encode the string using Mathematical Operations
function encoding() {
	var key = parseInt(document.getElementById("key").value)
	var text = document.getElementById("plain").value
	
	// Initialize the ciphertext
	var cipher = ""
	for(let i = 0; i < text.length; i++) {
		// If current character is a space then simply add it.
		if(text[i] == " ") cipher += " ";
		else {
			// Get the ASCII value of current character
			var ch = text[i].charCodeAt(0) + key, curr_ch = text[i].charCodeAt(0);
			
			// If current character is Lowercase Alphabet
			if(text[i] >= 'a' && text[i] <= 'z') {
				// If the ASCII value exceeds the z then, we have to run the cycle of a to z again by subtract 26,
				// otherwise add the key and get character from ASCII and add to cipher
				if(ch > 122) {
					cipher += String.fromCharCode(key + curr_ch - 26);
				} else {
					cipher += String.fromCharCode(ch)
				}
			} else {
				// If current character is Uppercase Alphabet
				
				// If the ASCII value exceeds the Z then, we have to run the cycle of A to Z again by subtract 26,
				// otherwise add the key and get character from ASCII and add to cipher
				if(ch > 90) {
					cipher += String.fromCharCode(key + curr_ch - 26);
				} else {
					cipher += String.fromCharCode(ch)
				}
			}
		}
	}
	
	// Display the Cipher in screen
	document.getElementById("cipher").value = cipher
}

// Function to Decode the string using Mathematical Operations
function decoding() {
	var key = parseInt(document.getElementById("key").value)
	var cipher_text = document.getElementById("cipher").value
	
	// Initialize the plaintext
	var plain = ""
	for(let i = 0; i < cipher_text.length; i++) {
		// If current character is a space then simply add it.
		if(cipher_text[i] == " ") plain += " ";
		else {
			// Get the ASCII value of current character
			var ch = cipher_text[i].charCodeAt(0) - key, curr_ch = cipher_text[i].charCodeAt(0);
			
			// If current character is Lowercase Alphabet
			if(cipher_text[i] >= 'a' && cipher_text[i] <= 'z') {
				// If the ASCII value less than a then, we have to run the cycle of z to a again by adding 26,
				// otherwise subtract the key and get character from ASCII and add to cipher
				if(ch < 97) {
					plain += String.fromCharCode(curr_ch - key + 26);
				} else {
					plain += String.fromCharCode(ch)
				}
			} else {
				// If current character is Uppercase Alphabet

				// If the ASCII value less than A then, we have to run the cycle of Z to A again by adding 26,
				// otherwise subtract the key and get character from ASCII and add to cipher
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
