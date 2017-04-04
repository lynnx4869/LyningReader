from flask import Flask, jsonify
app = Flask(__name__, static_url_path='')

@app.route('/', methods=['GET'])
def index():
    return app.send_static_file('index.html')

if __name__ == '__main__':
    app.debug = True
    app.run()