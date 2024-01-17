# backend/main.py

from fastapi import FastAPI

app = FastAPI()

# Sample data for demonstration purposes
data = [
    {"id": 1, "name": "Item 1"},
    {"id": 2, "name": "Item 2"},
    {"id": 3, "name": "Item 3"},
]


@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI"}


@app.get("/api/data")
def read_data():
    return data
