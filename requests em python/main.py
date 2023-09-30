import requests

def main():
    payload = {"param1":"value"}
    response = requests.get("",params=payload)

    if response.status_code != 200:
        print("Status code: " + response.status_code)
        raise Exception("Error in api")
    
    data = response.json()
    print("JSON data: " + data)

if __name__ == "__main__":
    main()