function doPost(e) {
    var sheet = SpreadsheetApp.openById('YOUR_SHEET_ID').getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.firstName, data.surname, data.phoneNumber, data.email, data.state]);
    return ContentService.createTextOutput(JSON.stringify({result: 'success'})).setMimeType(ContentService.MimeType.JSON);
}

