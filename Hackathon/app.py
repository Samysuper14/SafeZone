from flask import Flask, render_template, request, jsonify
import pandas as pd
import json

app = Flask(__name__)


csv_file = 'static/files/Criminalidad_NL.csv'
df = pd.read_csv(csv_file)
columns = df.keys().to_list()[1:]
promedios = []
for column in columns:
    promedios.append(round(df[column].mean(), 2))

#perrito = 'peperoni'

@app.route('/')
def index():
    return render_template('index.html', municipios=columns, promedios=promedios)#, dogo=perrito)

@app.route('/api/promedio', methods = ['GET'])
def promedio():

    columns = df.keys().to_list()[1:]
    promedios = []
    for column in columns:
        promedios.append(df[column].mean())
    
    return jsonify({'promedios': promedios})

@app.route('/api/coords/<float:latitude>,<float:longitude>',  methods = ['POST'])
def coords(latitude, longitude):
    
    print(latitude, longitude)

    return jsonify({'coords': [latitude, longitude]})

if __name__ == '__main__':
    app.run(debug=True)
    
    #with open(csv_file, 'r') as file:
    #    reader = csv.reader(file)

    #    columnas = []
    #    for i, row in enumerate(reader):
    #        if i == 0:
    #            columnas = [0] * len(row)
    #        else:
    ##            for j, val in enumerate(row):
    #                        columnas[j] += float(val)

    #    promedios = [columna / (i - 1) for columna in columnas]