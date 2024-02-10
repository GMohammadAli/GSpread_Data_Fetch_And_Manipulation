import gspread
import json
# providing service account credentials
gc = gspread.service_account(filename='./GoogleAPICredentials/massive-physics-361916-7766f9ba508f.json')
# open the spreadsheet
sh = gc.open("Test_Script_For_Spreadsheet_Data_Filtering")
# get the required worksheet
worksheet = sh.worksheet("Brand_Names")

print("Worksheet obj", worksheet)

col_values = worksheet.col_values(1)

print("col values", col_values)

# Define the filename for the JSON file
filename = "spreadsheetData.json"

# Serialize the dictionary into JSON format
json_data = json.dumps(col_values, indent=4)

# Write the JSON data to a file
with open(filename, "w") as file:
    file.write(json_data)

print(f"JSON data has been written to '{filename}' successfully.")