from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return {"message": "¡Hola, Mi mero compa si saleeeee!"}

if __name__ == '__main__':
    app.run(debug=True)

