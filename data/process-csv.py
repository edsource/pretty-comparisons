import json
import csv
data = []
control = []
i = 0
dataName = 'data'
controlName = 'control'

#### IMPORT CSV ####
with open(dataName + '.csv', 'rb') as csvFile:
	temp = csv.reader(csvFile, delimiter=',');
	for row in temp:
		data.insert(i, row)
		i += 1

#### EXPORT JSON ####
with open(dataName + '.json', "w") as file:
	json.dump(data, file)
	
#### IMPORT CSV ####
with open(controlName + '.csv', 'rb') as csvFile:
	temp = csv.reader(csvFile, delimiter=',');
	for row in temp:
		control.insert(i, row)
		i += 1

#### EXPORT JSON ####
with open(controlName + '.json', "w") as file:
	json.dump(control, file)