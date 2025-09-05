from flask import Flask, jsonify, request
import json

app = Flask(__name__)

# função auxiliar para ler JSON
def ler_json():
    with open("data.json", "r") as f:
        return json.load(f)

# função auxiliar para escrever JSON
def escrever_json(data):
    with open("data.json", "w") as f:
        json.dump(data, f, indent=2)

# rota para pegar o status
@app.route("/status", methods=["GET"])
def get_status():
    data = ler_json()
    return jsonify(data)

# rota para mudar status para true
@app.route("/set-status", methods=["POST"])
def set_status():
    data = ler_json()
    data["status"] = True
    escrever_json(data)
    return jsonify({"message": "Status atualizado!", "data": data})

if __name__ == "__main__":
    app.run(debug=True, port=5000)