from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes and origins.

# A dictionary to hold the visibility state for each widget.
widget_visibility = {
    'Weather': False,
    'News': False,
    'Calendar': False,
    'Spotify': False
}

@app.route('/api/toggle-widget', methods=['POST', 'OPTIONS'])
def toggle_widget():
    if request.method == 'OPTIONS':  # CORS preflight
        return _build_cors_preflight_response()
    elif request.method == 'POST':  # Actual request following the preflight
        data = request.json
        widget_name = data['widgetName']
        widget_visibility[widget_name] = data['newVisibility']
        return jsonify({widget_name: widget_visibility[widget_name]})

@app.route('/api/widget-visibility', methods=['GET'])
def get_widget_visibility():
    # Return the visibility status of all widgets
    return jsonify(widget_visibility)

def _build_cors_preflight_response():
    response = jsonify({})
    response.headers.add("Access-Control-Allow-Origin", "*")
    response.headers.add('Access-Control-Allow-Headers', '*')
    response.headers.add('Access-Control-Allow-Methods', '*')
    return response

if __name__ == '__main__':
    app.run(debug=True, port=1023)
