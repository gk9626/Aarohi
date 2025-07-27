#!/usr/bin/env python3
"""
Development startup script for AAROHI
Runs both backend and frontend servers
"""

import subprocess
import sys
import os
import time
from pathlib import Path

def run_backend():
    """Start the Flask backend server"""
    backend_dir = Path("Backend")
    if not backend_dir.exists():
        print("❌ Backend directory not found!")
        return None
    
    print("🚀 Starting Flask backend server...")
    try:
        # Install Python dependencies if requirements.txt exists
        requirements_file = backend_dir / "requirements.txt"
        if requirements_file.exists():
            print("📦 Installing Python dependencies...")
            subprocess.run([sys.executable, "-m", "pip", "install", "-r", str(requirements_file)], 
                         cwd=backend_dir, check=True)
        
        # Start Flask server
        process = subprocess.Popen([sys.executable, "app.py"], cwd=backend_dir)
        print("✅ Backend server started on http://localhost:5000")
        return process
    except Exception as e:
        print(f"❌ Failed to start backend: {e}")
        return None

def run_frontend():
    """Start the React frontend server"""
    frontend_dir = Path("Frontend")
    if not frontend_dir.exists():
        print("❌ Frontend directory not found!")
        return None
    
    print("🚀 Starting React frontend server...")
    try:
        # Install Node.js dependencies if package.json exists
        package_file = frontend_dir / "package.json"
        if package_file.exists():
            print("📦 Installing Node.js dependencies...")
            subprocess.run(["npm", "install"], cwd=frontend_dir, check=True)
        
        # Start React development server
        process = subprocess.Popen(["npm", "run", "dev"], cwd=frontend_dir)
        print("✅ Frontend server started on http://localhost:5173")
        return process
    except Exception as e:
        print(f"❌ Failed to start frontend: {e}")
        return None

def main():
    print("🌟 Starting AAROHI Development Environment")
    print("=" * 50)
    
    # Start backend
    backend_process = run_backend()
    if not backend_process:
        print("❌ Backend failed to start. Exiting.")
        return
    
    # Wait a moment for backend to initialize
    time.sleep(2)
    
    # Start frontend
    frontend_process = run_frontend()
    if not frontend_process:
        print("❌ Frontend failed to start. Exiting.")
        backend_process.terminate()
        return
    
    print("\n🎉 Both servers are running!")
    print("📱 Frontend: http://localhost:5173")
    print("🔧 Backend API: http://localhost:5000")
    print("\nPress Ctrl+C to stop both servers")
    
    try:
        # Keep the script running
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n🛑 Stopping servers...")
        if backend_process:
            backend_process.terminate()
        if frontend_process:
            frontend_process.terminate()
        print("✅ Servers stopped")

if __name__ == "__main__":
    main() 