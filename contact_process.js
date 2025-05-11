const to = "rockybd1995@gmail.com";
const from = request.email; // Assuming request is an object containing the data
const name = request.name;
const subject = request.subject;
const number = request.number;
const cmessage = request.message;

const headers = {
    "From": from,
    "Reply-To": from,
    "MIME-Version": "1.0",
    "Content-Type": "text/html; charset=ISO-8859-1"
};

const emailSubject = "You have a message from your Bitmap Photography.";

const logo = 'img/logo.png';
const link = '#';

let body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
body += "<table style='width: 100%;'>";
body += "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
body += `<a href='${link}'><img src='${logo}' alt=''></a><br><br>`;
body += "</td></tr></thead><tbody><tr>";
body += `<td style='border:none;'><strong>Name:</strong> ${name}</td>`;
body += `<td style='border:none;'><strong>Email:</strong> ${from}</td>`;
body += "</tr>";
body += `<tr><td style='border:none;'><strong>Subject:</strong> ${subject}</td></tr>`;
body += "<tr><td></td></tr>";
body += `<tr><td colspan='2' style='border:none;'>${cmessage}</td></tr>`;
body += "</tbody></table>";
body += "</body></html>";

// Function to send email (you would need to implement this)
sendEmail(to, emailSubject, body, headers);

