from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv

def create_app():
    load_dotenv()
    app = Flask(__name__)
    CORS(app, origins=["http://localhost:3000"], supports_credentials=True)

    from .routes.education import education_bp
    from .routes.health import health_bp
    from .routes.mental_health import mental_bp
    from .routes.stories import stories_bp
    from .routes.emergency import emergency_bp

    app.register_blueprint(education_bp)
    app.register_blueprint(health_bp)
    app.register_blueprint(mental_bp)
    app.register_blueprint(stories_bp)
    app.register_blueprint(emergency_bp)

    return app
