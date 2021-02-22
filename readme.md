### Swapi Serverless Lambda AWS

## About the Project 

The status microservice exposes 2 main services.
- **Vehicle**: allow to insert, get by Id,  and get a list of vehicles.
- **People**: allow to insert, get by Id and get a list of people.

#### Build With

- Serverless Framework
- Nodejs
- DynamoDB

### Objetive
- Map all fields from english to spanish and saved them in a database.

## How to use it 

#####  Vehicles

###### Create Vehicle:
Method: POST
Link: https://bnbisj1pge.execute-api.ap-southeast-1.amazonaws.com/dev/vehicles 
Body:

```javascript
    {
        "cargo_capacity": "50000",
        "consumables": "2 months",
        "cost_in_credits": "150000",
        "created": "2014-12-10T15:36:25.724000Z",
        "crew": "46",
        "edited": "2014-12-10T15:36:25.724000Z",
        "length": "36.8",
        "manufacturer": "Corellia Mining Corporation",
        "max_atmosphering_speed": "30",
        "model": "Digger Crawler",
        "name": "Sand Crawler",
        "passengers": "30",
        "pilots": [],
        "films": [
            "https://swapi.py4e.com/api/films/1/"
        ],
        "url": "https://swapi.py4e.com/api/vehicles/4/",
        "vehicle_class": "wheeled"
    }
```
###### Get Vehicle by ID:
Methods: GET
Link: https://bnbisj1pge.execute-api.ap-southeast-1.amazonaws.com/dev/vehicles/{id}
Response:
```
    {
        "velocidadMaxAtmosfera": "30",
        "nombre": "Sand Crawler",
        "claseVehiculo": "wheeled",
        "costoEnCreditos": "150000",
        "url": "https://swapi.py4e.com/api/vehicles/4/",
        "capacidadCarga": "50000",
        "tripulacion": "46",
        "consumibles": "2 months",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/"
        ],
        "pilotos": [],
        "modelo": "Digger Crawler",
        "editado": "2014-12-10T15:36:25.724000Z",
        "fabricante": "Corellia Mining Corporation",
        "creado": "2014-12-10T15:36:25.724000Z",
        "id": "27152140-741a-11eb-b2a5-45b3a885f1fb",
        "longitud": "36.8",
        "pasajeros": "30"
    },
```


###### List Vehicles:
Methods: GET
Link: https://bnbisj1pge.execute-api.ap-southeast-1.amazonaws.com/dev/vehicles
Response:
```
[
    {
        "velocidadMaxAtmosfera": "30",
        "nombre": "Sand Crawler",
        "claseVehiculo": "wheeled",
        "costoEnCreditos": "150000",
        "url": "https://swapi.py4e.com/api/vehicles/4/",
        "capacidadCarga": "50000",
        "tripulacion": "46",
        "consumibles": "2 months",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/"
        ],
        "pilotos": [],
        "modelo": "Digger Crawler",
        "editado": "2014-12-10T15:36:25.724000Z",
        "fabricante": "Corellia Mining Corporation",
        "creado": "2014-12-10T15:36:25.724000Z",
        "id": "27152140-741a-11eb-b2a5-45b3a885f1fb",
        "longitud": "36.8",
        "pasajeros": "30"
    },
    {
        "velocidadMaxAtmosfera": "1200",
        "nombre": "T-16 skyhopper",
        "claseVehiculo": "repulsorcraft",
        "costoEnCreditos": "14500",
        "url": "https://swapi.py4e.com/api/vehicles/6/",
        "capacidadCarga": "50",
        "tripulacion": "1",
        "consumibles": "0",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/"
        ],
        "pilotos": [],
        "modelo": "T-16 skyhopper",
        "editado": "2014-12-20T21:30:21.665000Z",
        "fabricante": "Incom Corporation",
        "creado": "2014-12-10T16:01:52.434000Z",
        "id": "a6a78eb0-741b-11eb-bb9c-331383e8d107",
        "longitud": "10.4 ",
        "pasajeros": "1"
    }
]
```

#####  People

###### Create People:
Method: POST
Link: https://bnbisj1pge.execute-api.ap-southeast-1.amazonaws.com/dev/people
Body:
```
    {
        "name": "C-3PO", 
        "height": "167", 
        "mass": "75", 
        "hair_color": "n/a", 
        "skin_color": "gold", 
        "eye_color": "yellow", 
        "birth_year": "112BBY", 
        "gender": "n/a", 
        "homeworld": "https://swapi.py4e.com/api/planets/1/", 
        "films": [
            "https://swapi.py4e.com/api/films/1/", 
            "https://swapi.py4e.com/api/films/2/", 
            "https://swapi.py4e.com/api/films/3/", 
            "https://swapi.py4e.com/api/films/4/", 
            "https://swapi.py4e.com/api/films/5/", 
            "https://swapi.py4e.com/api/films/6/"
        ], 
        "species": [
            "https://swapi.py4e.com/api/species/2/"
        ], 
        "vehicles": [], 
        "starships": [], 
        "created": "2014-12-10T15:10:51.357000Z", 
        "edited": "2014-12-20T21:17:50.309000Z", 
        "url": "https://swapi.py4e.com/api/people/2/"
    }
```

###### Get People by ID:
Methods: GET
Link: https://bnbisj1pge.execute-api.ap-southeast-1.amazonaws.com/dev/people/{id}}
Response:
```
{
    "nombre": "Luke Skywalker",
    "masa": "77",
    "colorCabello": "blond",
    "vehiculos": [
        "https://swapi.py4e.com/api/vehicles/14/",
        "https://swapi.py4e.com/api/vehicles/30/"
    ],
    "altura": "172",
    "url": "https://swapi.py4e.com/api/people/1/",
    "peliculas": [
        "https://swapi.py4e.com/api/films/1/",
        "https://swapi.py4e.com/api/films/2/",
        "https://swapi.py4e.com/api/films/3/",
        "https://swapi.py4e.com/api/films/6/",
        "https://swapi.py4e.com/api/films/7/"
    ],
    "navesEstelares": [
        "https://swapi.py4e.com/api/starships/12/",
        "https://swapi.py4e.com/api/starships/22/"
    ],
    "colorOjos": "blue",
    "colorPiel": "fair",
    "editado": "2014-12-20T21:17:56.891000Z",
    "ano_nacimiento": "19BBY",
    "especies": [
        "https://swapi.py4e.com/api/species/1/"
    ],
    "creado": "2014-12-09T13:50:51.644000Z",
    "id": "9c3fb0c0-741f-11eb-a127-2d5dfd200537",
    "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
    "genero": "male"
}
```

###### List People:
Methods: GET
Link: https://bnbisj1pge.execute-api.ap-southeast-1.amazonaws.com/dev/people
Response:
```
[
    {
        "nombre": "C-3PO",
        "masa": "75",
        "colorCabello": "n/a",
        "vehiculos": [],
        "altura": "167",
        "url": "https://swapi.py4e.com/api/people/2/",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/4/",
            "https://swapi.py4e.com/api/films/5/",
            "https://swapi.py4e.com/api/films/6/"
        ],
        "navesEstelares": [],
        "colorOjos": "yellow",
        "colorPiel": "gold",
        "editado": "2014-12-20T21:17:50.309000Z",
        "ano_nacimiento": "112BBY",
        "especies": [
            "https://swapi.py4e.com/api/species/2/"
        ],
        "creado": "2014-12-10T15:10:51.357000Z",
        "id": "c1074760-741f-11eb-a127-2d5dfd200537",
        "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
        "genero": "n/a"
    },
    {
        "nombre": "Luke Skywalker",
        "masa": "77",
        "colorCabello": "blond",
        "vehiculos": [
            "https://swapi.py4e.com/api/vehicles/14/",
            "https://swapi.py4e.com/api/vehicles/30/"
        ],
        "altura": "172",
        "url": "https://swapi.py4e.com/api/people/1/",
        "peliculas": [
            "https://swapi.py4e.com/api/films/1/",
            "https://swapi.py4e.com/api/films/2/",
            "https://swapi.py4e.com/api/films/3/",
            "https://swapi.py4e.com/api/films/6/",
            "https://swapi.py4e.com/api/films/7/"
        ],
        "navesEstelares": [
            "https://swapi.py4e.com/api/starships/12/",
            "https://swapi.py4e.com/api/starships/22/"
        ],
        "colorOjos": "blue",
        "colorPiel": "fair",
        "editado": "2014-12-20T21:17:56.891000Z",
        "ano_nacimiento": "19BBY",
        "especies": [
            "https://swapi.py4e.com/api/species/1/"
        ],
        "creado": "2014-12-09T13:50:51.644000Z",
        "id": "9c3fb0c0-741f-11eb-a127-2d5dfd200537",
        "mundoNatal": "https://swapi.py4e.com/api/planets/1/",
        "genero": "male"
    }
]
```
