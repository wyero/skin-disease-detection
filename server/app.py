from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
import os
from PIL import Image
from werkzeug.utils import secure_filename
from tensorflow.keras.models import load_model

app = Flask(__name__)

CORS(app)

app.config['UPLOAD_EXTENSIONS'] = ['.jpg', '.JPG', 'png', 'PNG', 'jpeg', 'JPEG', 'gif', 'tiff', 'webp', 'jfif']
app.config['UPLOAD_PATH'] = './image'

model = None

skin_disease_classes = ['Atopic Dermatitis', 'Eczema', 'Herpes', 'Molluscum', 'Varicella', 'Vitiligo']

@app.route('/api/predict', methods=["POST"])
def apiDeteksi():
    hasil_prediksi = '(none)'
    gambar_prediksi = '(none)'

    uploaded_file = request.files['file']
    filename = secure_filename(uploaded_file.filename)

    if filename != '':
        file_ext = os.path.splitext(filename)[1]
        gambar_prediksi = '/image/' + filename

        if file_ext in app.config['UPLOAD_EXTENSIONS']:
            uploaded_file.save(os.path.join(app.config['UPLOAD_PATH'], filename))
            test_image = Image.open('.' + gambar_prediksi)
            test_image_resized = test_image.resize((224, 224))
            image_array = np.array(test_image_resized)
            test_image_x = (image_array / 255) - 0.5
            test_image_x = np.array([test_image_x])
            y_pred_test_single = model.predict(test_image_x)
            y_pred_test_classes_single = np.argmax(y_pred_test_single, axis=1)
            hasil_prediksi = skin_disease_classes[y_pred_test_classes_single[0]]

        response =  jsonify({
            "prediksi": hasil_prediksi,
            "gambar_prediksi": gambar_prediksi
        })
        return response
    
    response = jsonify({
        "prediksi": hasil_prediksi,
        "gambar_prediksi": gambar_prediksi
    })
    return response

if __name__ == '__main__':
    model = load_model("model_penyakitkulit_tf_mobilenet.h5")

    app.run(host="0.0.0.0", port=5000, debug=True)