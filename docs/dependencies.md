# Setting up the Development Environment: External Dependencies

This project relies on a few external APIs. This section walksthrough how to set up projects and get the API keys for:

- Firebase
- Agora
- ipqs

## Firebase

Use the same values for both the backend and frontend. Required API keys:

```
# backend
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_PROJECT_ID=
FIREBASE_MESSAGING_SENDER_ID=
FIREBASE_APP_ID=
FIREBASE_MEASUREMENT_ID=
FIREBASE_JSON_FILE=firebase.json

# frontend
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
REACT_APP_FIREBASE_MEASUREMENT_ID=
```

1. Go to [firebase](https://console.firebase.google.com) and create a project.

2. Go to the project settings to get the project ID.

<img src="https://user-images.githubusercontent.com/24848927/209987644-e4c0d73b-b7b2-4a4a-8ece-ccd4e317c735.png" alt="project id" width="700"/>

3. Scroll down to Project Settings > Apps and create a new web app.

<img src="https://user-images.githubusercontent.com/24848927/209988715-db0d8b04-ec2f-4b0c-936b-99eafd94ba47.png" alt="create new app" width="700"/>

4. Get the values from the demo code.

<img src="https://user-images.githubusercontent.com/24848927/209988981-e1e67a03-5b40-4aa2-8783-b40d4d40e51f.png" alt="create new app part 2" width="700"/>

5. Go to Service Account to get the private key.

<img src="https://user-images.githubusercontent.com/24848927/209988300-bee979fd-3750-40c1-80bf-d7e428b2a6ff.png" alt="service account" width="700"/>

6. Copy the contents of the downloaded file into `xx/BeyondMafia-Integration/firebase.json`. You can use other file names, but update the `FIREBASE_JSON_FILE` env accordingly.

## Agora

Use the same values for both the backend and frontend. Required API keys:

```
# backend
AGORA_ID=
AGORA_CERT=

# frontend
REACT_APP_AGORA_ID=
```

1. Go to [agora](https://console.agora.io) and create a project.

2. Go to the Dashboard > Config.

<img src="https://user-images.githubusercontent.com/24848927/209990701-d8c2781c-1f0b-4329-a6f4-aa700d3a61c0.png" alt="agora dashboard" width="400"/>

3. Get the App ID and certificate.

<img src="https://user-images.githubusercontent.com/24848927/209990518-3573f596-ced0-4f24-97c7-9e50ef820e1e.png" alt="agora" width="400"/>

## ipqs

Required API keys:

```
# backend
IP_API_KEY=
```

1. Go to [ip quality score](https://www.ipqualityscore.com/) and "Get a Free API Key".

2. Go to "View API Docs".

<img src="https://user-images.githubusercontent.com/24848927/209991131-ba10d540-de24-4248-8380-7a21d06485c4.png" alt="ipqs" width="700"/>

3. Go to "Proxy & VPN Detection" > "Getting Started". The API key can be seen in the code sample on the right panel, or if you scroll further down to "Private Key".

<img src="https://user-images.githubusercontent.com/24848927/209991417-a7786627-7306-4204-9b07-ef77e18cd54e.png" alt="ipqs part 2" width="700"/>