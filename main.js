// Function to Encode the string using Mathematical Operations
function encoding() {
	var text = document.getElementById("plain").value
	
	// Initialize the ciphertext
	let cipher = ""
	for(let i = 0; i < text.length; i++) {
		// If current character is a space then simply add it.
		if(text[i] == " ") cipher += " ";
		else {
			// If current character is Lowercase Alphabet
			if(text[i] >= 'a' && text[i] <= 'z') {
	            // the function will act as a linear mapping between ascii values
	            // such as a(97) -> z(122) and z(122) -> a(97)
				cipher += String.fromCharCode(219 - text.charCodeAt(i));
			} else {
				// If current character is Uppercase Alphabet
				
	            // the function will act as a linear mapping between ascii values
	            // such as A(65) -> Z(90) and Z(90) -> A(65)
				cipher += String.fromCharCode(155 - text.charCodeAt(i));
			}
		}
	}
	// Display the Cipher in screen
	document.getElementById("cipher").value = cipher
}

// Function to Decode the string using Mathematical Operations
function decoding() {
	var cipher_text = document.getElementById("cipher").value
	
	// Initialize the plaintext
	var plain = ""
	for(let i = 0; i < cipher_text.length; i++) {
		// If current character is a space then simply add it.
		if(cipher_text[i] == " ") plain += " ";
		else {
			// If current character is Lowercase Alphabet
			if(cipher_text[i] >= 'a' && cipher_text[i] <= 'z') {
				// the function will act as a linear mapping between ascii values
	            // such as a(97) -> z(122) and z(122) -> a(97)
				plain += String.fromCharCode(219 - cipher_text.charCodeAt(i));
			} else {
				// If current character is Uppercase Alphabet

				// the function will act as a linear mapping between ascii values
	            // such as A(65) -> Z(90) and Z(90) -> A(65)
				plain += String.fromCharCode(155 - cipher_text.charCodeAt(i));
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
