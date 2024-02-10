#  GSpread_Data_Fetch_And_Manipulation

Project Setup --> 

1] npm i 
2] Set up Google api credentials for Using Service Account by following this docs of gspread, https://docs.gspread.org/en/latest/oauth2.html#enable-api-access
3] Add the json file at the this position, src/utils/GoogleAPICredentials/your-service-account-email.json
4] Create your own spreadsheet and share editor access with your above service account (edit the worksheet and spreadsheet names in py file accordingly)
4] Run the python script, [text](src/utils/spreadsheetDataFetchScript.py)
5] The json file ([text](src/utils/spreadsheetData.json)) will have the data of the first column of the your spreadsheet
6] Run npm run dev