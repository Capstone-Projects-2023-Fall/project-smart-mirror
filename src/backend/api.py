from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This enables CORS for all domains; in production, you should limit this to known origins.

# This is a global variable to hold the state. In a production app, you'd likely use a database.
is_widget_visible = True

@app.route('/toggle-widget', methods=['GET', 'POST'])
def toggle_widget():
    global is_widget_visible
    if request.method == 'POST':
        # Toggle the visibility state
        is_widget_visible = not is_widget_visible
    return jsonify({'isWidgetVisible': is_widget_visible})

if __name__ == '__main__':
    app.run(debug=True, port=4000)
